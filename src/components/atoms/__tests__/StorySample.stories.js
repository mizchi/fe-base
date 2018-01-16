/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react'

export default function StorySample() {
  return <span>story-sample</span>
}

storiesOf('StorySample', module).add('to Storybook', () => <StorySample />)
