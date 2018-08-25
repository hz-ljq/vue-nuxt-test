module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // 校验 .vue 文件
  plugins: ['html'],
  // 自定义规则
  rules: {
    'semi': 0,
    "space-before-function-paren": ["error", "never"],
    // "semi": [2, "always"],//语句强制分号结尾
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    // // allow async-await
    // 'generator-star-spacing': 'off',
    // // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  globals: {}
}
