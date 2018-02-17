/* @flow */
import React from 'react'
import { snapshot } from 'test/helpers'

function TestSample() {
  return <span>test-sample</span>
}

snapshot('test sample', <TestSample />)
