/** @license
 * React Printable CV https://github.com/tomchen/react-printable-cv by Tom CHEN, MIT License
 */

import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import i18nPromise from './utils/i18n'
import App from './App'
import rootReducer from './reducers'

i18nPromise().then((langChangeMiddleware) => {
  const composeEnhancers =
    process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose

  const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(langChangeMiddleware)),
  )

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  )
})
