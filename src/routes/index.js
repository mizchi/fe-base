/* @flow */
/* eslint-disable react/display-name */
import React from 'react'
import App from '~/components/App'
import Home from '~/components/pages/Home'
import About from '~/components/pages/About'
import Counter from '~/components/pages/Counter'
import * as CounterActions from '~/reducers/counter'

type Context = {
  store: any
}

export default [
  {
    path: '',
    action: (context: Context) => {
      return (
        <App store={context.store}>
          <Home />
        </App>
      )
    }
  },
  {
    path: '/about',
    action: (context: Context) => {
      return (
        <App store={context.store}>
          <About />
        </App>
      )
    }
  },
  {
    path: '/counter',
    action: async (context: Context) => {
      const dispatch = context.store.dispatch
      dispatch(CounterActions.increment()) // sync
      await dispatch(CounterActions.incrementAsync()) // async
      return (
        <App store={context.store}>
          <Counter />
        </App>
      )
    }
  },
  {
    path: '/nested',
    children: [
      {
        path: '/a',
        action: () => {
          console.log('a')
        }
      },
      {
        path: '/b',
        action: () => {
          console.log('b')
        }
      },
      {
        path: '/c',
        action: () => {
          return { redirect: '/nested/a' }
        }
      }
    ],
    action: () => {
      console.log('nested action')
    }
  }
]
