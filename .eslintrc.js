module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'eslint:recommended', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': [1, { ignoreFunctionalComponents: true }],
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {},
    },
  },
}
