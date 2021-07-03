<template>
  <div class="winner-Popup" v-if="isShowPop">
    <van-overlay :show="isShowPop" @click="closePop">
      <div class="wrapper">
        <div class="block" @click.stop>
          <img
            src="@/static//close.png"
            alt=""
            class="close"
            @click="closePop"
          />
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
/**
  @description 该组件是vant组件库二次封装的遮罩弹窗
  @tutorial
  @property {Boolean} isShowPop 控制弹窗显示与隐藏
  @example <WinnerPopup :isShowPop.sync="isShow" />
 */
import { Overlay } from 'vant'
export default {
  components: {
    [Overlay.name]: Overlay,
  },
  data() {
    return {}
  },
  props: {
    isShowPop: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    closePop() {
      this.$emit('update:isShowPop', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.winner-Popup {
  position: absolute;
  z-index: 99;
  color: #000;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .block {
    width: 500px;
    height: 500px;
    background-color: #fff;
    border-radius: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .close {
      width: 52px;
      height: 52px;
      position: absolute;
      right: 30px;
      top: 30px;
    }
  }
}
</style>