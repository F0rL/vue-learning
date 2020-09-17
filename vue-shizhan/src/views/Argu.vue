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
  beforeRouteUpdate(to, from, next) {
    console.log(to.name, from.name)
  }
}
</script>

<style scoped lang="scss">
</style>
