import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server';
import Router from "./Router/Router.jsx";

export function render(url) {
    const html = ReactDOMServer.renderToString(
        <React.StrictMode>
            <StaticRouter location={url}>
                <Router />
            </StaticRouter>
        </React.StrictMode>
    );
    return { html };
}
