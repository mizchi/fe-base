/* @flow */
import React, { type Node } from 'react'

// Generic State Manager
export default class WithState<State> extends React.Component<
  {
    render: (State, ((State) => State) => void) => Node
  },
  State
> {
  render() {
    return this.props.render(this.state, this.setState.bind(this))
  }
}

/* Example:
type State = { value: number }
const initialState: State = { value: 0 }
<WithState
  render={(state = initialState, update: ((State) => State) => void) => {
    return <span>{state.value}</span>
  }}
/>
*/
