/* @flow */
/* eslint-disable react/display-name */
import React from 'react'
import App from '~/components/App'
import Home from '~/components/pages/Home'
import About from '~/components/pages/About'
import Counter from '~/components/pages/Counter'
import * as CounterActions from '~/reducers/counter'

type Context = {
  store: {
    dispatch: Function
  }
}

type RouteAction =
  | {
      title: string,
      component: any
    }
  | {
      redirect: string
    }
  | void

const routes: Array<{
  path: string,
  action: Context => RouteAction | Promise<RouteAction>
}> = [
  {
    path: '',
    action: ctx => {
      return {
        title: 'Home',
        component: (
          <App store={ctx.store}>
            <Home />
          </App>
        )
      }
    }
  },
  {
    path: '/about',
    action: ctx => {
      return {
        title: 'About',
        component: (
          <App store={ctx.store}>
            <About />
          </App>
        )
      }
    }
  },
  {
    path: '/counter',
    action: async ctx => {
      const dispatch = ctx.store.dispatch
      dispatch(CounterActions.increment()) // sync
      await dispatch(CounterActions.incrementAsync()) // async
      return {
        title: 'Counter',
        component: (
          <App store={ctx.store}>
            <Counter />
          </App>
        )
      }
    }
  },
  {
    path: '/nested',
    children: [
      {
        path: '/a',
        action: () => {
          console.log('a')
          return {
            title: 'a',
            component: <h1>a</h1>
          }
        }
      },
      {
        path: '/b',
        action: _ctx => {
          console.log('b')
          return {
            title: 'b',
            component: <h1>b</h1>
          }
        }
      },
      {
        path: '/c',
        action: _ctx => {
          return { redirect: '/nested/a' }
        }
      }
    ],
    action: _ctx => {
      console.log('nested action')
    }
  }
]

export default routes
