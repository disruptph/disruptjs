module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        camelcase: 'off',
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',
        semi: 'off',
        '@typescript-eslint/naming-convention': ['error',
          {
            "selector": "default",
            "format": ["camelCase"]
          },
          {
            "selector": "variable",
            "format": ["camelCase", "PascalCase", "UPPER_CASE"]
          },
          {
            "selector": "function",
            "format": ["camelCase", "PascalCase"]
          },
          {
            "selector": "property",
            "format": ["camelCase", "PascalCase", "snake_case"],
            "leadingUnderscore": "allow"
          },
          {
            "selector": "parameter",
            "format": ["camelCase", "PascalCase"],
            "leadingUnderscore": "allow"
          },
          {
            "selector": "method",
            "format": ["camelCase", "UPPER_CASE"]
          },
          {
            "selector": "enumMember",
            "format": ["PascalCase"]
          },
          {
            "selector": "typeLike",
            "format": ["PascalCase"]
          }
        ],
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-unused-vars': ['error', {
          ignoreRestSiblings: true,
        }],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
      },
    }
  ],
};
