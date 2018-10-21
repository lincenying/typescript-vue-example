import axios from 'axios'
import qs from 'qs'
import config from './config'

axios.interceptors.request.use(config => config, error => Promise.reject(error))

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus(response: any) {
    if (response.status === 200 || response.status === 304) {
        return response
    }
    return {
        data: {
            success: false,
            message: response.statusText,
            data: response.statusText
        }
    }
}

function checkCode(res: any) {
    return res.data
}

export default {
    async post(url: string, data?: any) {
        const response = await axios({
            method: 'post',
            url: config.api + url,
            data: qs.stringify(data),
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
        const res = await checkStatus(response)
        return checkCode(res)
    },
    async get(url: string, params?: any) {
        const response = await axios({
            method: 'get',
            url: config.api + url,
            params,
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        const res = await checkStatus(response)
        return checkCode(res)
    }
}
