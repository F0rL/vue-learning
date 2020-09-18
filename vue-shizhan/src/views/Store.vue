<template>
  <div>
    <a-input v-model="inputValue" />
    <div>
      <button @click="handleUserName">mutation 改变userName</button>
      <button @click="updateAppName">action 改变appName</button>
      <p>inputValue is : {{inputValue}}</p>
      <!-- <p>vuex state is : {{appName}}</p> -->
      <p>vuex module user state is : {{userName}}</p>
      <p>vuex appName state is : {{appName}}</p>
      <p>vuex appNameVersion getter is : {{appNameVersion}}</p>
    </div>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')
export default {
  name: 'Store',
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    ...mapMutations(['SET_USERNAME']),
    ...mapActions(['updateAppName']),
    handleUserName() {
      this.SET_USERNAME('new kumaxx')
    },
  },
  computed: {
    // appName() {
    //   return this.$store.state.appName
    // },
    // userName() {
    //   return this.$store.state.user.userName
    // },
    // ...mapState(['appName'])
    // ...mapState({
    //   appName: (state) => state.appName,
    //   userName: (state) => state.user.userName,
    // }),
    ...mapState({
      userName: (state) => state.user.userName,
      appName: (state) => state.appName,
    }),
    ...mapGetters(['appNameVersion']),
  },
  components: {
    AInput,
  },
}
</script>

<style scoped lang="scss">
</style>
