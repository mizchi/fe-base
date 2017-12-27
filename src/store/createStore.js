/* @flow */
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

export default () => {
  return createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware, promiseMiddleware, thunkMiddleware)
  )
}
