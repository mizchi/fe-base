/* @flow */
import React from 'react'
import { history } from '../../router'

function isLeftClickEvent(event: any) {
  return event.button === 0
}

function isModifiedEvent(event: any) {
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

export default function Link(props: Props) {
  const { to, children, onClick, ...others } = props
  return (
    <a href={to} {...others} onClick={handleClick({ onClick, to })}>
      {children}
    </a>
  )
}
