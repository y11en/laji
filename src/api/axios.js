import axios from 'axios'
import querystring from 'querystring'

const ax = axios.create({
    baseURL: 'https://lajixs.com/api',
    // baseURL: 'http://192.168.0.136:8081/api',
    withCredentials: true,
})

// 拦截器
ax.interceptors.request.use(config => {
    if (config.method === 'post') {
        if(config.url === 'https://lajixs.com/api/sys-UserAvatarimgUpload' || config.url === 'https://lajixs.com/api/sys-BookCoverAvatarimgUpload') {
            config.headers.post = {'Content-Type': 'multipart/form-data'}
        }else{
            config.data = querystring.stringify(config.data)
        }
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
