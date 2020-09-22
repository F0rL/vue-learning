<template>
  <span>
    <count :endVal="endVal" :delay="1000" />
    <button @click="updateEndVal">设置endVal值</button>
  </span>
</template>

<script>
import Count from '_c/count-to'
export default {
  name: 'CountTo',
  data() {
    return {
      endVal: 2000,
    }
  },
  components: {
    Count,
  },
  methods: {
    updateEndVal() {
      this.endVal += Math.random() * 100
    },
  },
}
</script>

<style scoped lang="scss">
</style>
