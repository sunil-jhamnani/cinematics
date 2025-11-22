module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    ['transform-define', { 'process.env.BACKEND_URL': process.env.NODE_ENV === 'production' ? '/cinematics/' : '' }]
  ]
};