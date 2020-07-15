/** @license
 * React Printable CV https://github.com/tomchen/react-printable-cv by Tom CHEN, MIT License
 */

import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import App from './App'
import rootReducer from './reducers'

const settings = require('Settings')

i18n.use(initReactI18next).init({
  ns: ['common'],
  defaultNS: 'common',
  lowerCaseLng: true,
  lng: settings.default_lang,
  fallbackLng: {
    default: ['en'],
  },
  resources: {},
  debug: process.env.NODE_ENV === 'development',
  keySeparator: false,
  nsSeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

const langChangeMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const previousLang = getState().lang
    const ret = next(action)
    const currentLang = getState().lang
    if (previousLang !== currentLang) {
      i18n.changeLanguage(currentLang)
    }
    return ret
  }
}

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk, langChangeMiddleware)),
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
