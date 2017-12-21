/* @flow */
import 'babel-polyfill'
import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const el = document.querySelector('main')
if (el) {
  ReactDOM.render(<App />, el)
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration)
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}
