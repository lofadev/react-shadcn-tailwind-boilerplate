import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: true,
          trailingComma: 'all',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: false,
        },
      ],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/react-in-jsx-scope': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-use-before-define': 'error',
      'no-duplicate-imports': 'warn',
      'react/jsx-key': [
        'error',
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      'react/prop-types': 'off',
      'no-multiple-empty-lines': 'warn',
      'no-restricted-imports': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      eqeqeq: 'off',
    },
  },
];
