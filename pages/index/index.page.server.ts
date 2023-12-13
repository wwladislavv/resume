export { onBeforeRender };

import { render } from 'vike/abort';
import fetch from 'node-fetch';

import type { ResumeData } from "./index.page";

async function onBeforeRender() {
    const baseUrl = import.meta.env.VITE_RESUME_BASE_URL;
    const spaceId = import.meta.env.RESUME_SPACE_ID;
    const entryId = import.meta.env.RESUME_ENTRY_ID;
    const accessToken = import.meta.env.RESUME_ACCESS_TOKEN;

    const response = await Promise.all([
        fetch(
            `${baseUrl}/spaces/${spaceId}/environments/master/entries/${entryId}?access_token=${accessToken}`
        ),
        fetch(
            `${baseUrl}/spaces/${spaceId}/environments/master/assets/67NGoX0XuxAmvAlCsJ34eE?access_token=${accessToken}`
        )
    ]);
    const [resumeResponse, screenshotResponse] = response;

    if (resumeResponse.status === 404) {
        throw render(404, { abortReason: 'Something went wrong accessing resume' })
    }

    if (!resumeResponse.ok) {
        throw render(500, { abortReason: 'Something went wrong accessing resume' })
    }

    const screenshot = await screenshotResponse.json() as {
        fields: {
            file: {
                contentType: string,
                fileName: string;
                url: string;
                details: {
                    image: {
                        width: number;
                        height: number;
                    },
                    size: number;
                }
            }
        }
    };
    try {
        const dataJSON = await resumeResponse.json() as {
            fields: {
                data: ResumeData
            } 
        };

        const resumeData = dataJSON.fields?.data ?? {};

        const pageProps = {
            ...resumeData
        };
        return {
            pageContext: {
                screenshot: screenshot.fields.file.url,
                pageProps,
            }
        }
    } catch (e) {
        throw render(500, { abortReason: 'Something went wrong accessing resume' })
    }

}