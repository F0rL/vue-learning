<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">Push跳转</button>
    <button @click="handleClick('replace')">Replace跳转</button>
    <p>home food ===> {{food}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  props: {
    food: {
      type: String,
      default: 'apple',
    },
  },
  methods: {
    handleClick(type) {
      if (type === 'back') {
        // this.$router.go(-1)
        this.$router.back()
      } else if (type === 'push') {
        // 直接跳转
        // this.$router.push('/parent')
        // name跳转
        // this.$router.push({
        //   name: 'Parent',
        //   query: {
        //     name: 'Listen'
        //   }
        // })
        // 带parmas
        // this.$router.push({
        //   name: 'Argu',
        //   params: {
        //     name: 'params listen',
        //   },
        // })
        // 模板语法
        const name = 'params listen'
        this.$router.push({
          path: `/argu/${name}`,
        })
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'Parent',
        })
      }
    },
  },
  components: {},
}
</script>
