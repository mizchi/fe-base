/* @flow */
import test from 'ava'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

export const snapshot = (title: string, element: any) =>
  test(title, t => t.snapshot(toJson(shallow(element))))

export const elementToJson = (element: any) => toJson(shallow(element))
