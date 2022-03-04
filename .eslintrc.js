/*
 * @Description: 😎
 * @Version: 2.0
 * @Autor: 曹老板
 * @Date: 2021-11-10 09:09:20
 * @LastEditors: 曹老板
 * @LastEditTime: 2021-12-24 09:17:23
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly'
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    /* 取消禁止非空断言 */
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/no-mutating-props': 'off',
    '@typescript-eslint/ban-types': 'off'
  }
}
