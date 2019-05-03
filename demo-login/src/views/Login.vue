<template>
  <div>
    <form action="" v-if="!isReg">
      <p>用户名</p>
      <input type="text" v-model="name">
      <p>密码</p>
      <input type="password" v-model="password">
      <div>
        <button @click="login">登录</button>
        <button @click="reg">注册</button>
      </div>
    </form>
    <form action="" v-else>
      <p>用户名</p>
      <input type="text" v-model="name">
      <p>密码</p>
      <input type="password" v-model="password">
      <p>再次输入密码</p>
      <input type="password" v-model="repeat">
      <div>
        <button @click="addUser">确定</button>
        <button @click="cancel">取消</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      isReg: false,
      name: '',
      password: '',
      repeat: ''
    }
  },
  methods: {
    login(){
      if (localStorage.getItem('name') === this.name && localStorage.getItem('password') === this.password) {
        this.$router.push('/home/list')
      }else {
        alert('用户名或密码不正确')
        this.name = ''
        this.password = ''
      }

    },
    reg() {
      this.isReg = true
    },
    addUser() {
      if (this.password === this.repeat) {
        localStorage.setItem('name', this.name)
        localStorage.setItem('password', this.password)
        this.name = ''
        this.password = ''
        this.repeat = ''
        this.isReg = false
        console.log(this.isReg)
      }else {
        alert('两次密码输入不一致')
      }

    },
    cancel() {
      this.isReg = false
    }
  },
  components: {

  }
}
</script>
