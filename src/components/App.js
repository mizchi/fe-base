/* @flow */
import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import createStore from '~/store/createStore'
import Routes from '~/components/Routes'
import Header from './organisms/Header'
import Menu from './organisms/Menu'

export default function App() {
  const store = createStore()
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Layout$Menu>
            <Menu />
          </Layout$Menu>
          <Layout$Header>
            <Header />
          </Layout$Header>
          <Layout$Content>
            <Routes />
          </Layout$Content>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

// prettier-ignore
export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 230px 1fr;
  grid-template-rows:
    5vh
    95vh
  ;
  grid-template-areas:
    'menu header'
    'menu content'
  ;
`

export const Layout$Menu = styled.div`
  background-color: #ddd;
  grid-area: menu;
`

export const Layout$Header = styled.div`
  background-color: #eee;
  grid-area: header;
`

export const Layout$Content = styled.div`
  grid-area: content;
`
