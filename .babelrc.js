const env = require('./env-config')
module.exports = {
  "presets": ["next/babel"],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    "@babel/plugin-proposal-class-properties",
    ['transform-define', env]
  ]
}