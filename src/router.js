/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
import UniversalRouter from 'universal-router'
import routes from './routes'
import createHistory from 'history/createBrowserHistory'
import createStore from './store/createStore'

const router = new UniversalRouter(routes, {
  context: {
    store: createStore()
  }
})

const history = createHistory()
let el // root element

/* Scroll position controller */
const scrollPositionsHistory: { [string]: number } = {}
const updateScrollPosition = (location: { key: string }) => {
  scrollPositionsHistory[location.key] = {
    scrollX: window.pageXOffset,
    scrollY: window.pageYOffset
  }
}

const deletePosition = (location: { key: string }) => {
  delete scrollPositionsHistory[location.key]
}

const restoreScollPosition = (location: { hash: string }) => {
  let scrollX = 0
  let scrollY = 0
  const pos = scrollPositionsHistory[location.key]
  if (pos) {
    scrollX = pos.scrollX
    scrollY = pos.scrollY
  } else {
    const targetHash = location.hash.substr(1)
    if (targetHash) {
      const target = document.getElementById(targetHash)
      if (target) {
        scrollY = window.pageYOffset + target.getBoundingClientRect().top
      }
    }
  }
  // Restore the scroll position if it was saved into the state
  // or scroll to the given #hash anchor
  // or scroll to top of the page
  window.scrollTo(scrollX, scrollY)
}

let _off = false
const switchOffScrollRestorationOnce = () => {
  if (_off) {
    return
  }
  // Switch off the native scroll restoration behavior and handle it manually
  // https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
  if (window.history && 'scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }
  _off = true
  return
}

const onLocationChange = async (location, action): Promise<void> => {
  updateScrollPosition(location)
  try {
    const route = await router.resolve(location)
    if (route.redirect) {
      history.replace(route.redirect)
      return
    }

    if (action === 'PUSH') {
      deletePosition(location)
    }

    if (React.isValidElement(route)) {
      // For HMR
      // https://github.com/nozzle/react-static/issues/144#issuecomment-348270365
      const render = !!module.hot ? ReactDOM.render : ReactDOM.hydrate
      render(route, el, () => {
        switchOffScrollRestorationOnce()
        restoreScollPosition(history.location)
      })
    } else {
      // not react
    }
  } catch (e) {
    // or render 404
    console.error(e)
  }
}

export const start = () => {
  el = document.querySelector('.root')
  history.listen(onLocationChange)
  onLocationChange(history.location)
}

// HMR
if (module.hot) {
  module.hot.accept('./routes', () => {
    onLocationChange(history.location)
  })
}

/* Link */

function isLeftClickEvent(event: SytheticEvent<>) {
  return event.button === 0
}

function isModifiedEvent(event: SytheticEvent<>) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

const handleClick = ({ onClick, to }) => event => {
  if (onClick) {
    onClick(event)
  }

  if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
    return
  }

  if (event.defaultPrevented === true) {
    return
  }

  event.preventDefault()
  if (
    to !== history.createHref(history.location).replace(location.origin, '')
  ) {
    history.push(to)
  } else {
    // console.info('reject transition by same url')
  }
}

type Props = {
  to: string,
  children: any,
  onClick?: Function
}

export function Link(props: Props) {
  const { to, children, onClick, ...others } = props
  return (
    <a href={to} {...others} onClick={handleClick({ onClick, to })}>
      {children}
    </a>
  )
}
