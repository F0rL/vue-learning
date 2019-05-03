<template>
  <div>
    <router-link :to="{name: 'list'}">新闻列表</router-link>
    <router-link :to="{name: 'user'}">个人中心</router-link>
    <router-link :to="{name: 'add'}">添加内容</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'home'
}
</script>