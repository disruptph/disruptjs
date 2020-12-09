module.exports = {
  extends: [
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/button-has-type': 'warn',
    'react/jsx-curly-spacing': 'error',
    'react/destructuring-assignment': 'error',
    'react/display-name': 'off',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': ['error', { nonEmpty: false }],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/no-array-index-key': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-state': 'error',
    'react/prop-types': ['warn', { ignore: ['children', 'className'] }],
    'react/style-prop-object': 'error',
    'react/self-closing-comp': 'error',
    'react/void-dom-elements-no-children': 'error',

    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
