import axios from 'axios'

export function request(config) {
  // 创建的实例
  const instance = axios.create({
    // 基本设置
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  // 请求拦截
  axios.interceptors.request.use(res => {
    return res
  }), err => {
    // console.log(err)
  }
// 相应拦截
  axios.interceptors.response.use(res => {
    return config.data
  }), err => {
  }
  // 真正的网络请求 返回出去的实例
  return instance(config)

}
