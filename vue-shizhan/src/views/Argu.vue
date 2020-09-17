<template>
  <div>
    <h2>Argu</h2>
    {{name}}
  </div>
</template>

<script>
export default {
  name: 'Argu',
  props: {
    name: {
      type: String,
      default: 'Lison',
    }
  },
}
</script>

<style scoped lang="scss">
</style>
