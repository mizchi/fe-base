/* @flow */
const defaultConfig = require('../webpack.config')
const getStorybookConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (config, env) => {
  const newConfig = getStorybookConfig(config, env)
  newConfig.module.rules = defaultConfig.module.rules
  return newConfig
}
