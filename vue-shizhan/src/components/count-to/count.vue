<template>
  <div>
    <span :id="eleId"></span>
  </div>
</template>

<script>
import { CountUp } from 'countup.js'
export default {
  name: 'Count',
  data() {
    return {
      counter: null,
    }
  },
  computed: {
    eleId() {
      return `count_up_${this._uid}`
    },
  },
  watch: {
    endVal(newVal, oldVal) {
      this.counter.update(newVal)
    },
  },
  props: {
    /**
     * @description 最终值
     */
    endVal: {
      type: Number,
      required: true,
    },
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0,
    },
    /**
     *@description 分隔符号
     */
    decimal: {
      type: String,
      default: '.',
    },
    /**
     * @description 动画时长
     */
    duration: {
      type: Number,
      default: 1,
    },
    /**
     * @description 是否匀速
     */
    useEasing: {
      type: Boolean,
      default: false,
    },
    /**
     *@description 1,000 vs 1000 (true)
     */
    useGrouping: {
      type: Boolean,
      default: false,
    },
    /**
     * @description 小数点后面显示几位
     */
    decimalPlaces: {
      type: Number,
      default: 1,
    },
    /**
     * @description 延迟动画
     */
    delay: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.endVal, {
        startVal: this.startVal,
        duration: this.duration,
        decimal: this.decimal,
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        decimalPlaces: this.decimalPlaces,
      })
      const timer = setTimeout(() => {
        if (!this.counter.error) {
          this.counter.start()
        } else {
          console.error(this.counter.error)
        }
      }, this.delay)
    })
  },
}
</script>

<style scoped lang="scss">
</style>
