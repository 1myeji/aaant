module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'object-curly-newline': 0,
    'arrow-parens': ['error', 'as-needed'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'linebreak-style': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['htmlFor'],
      },
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-alert': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'operator-linebreak': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
  },
  ignorePatterns: ['node_modules/'],
};
