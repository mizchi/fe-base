/* @flow */
import { combineReducers } from 'redux'
import counter, { type Action as CounterAction } from './counter'

export type Action = CounterAction

export type State = {
  counter: $Call<typeof counter, void, any>
}

export default combineReducers({ counter })
