/* @flow */
import React from 'react'
import Link from '~/components/atoms/Link'
import Pane from '~/components/atoms/Pane'

export default function Menu() {
  return (
    <Pane>
      <Link to="/">Home</Link>
      |
      <Link to="/counter">Counter</Link>
      |
      <Link to="/about">About</Link>
    </Pane>
  )
}
