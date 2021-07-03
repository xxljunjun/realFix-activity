<template>
  <div class="home">
    <div>{{ $t('greeting') }}</div>
    <button @click="changeLanguage">点我改变语言</button>
    <hr />
    <div></div>
    <button @click="getWheather">点我改变语言</button>
    <ButtomBar />
  </div>
</template>

<script>
import { getWeather } from '@/server/api/api.js'
import ButtomBar from '@/components/bottom-bar'
export default {
  data() {
    return {}
  },
  mounted() {
    console.log('323', this.$i18nMsg)
    console.log('国际化', this.$i18n)
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'
    },
    getWheather() {
      let params = {
        city: '深圳',
        appkey: '7a85fc9df58cd155f764e033a257d879',
      }
      getWeather(params).then((res) => {
        console.log('获取天气', res)
      })
    },
  },
  components: {
    ButtomBar,
  },
}
</script>

<style lang="scss" scoped>
.home {
  font-size: 32px;
  .inner-home {
    width: 750px;
    height: 100px;
    background: red;
  }
}
</style>