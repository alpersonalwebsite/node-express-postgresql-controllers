const prettierConfig = require('./.prettierrc.js')

module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6
  },
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
    jasmine: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jasmine/recommended',
    'prettier'
  ],
  plugins: ['prettier', 'jasmine', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/no-unresolved': 'error'
  }
}