/* @flow */
import test from 'ava'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

export const snapshot = element =>
  test(t => t.snapshot(toJson(shallow(element))))

export const elementToJson = element => toJson(shallow(element))
