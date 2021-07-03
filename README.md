# 此分支可用作H5页面的开发，以及手机端h5页面适配开发

# 一、创建项目
* npm install @vue/cli -g
* vue create webtemplate

# 二、安装vant-UI组件库
* npm install vant -S  
* npm i babel-plugin-import -D  //按需引入
* 在.babelrc 中添加配置
```
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```
```
import { Overlay } from 'vant'
components: {
    [Overlay.name]: Overlay,
},
```

# 三、移动端适配方案（兼容eant-UI）
* npm i postcss-px-to-viewport -D
* 在.postcssrc.js文件中
```
const path = require('path');
module.exports = ({ file }) => {
  const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 375 : 750;

  return {
    plugins: {
      autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
      "postcss-px-to-viewport": {
        unitToConvert: "px", // 要转化的单位
        viewportWidth: 2732, // UI设计稿的宽度
        unitPrecision: 2, // 转换后的精度，即小数点位数
        propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
        // selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配/
        landscape: false // 是否处理横屏情况
      }
    }
  }

}
```
# 四、配置路由
* npm install vue-router -S  

# 五、配置状态管理
* npm install vuex -S  

# 六、配置sass
* npm install sass-loader -D    
* npm install node-sass -D

# 七、配置axios
* npm install axios -S

# 八、安装i18n国际化
+ npm install vue-i18n --save
+ //在i18n.js中
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zh from '@/i18n/zh';
import en from '@/i18n/en';
Vue.use(VueI18n);
const messages = {
	zh, // 这是zh: zh的简写，后面同理
	en,
};
export default new VueI18n({
	locale: 'zh',
	messages,
});
+ //在main.js中
import i18n from '@/utils/i18n';
new App(
	i18n,
).$mount()
Vue.prototype.$i18nMsg = i18n.messages[i18n.locale] //挂载上去this.$i18nMsg.xxx去访问
+ 在i18n文件夹中
zh.js
en.js
//this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'
