/* @flow */
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '~/reducers'

let _store
export default () => {
  if (_store) {
    return _store
  }
  return (_store = createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware, promiseMiddleware, thunkMiddleware)
  ))
}
