<template>
  <div>
    <ul>
      <li v-for="(item, index) in pageList" :key="index">
        {{item.title}}-----------{{item.content}}hhhh
      </li>
    </ul>
  </div>
</template>
<script>
import store from '@/store.js'

export default {
  name: 'list',
  store,
  computed: {
    pageList() {
      return store.state.list
    }
  }
}
</script>