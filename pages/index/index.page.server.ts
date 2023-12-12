export { onBeforeRender };

import { render } from 'vike/abort';
import fetch from 'node-fetch';

import type { ResumeData } from "./index.page";

async function onBeforeRender() {
    const baseUrl = import.meta.env.VITE_RESUME_BASE_URL;
    const spaceId = import.meta.env.RESUME_SPACE_ID;
    const entryId = import.meta.env.RESUME_ENTRY_ID;
    const accessToken = import.meta.env.RESUME_ACCESS_TOKEN;

    const response = await fetch(
        `${baseUrl}/spaces/${spaceId}/environments/master/entries/${entryId}?access_token=${accessToken}`
    )

    if (response.status === 404) {
        throw render(404, { abortReason: 'Something went wrong accessing resume' })
    }

    if (!response.ok) {
        throw render(500, { abortReason: 'Something went wrong accessing resume' })
    }

    try {
        const dataJSON = await response.json() as {
            fields: {
                data: ResumeData
            } 
        };

        const resumeData = dataJSON.fields?.data ?? {};

        const pageProps = { ...resumeData }
        return {
            pageContext: {
                pageProps,
            }
        }
    } catch (e) {
        throw render(500, { abortReason: 'Something went wrong accessing resume' })
    }

}