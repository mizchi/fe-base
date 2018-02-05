/* @flow */
import test from 'ava'
import { elementToJson } from 'test/helpers'
import routes from '../index'

test(async t => {
  const router = new UniversalRouter(routes)
  const route = await router.resolve('/')
  t.snapshot(elementToJson(route))
})
