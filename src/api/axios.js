import axios from 'axios'
import querystring from 'querystring'

const ax = axios.create({
    baseURL: 'https://lajixs.com/api',
    // baseURL: 'http://192.168.0.136:8081/api',
    withCredentials: true,
    headers: {"Content-Type": "application/x-www-form-urlencoded"}
})

// 拦截器
ax.interceptors.request.use(config => {
    if (
        config.method === 'post' ||
        config.method === 'put' ||
        config.method === 'delete' ||
        config.method === 'patch'
    ) {
        config.data = querystring.stringify(config.data)
    }
    return config
}, error => {
    return Promise.reject(error)
})

ax.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})

export default ax
