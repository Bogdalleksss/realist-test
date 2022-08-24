module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    requireConfigFile: false,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'linebreak-style': 'off', // Неправильно работает в Windows.
    'no-console': 'off',
    'no-debugger': 'off',
    'no-alert': 'off',
    'no-underscore-dangle': 'off',
    'no-tabs': 'off',
    'max-len': 'off',
    'no-shadow': 'off',
    'max-classes-per-file': 'off',
    'no-unused-vars': 'off',
    'no-restricted-syntax': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-exports': 'off',
    'no-mixed-spaces-and-tabs': 0,
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'object-property-newline': 'error',
    'function-paren-newline': 'off', // Несовместимо с prettier
    'space-before-function-paren': 0, // Несовместимо с prettier
    'arrow-parens': 'off', // Несовместимо с prettier
    'object-curly-newline': 'off', // Несовместимо с prettier
    'no-mixed-operators': 'off', // Несовместимо с prettier
    'no-param-reassign': 'off',
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    'vue/no-deprecated-filter': 'off',
    'template-curly-spacing': 'off',
    indent: 'off',
    'global-require': 0,
    'vue/no-deprecated-v-bind-sync': 'off',
    'default-case': 'off',
    'vue/valid-v-slot': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'no-unsafe-optional-chaining': 'off',
    'prefer-regex-literals': 'off',
    'prefer-exponentiation-operator': 'off',
    'default-param-last': 'warn',
    'vue/no-reserved-component-names': 'off',
  },
};
