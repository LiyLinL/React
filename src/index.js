/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

import Layout from './component/layout/Layout';
import './css/Ant.css';
import './i18n/i18n';

ReactDOM.render(
    <>
        <HashRouter>
            <Layout />
        </HashRouter>
    </>,
    document.getElementById('root')
);

reportWebVitals;
