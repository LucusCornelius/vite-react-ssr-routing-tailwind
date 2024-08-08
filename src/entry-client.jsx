import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from "./Router/Router.jsx";

import './index.css'

ReactDOM.hydrateRoot(
    document.getElementById('root'),
    <React.StrictMode>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </React.StrictMode>
);
