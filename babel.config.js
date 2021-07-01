module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  /* 配置vantUI组件文件按需引入 */
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
