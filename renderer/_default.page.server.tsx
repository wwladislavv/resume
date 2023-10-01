export { render }
// See https://vike.dev/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

import ReactDOMServer from 'react-dom/server'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import type { PageContextServer } from './types'

async function render(pageContext: PageContextServer) {
    const { Page, pageProps } = pageContext
    // This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
    if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
    const pageHtml = ReactDOMServer.renderToString(
        <PageShell pageContext={pageContext}>
            <Page {...pageProps} />
        </PageShell>
    )

    // See https://vike.dev/head
    const { documentProps } = pageContext.exports
    const title = (documentProps && documentProps.title) || 'Vladyslav K.';
    const desc = (documentProps && documentProps.description) || 'Resume app built with Vike.'

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
    
        <link type="image/png" sizes="16x16" rel="icon" href="/cv-16.png">
        <link type="image/png" sizes="32x32" rel="icon" href="/cv-32.png">
    
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
    
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400;600&display=swap" rel="stylesheet">
    
        <link href="https://meyerweb.com/eric/tools/css/reset/reset.css" rel="stylesheet">
        
        <title>${title}</title>
      </head>
      <body>
         <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

    return {
        documentHtml,
        pageContext: {
            // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
        }
    }
}