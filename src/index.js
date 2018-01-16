/* @flow */
import 'babel-polyfill'
import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { injectGlobal } from 'styled-components'

injectGlobal`
  html, body, main {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 4px;
    box-shadow: inset 0 0 5px rgba(255, 255, 255, .1);
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, .5);
    border-radius: 4px;
    box-shadow:0 0 0 1px rgba(255, 255, 255, .3);
  }
`

const el = document.querySelector('main')
if (el) {
  ReactDOM.render(<App />, el)
}
