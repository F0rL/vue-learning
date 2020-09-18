import axios from 'axios'
import { baseUrlConfig } from '@/config'
class HttpRequest {
  constructor(baseUrl = baseUrlConfig) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {}
    }
    return config
  }
  interceptors(instance, url) {
    instance.interceptors.request.use(
      // 全局请求拦截
      // 假设loading
      // 设定queue栈，当栈中有请求时，显示loading
      // 栈中清空后，关闭loading
      // Spin.show()
      config => {
        if (Object.keys(this.queue.length))
          //Spin.show()
          this.queue[url] = true
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    instance.interceptors.response.use(
      res => {
        delete this.queue(url)
        console.log(res)
      },
      error => {
        delete this.queue(url)
        return Promise.reject(error)
      }
    )
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
