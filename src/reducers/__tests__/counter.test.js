/* @flow */
import test from 'ava'
import counter from '../counter'

const noopAction: any = { type: 'nop' }

test(t => {
  const data = counter(undefined, noopAction)
  t.deepEqual(data, { value: 0 })
})
