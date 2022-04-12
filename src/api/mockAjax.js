//axios的二次封装
import axios from 'axios'
//引入进度条，样式
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
const request = axios.create({
    baseURL:'/mock',
    timeout:5000,
})
//请求拦截器 在请求发起之前do something

request.interceptors.request.use((config)=>{
    nprogress.start()
    return config;
    //config配置对象，对象中配置headers请求头...
})


//响应拦截器
request.interceptors.response.use((res)=>{
    nprogress.done()
    return res.data
},(error)=>{
    return Promise.reject(new Error('fail'))
})

export default request