/* @flow */
import { configure } from '@storybook/react'

const req = require.context('../src/components/', true, /stories\.js$/)
const loadStories = req.keys().forEach(req)

configure(loadStories, module)
