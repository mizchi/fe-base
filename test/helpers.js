/* @flow */
import test from 'ava'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

export const snapshot = _element =>
  test(t => t.snapshot(toJson(shallow(element))))
