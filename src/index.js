import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import localeData from './assets/i18n.json';
import aboutData from './assets/data/about.json';
import coursesData from './assets/data/courses.json';
import personalProjectsData from './assets/data/personal-projects.json';
import workData from './assets/data/work.json';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Join translations
for (let key in localeData) {
    Object.assign(localeData[key], aboutData[key], coursesData[key], personalProjectsData[key], workData[key]);
}

addLocaleData([...en, ...es]);
// Define user's language
const language = (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, fallback to locale without region code, fallback to en
const messages = localeData[language] || localeData[languageWithoutRegionCode] || localeData.en;

ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
        <App locale={language} />
    </IntlProvider>,
    document.getElementById('root'));
serviceWorker.unregister();
