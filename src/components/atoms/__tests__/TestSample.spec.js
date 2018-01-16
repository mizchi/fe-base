/* @flow */
import React from 'react'
import { snapshot } from 'test/helpers'

export default function TestSample() {
  return <span>test-sample</span>
}

snapshot(<TestSample />)
