<template>
  <div class="split-wrapper">
    <split-pane :value.sync="offset">
      <div slot="left">left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>

<script>
import splitPane from '_c/split-pane'
export default {
  name: 'Split',
  data() {
    return {
      offset: 0.8,
    }
  },
  methods: {},
  components: {
    splitPane,
  },
}
</script>

<style scoped lang="scss">
.split-wrapper {
  width: 400px;
  height: 200px;
  border: 1px solid #000;
}
</style>
