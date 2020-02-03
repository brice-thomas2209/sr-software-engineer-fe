module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        '#': 'prettier config in here :)',
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ],
    'no-unused-vars': ["error", {"varsIgnorePattern": "^_", "argsIgnorePattern": "^_" }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['error', 2],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    semi: ['error', 'never'],
    'no-console': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    quotes: [2, 'single', { avoidEscape: true }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
