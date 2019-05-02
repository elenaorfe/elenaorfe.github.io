import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import localeData from './assets/i18n.json';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Cookies from './components/pages/Cookies.js';

addLocaleData([...en, ...es]);
// Define user's language
const language = (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, fallback to locale without region code, fallback to en
const messages = localeData[language] || localeData[languageWithoutRegionCode] || localeData.en;
const routing = (
    <IntlProvider locale={language} messages={messages}>
        <App locale={language} />
    </IntlProvider>
)

ReactDOM.render(
    routing,
    document.getElementById('root'));
serviceWorker.unregister();
