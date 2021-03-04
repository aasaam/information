module.exports = {
  root: true,
  globals: {
    __stack: true,
    __line: true,
    __debugPoint: true,
  },
  env: {
    commonjs: true,
    es6: true,
    browser: false,
    node: true,
  },
  plugins: ['sql', 'sonarjs', 'node', 'security', 'prettier'],
  extends: [
    'plugin:node/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'sonarjs/no-duplicate-string': 'off',
    'sql/format': [
      2,
      {
        ignoreExpressions: false,
        ignoreInline: true,
        ignoreTagless: true,
      },
    ],
    'sql/no-unsafe-query': [
      2,
      {
        allowLiteral: false,
      },
    ],
  },
};
