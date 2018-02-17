/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
import UniversalRouter from 'universal-router'
import routes from './routes'
import createHistory from 'history/createBrowserHistory'
import createStore from './store/createStore'
import * as scrollHelpers from './helpers/scrollHelpers'

const router = new UniversalRouter(routes, {
  context: {
    store: createStore()
  }
})

export default router

export const history = createHistory()

let _rootElement // root element
const getRootElement = () =>
  _rootElement || (_rootElement = document.querySelector('.root'))

const onLocationChange = async (location, action): Promise<void> => {
  scrollHelpers.updateScrollPosition(location)
  try {
    const result = await router.resolve(location)
    if (result.redirect) {
      history.replace(result.redirect)
      return
    }

    if (action === 'PUSH') {
      scrollHelpers.deletePosition(location)
    }

    if (result.title && typeof document !== 'undefined') {
      document.title = result.title
    }

    const el = getRootElement()
    if (el && React.isValidElement(result.component)) {
      // For HMR
      // https://github.com/nozzle/react-static/issues/144#issuecomment-348270365
      // const render = !!module.hot ? ReactDOM.render : ReactDOM.hydrate
      ReactDOM.render(result.component, el, () => {
        scrollHelpers.switchOffScrollRestorationOnce()
        scrollHelpers.restoreScollPosition(history.location)
      })
    } else {
      // not react
    }
  } catch (e) {
    // or render 404
    console.error(e)
  }
}

export const startHistory = () => {
  history.listen(onLocationChange)
  onLocationChange(history.location)
}
