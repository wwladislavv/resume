export { onBeforeRender }

import { render } from 'vike/abort'
import fetch from 'node-fetch'

async function onBeforeRender() {
    const baseUrl = import.meta.env.VITE_RESUME_BASE_URL;
    const spaceId = import.meta.env.RESUME_SPACE_ID;
    const entryId = import.meta.env.RESUME_ENTRY_ID;
    const accessToken = import.meta.env.RESUME_ACCESS_TOKEN;

    const response = await fetch(`${baseUrl}/spaces/${spaceId}/environments/master/entries/${entryId}?access_token=${accessToken}`)

    if (response.status === 404) {
        throw render(404, { abortReason: 'Something went wrong accessing resume' })
    }

    const dataJSON = await response.json()

    const resumeData = dataJSON.fields?.data ?? {};

    const pageProps = { resumeData }
    return {
        pageContext: {
            pageProps,
        }
    }
}