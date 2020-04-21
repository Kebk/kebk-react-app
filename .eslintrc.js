module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'linebreak-style': ['off', 'windows'],
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': [2, { ignore: ['webpack'] }]
  }
}
