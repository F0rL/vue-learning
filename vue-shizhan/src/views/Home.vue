<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">Push跳转</button>
    <button @click="handleClick('replace')">Replace跳转</button>
    <button @click="getInfo">获取信息</button>
    <p>home food ===> {{food}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { getUserInfo } from '@/api/user'

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
    getInfo() {
      getUserInfo({ userId: 21 }).then((res) => {
        console.log(res)
      })
    },
  },

  beforeRouteEnter(to, from, next) {
    console.log('to: ', to.name)
    console.log('from: ', from.name)
    next()
  },
  beforeRouteLeave(to, from, next) {
    // const leave = confirm('确定要离开么')
    // if(leave) next()
    // else next(false)
    next()
  },
}
</script>
