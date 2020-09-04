import React from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import '@shopify/polaris/dist/styles.css';
import Navigation from './Navigation';
import fr from './locales/fr.json';
import * as serviceWorker from './serviceWorker';

i18next
    .use(initReactI18next)
    .init({
        debug: false,
        resources: {
            fr: fr
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        keySeparator: false,
        nsSeparator: false
    })
    .then(() => {
        ReactDOM.render(
            <React.StrictMode>
                <Navigation/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
