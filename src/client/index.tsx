import '../styles/global.css'
import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import IntlProvider from '../common/i18n/IntlProvider'
import { HelmetProvider } from 'react-helmet-async'
import store from '../common/store'
import App from '../common/App'

hydrateRoot(
  document.getElementById('root'),
  <Provider store={store}>
    <BrowserRouter>
      <IntlProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </IntlProvider>
    </BrowserRouter>
  </Provider>
)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }
}
