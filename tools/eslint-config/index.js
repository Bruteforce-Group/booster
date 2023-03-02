const unicorn = require('./unicorn')

module.exports = {
  env: {
    node: true,
    es6: true,
    ...unicorn.env,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/warnings',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', ...unicorn.plugins],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: 'tsconfig.eslint.json',
    ...unicorn.parserOptions,
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    semi: ['error', 'never'],
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/array-type': [0, 'generic'],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-extra-parens': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'import/no-extraneous-dependencies': ['error'],
    ...unicorn.rules,
  },
}
