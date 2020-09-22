<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width: leftOffsetPercent}">
      <slot name="left"></slot>
    </div>
    <div
      class="pane-trgger"
      @mousedown="handleMousedown"
      :style="{left: triggerLeft, width: `${triggerWidth}px`}"
    ></div>
    <div
      class="pane pane-right"
      :style="{left: leftOffsetPercent, paddingLeft: `${this.triggerWidth / 2}px`}"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  data() {
    return {
      // leftOffset: 0.2,
      canMove: false,
      initOffset: 0,
    }
  },
  props: {
    value: {
      type: Number,
      default: 0.5,
    },
    triggerWidth: {
      type: Number,
      default: 8,
    },
    min: {
      type: Number,
      default: 0.1,
    },
    max: {
      type: Number,
      default: 0.9,
    },
  },
  computed: {
    leftOffsetPercent() {
      return `${this.value * 100}%`
    },
    triggerLeft() {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
    },
  },
  methods: {
    handleMousedown(e) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      //
      this.initOffset = e.pageX - e.target.getBoundingClientRect().left
      this.canMove = true
    },
    handleMousemove(event) {
      if (!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      // 点击trigger时，如果不在中间trigger会瞬间移动，需要经过initOffset处理
      // console.log(event.pageX, event.clientX)
      let offsetPercent =
        (event.clientX -
          this.initOffset +
          this.triggerWidth / 2 -
          outerRect.left) /
        outerRect.width
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      this.$emit('update:value', offsetPercent)
    },
    handleMouseup() {
      this.canMove = false
    },
  },
}
</script>

<style scoped lang="scss">
.split-pane-wrapper {
  height: 100%;
  position: relative;
  .pane-trgger {
    position: absolute;
    top: 0;
    height: 100%;
    background: rgb(70, 49, 187);
    z-index: 10;
    user-select: none;
    cursor: col-resize;
  }
  .pane {
    position: absolute;
    top: 0;
    height: 100%;
    &-left {
      left: 0;
      background: rgb(197, 65, 65);
    }
    &-right {
      right: 0;
      background: rgb(164, 190, 48);
    }
  }
}
</style>
