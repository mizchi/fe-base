/* @flow */
import React from 'react'
import withCounter from '~/hocs/withCounter'
import Pane from '~/components/atoms/Pane'

export default withCounter(props => {
  return (
    <Pane>
      <button onClick={() => props.actions.increment()}>+1</button>
      <span>{props.value}</span>
    </Pane>
  )
})
