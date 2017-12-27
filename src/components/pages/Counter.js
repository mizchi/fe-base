/* @flow */
import React from 'react'
import enhancer from '../../enhancers/counterEnhancer'
import Label from '../atoms/Label'

export default enhancer(props => {
  return (
    <div>
      <h1>Counter</h1>
      <Label text={props.value.toString()} />
      <button onClick={() => props.actions.increment()}>+</button>
    </div>
  )
})
