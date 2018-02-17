/* @flow */
/* Scroll position controller */
const scrollPositionsHistory: {
  [string]: { scrollX: number, scrollY: number }
} = {}
export const updateScrollPosition = (location: { key: string }) => {
  scrollPositionsHistory[location.key] = {
    scrollX: (window: any).pageXOffset,
    scrollY: (window: any).pageYOffset
  }
}

export const deletePosition = (location: { key: string }) => {
  delete scrollPositionsHistory[location.key]
}

export const restoreScollPosition = (location: { hash: string }) => {
  let scrollX = 0
  let scrollY = 0
  const pos = scrollPositionsHistory[(location: any).key]
  if (pos) {
    scrollX = (pos: any).scrollX
    scrollY = (pos: any).scrollY
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
export const switchOffScrollRestorationOnce = () => {
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
