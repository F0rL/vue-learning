<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link :to="{name: 'About'}">About</router-link>|
      <router-link to="/argu/aaa">Argu</router-link>|
      <router-link to="/name_view">Name_view</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/count-to">countTo</router-link>|
      <router-link to="/split">split</router-link>|
    </div>
    <transition-group :name="routerTransition">
      <router-view key="default" />
      <router-view key="email" name="email" />
      <router-view key="tel" name="tel" />
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routerTransition: '',
    }
  },
  watch: {
    $route(to) {
      to.query &&
        to.query.transitionName &&
        (this.routerTransition = to.query.transitionName)
    },
  },
}
</script>

<style lang="scss">
.router-enter {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 1s ease;
}
.router-enter-to {
  opacity: 1;
}
.router-leave {
  opacity: 1;
}
.router-leave-active {
  transition: opacity 1s ease;
}
.router-leave-to {
  opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
