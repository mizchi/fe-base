/* @flow */
import React from 'react'
import { Link } from 'react-router-dom'
import Pane from '../atoms/Pane'

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
