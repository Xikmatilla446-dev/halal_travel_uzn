import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'


import { store } from './redux/store.js'
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import { BrowserRouter } from "react-router-dom";
serviceWorker.unregister();


ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
