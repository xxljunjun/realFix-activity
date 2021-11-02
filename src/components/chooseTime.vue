<template>
  <van-popup
    v-model="show"
    class="my_vant"
    closeable
    position="bottom"
    :style="{ height: '50%' }"
    @click-overlay="clickoverlay"
    @click-close-icon="clickicon"
  >
    <div class="title">请选择面试时间</div>
    <div class="tab">
      <div
        class="firstYear"
        :class="{ selectyear: leftyear }"
        @click="chooseYear(0)"
      >
        {{ year + "年" }}
      </div>
      <div
        class="secondYear"
        :class="{ selectyear: !leftyear }"
        @click="chooseYear(1)"
      >
        {{ year + 1 + "年" }}
      </div>
    </div>
    <div class="process">
      <div class="month step_1" v-if="active == 1">请选择月份</div>
      <div class="step step_2" v-if="active >= 2">
        <div class="time_box">
          <div class="txt">{{ selectTime.mounth + "月" }}</div>
          <div class="dot"></div>
        </div>
        <div class="line"></div>
      </div>
      <div class="step step_3" v-if="active >= 3">
        <div class="time_box">
          <div class="txt">{{ selectTime.day + "日" }}</div>
          <div class="dot"></div>
        </div>
        <div class="line"></div>
      </div>
      <div class="step step_4" v-if="active >= 4">
        <div class="time_box">
          <div class="txt">{{ selectTime.time }}</div>
          <div class="dot"></div>
        </div>
        <div class="line"></div>
      </div>
      <div class="step step_5" v-if="active > 1">
        <div class="time_box_1">
          <div class="txt">{{ Operation_txt }}</div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
    <div v-if="mounthStatus">
      <div
        class="times"
        v-for="(item, index) in mounthList"
        :key="index"
        @click="chooseMounth(item)"
      >
        {{ item + "月" }}
      </div>
    </div>
    <div v-if="dayStatus">
      <div
        class="times"
        v-for="(item, index) in DayList"
        :key="index"
        @click="chooseDay(item)"
      >
        {{ item + "日" }}
      </div>
    </div>
    <div v-if="timeStatus">
      <div
        class="times"
        v-for="(item, index) in timeList"
        :key="index"
        @click="chooseTime(item)"
      >
        {{ item }}
      </div>
    </div>
    <div v-if="timeStatus_end">
      <div
        class="times"
        v-for="(item, index) in timeList"
        :key="index"
        @click="chooseTime_end(item)"
      >
        {{ item }}
      </div>
    </div>
  </van-popup>
</template>

<script>
export default {
  props: {
    year: {
      type: Number,
      default: 2021,
    },
  },
  data() {
    return {
      Operation_txt: "请选择日期",
      active: 1, //步骤
      show: false, //弹窗开关
      leftyear: true,
      mounthStatus: true,
      dayStatus: false,
      timeStatus: false,
      timeStatus_end: false,
      mounthList: 12,
      DayList: 31,
      timeList: [
        "00:00",
        "00:30",
        "01:00",
        "01:30",
        "02:00",
        "02:30",
        "03:30",
        "04:00",
        "05:30",
        "06:00",
        "06:30",
        "07:00",
        "07:30",
        "08:00",
      ],
      selectTime: {
        year: "",
        mounth: "",
        day: "",
        time: "",
        endtime: "",
      },
    };
  },
  mounted() {
    this.selectTime.year = this.year;
  },
  methods: {
    /**
     * @function:关闭弹窗
     */
    clickoverlay() {
      this.show = false;
    },
    /**
     * @function:关闭弹窗
     */
    clickicon() {
      this.show = false;
    },
    /**
     * @function:选择时间的弹窗显示
     */
    showDialog() {
      this.show = true;
    },
    /**
     * @function:重置时间选择器
     */
    reset() {
      this.mounthStatus = true;
      this.dayStatus = false;
      this.timeStatus = false;
      this.timeStatus_end = false;
      this.leftyear = true;
      this.Operation_txt = "请选择日期";
      this.active = 1;
    },
    chooseYear(val) {
      this.reset();
      this.mounthList = 12;
      if (val) {
        this.leftyear = false;
        this.selectTime.year = this.year + 1;
      } else {
        this.leftyear = true;
        this.selectTime.year = this.year;
      }
      this.selectTime.mounth = "";
      this.selectTime.day = "";
      this.selectTime.time = "";
      this.selectTime.endtime = "";
    },
    chooseMounth(item) {
      this.active = 2;
      console.log(item);
      this.selectTime.mounth = item;
      this.mounthStatus = false;
      this.dayStatus = true;
    },
    chooseDay(item) {
      this.active = 3;
      console.log(item);
      this.selectTime.day = item;
      this.dayStatus = false;
      this.timeStatus = true;
      this.Operation_txt = "请选择开始时间";
    },
    chooseTime(item) {
      this.active = 4;
      this.selectTime.time = item;
      this.dayStatus = false;
      this.timeStatus = false;
      this.mounthStatus = false;
      this.timeStatus_end = true;
      this.Operation_txt = "请选择结束时间";
    },
    chooseTime_end(item) {
      this.selectTime.endtime = item;
      console.log("需要展示的数据", this.selectTime);
      this.$emit("comfire", this.selectTime);
      this.show = false;
      this.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.my_vant {
  padding-left: 20px;
  box-sizing: border-box;
  font-size: 13px;
  .title {
    font-size: 18px;
    margin: 20px 0 10px 125px;
  }
  .tab {
    display: flex;
    align-items: center;

    .firstYear {
      margin-right: 25px;
      font-size: 15px;
    }
    .secondYear {
      font-size: 15px;
    }
    .selectyear {
      border-bottom: 2px solid #1890ff;
      font-weight: 600;
    }
  }
  .process {
    height: 60px;
    color: #1890ff;
    width: 100%;
    display: flex;
    align-items: center;
    .month {
      font-size: 13px;
      color: #1890ff;
    }
    .step_1 {
    }
    .step_2 {
    }
    .step_3 {
      margin-left: -24px;
    }
    .step_4 {
      margin-left: -24px;
    }
    .step_5 {
    }
    .step {
      display: flex;
      align-items: flex-end;
      .time_box_1 {
        width: 100px; //!!!
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        left: -60px;
        .txt {
          font-size: 13px;
          color: #000;
          margin-bottom: 5px;
          position: relative;
          left: 10px;
          color: #1890ff;
        }
        .dot {
          width: 5px;
          height: 5px;
          box-sizing: border-box;
          border: 1px solid#1890ff;
          background: #fff;
          border-radius: 50%;
        }
      }
      .time_box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30px;
        .txt {
          font-size: 13px;
          color: #000;
          margin-bottom: 5px;
          font-weight: 600;
        }
        .dot {
          width: 5px;
          height: 5px;
          background: #1890ff;
          border-radius: 50%;
        }
      }
      .line {
        width: 65px;
        height: 1px;
        background: #1890ff;
        position: relative;
        top: -2px;
        left: -13px;
      }
    }
  }
  .times {
    margin-bottom: 20px;
  }
}
</style>
