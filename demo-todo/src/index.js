import Vue from 'vue'
import App from './App.vue'

const root = document.createElement('div')
document.body.appendChild(root)


import './asserts/logo.jpg'
import './asserts/reset.css'
import './asserts/sa.scss'

new Vue({
  render: (h) => h(App)
}).$mount(root)