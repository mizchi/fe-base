/* @flow */
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import createStore from '../store/createStore'
import Routes from '../components/Routes'
import Layout, * as Area from './_layouts/AppLayout'
import Header from './organisms/Header'
import Menu from './organisms/Menu'

export default function App() {
  const store = createStore()
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Area.menu>
            <Menu />
          </Area.menu>
          <Area.header>
            <Header />
          </Area.header>
          <Area.content>
            <Routes />
          </Area.content>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}
