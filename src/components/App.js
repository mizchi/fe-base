/* @flow */
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import createStore from '../store/createStore'
import Routes from '../components/Routes'

export default function App() {
  const store = createStore()
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}
