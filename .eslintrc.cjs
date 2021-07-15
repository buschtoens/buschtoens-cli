'use strict';

// @TODO this can be removed once `trailingComma` is enabled upstream by default
const prettierTrailingComma = {
  'prettier/prettier': [
    'error',
    require('@clark/prettier-config/trailing-comma'),
  ],
};

const importFileExtension = {
  // 'node/file-extension-in-import': [
  //   'error',
  //   'always',
  //   { tryExtensions: ['.mjs', '.js', '.cjs'] },
  // ],
  // 'node/no-missing-import': [
  //   'error',
  //   'always',
  //   { tryExtensions: ['.ts', '.tsx', '.mjs', '.js', '.cjs'] },
  // ],
};

const ruleOverrides = {
  ...prettierTrailingComma,
  ...importFileExtension,

  'unicorn/no-useless-undefined': 'off',
  '@typescript-eslint/ban-types': 'off',
  '@typescript-eslint/naming-convention': 'off',
};

module.exports = {
  root: true,
  extends: ['@clark/node'],
  rules: { ...ruleOverrides },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@clark/node-typescript', 'plugin:node/recommended-module'],
      rules: { ...ruleOverrides },
    },
    {
      files: ['*.tsx'],
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      rules: { ...ruleOverrides },
    },
  ],
};
