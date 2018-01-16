/* @flow */
import React from 'react'
import { justSnapshot } from '@mizchi/ava-helper'

export default function TestSample() {
  return <span>test-sample</span>
}

justSnapshot(<TestSample />)
