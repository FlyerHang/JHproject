import axios from 'axios';
import qs from 'qs';
import {
    Notification
} from 'element-ui';

// require('promise.prototype.finally').shim();

axios.defaults.withCredentials = true;
/**
 * 封装axios的通用请求
 * @param  {string}   method     get\post\put\delete
 * @param  {string}   url       请求的接口URL
 * @param  {object}   param     传的参数，没有则传空对象
 */
function http(method, url, param) {
    // var _type;
    // if(url.indexOf("loginType=cons")>0||url.indexOf("loginType='cons'")>0){
    //     _type="cons"
    // }else if(url.indexOf("loginType=forw")>0||url.indexOf("loginType='forw'")>0){
    //     _type="forw"
    // }
    // console.log(_type)
    param = param && typeof param === 'object' ? param : {};
    const config = {
        url: url,
        method: method,
        // type:_type,
        transformRequest: [function (param) {
            return qs.stringify(param);
        }],
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    };

    // post请求时需要设定Content-Type
    if (method === 'post') {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        config.data = param;
    } else if (method === 'get') {
        config.params = param;
    }
    return axios(config);
}

// http request 拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么，比如传token
    const token=localStorage.getItem("videoToken");
    if(token!=""&&token!=null&&token!=undefined){
        config.headers.loginToken =  token;
    }else{
        config.headers.loginToken =  "123456789";
    }
    return config
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
})
// http response 拦截器
axios.interceptors.response.use((response) => {
    return response;
}, (err) => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = err.response.data.message
                break

            case 401:
                break

            case 403:
                err.message = '没有权限！'
                break

            case 404:
                err.message = `请求地址出错: ${err.response.config.url}`
                break

            case 408:
                err.message = '请求超时'
                break

            case 500:
                err.message = '服务器内部错误'
                break

            case 501:
                err.message = '服务未实现'
                break

            case 502:
                err.message = '网关错误'
                break

            case 503:
                err.message = '服务不可用'
                break

            case 504:
                err.message = '网关超时'
                break

            case 505:
                err.message = 'HTTP版本不受支持'
                break

            default:
        }
        if (err.response.status == 401) {
            localStorage.removeItem('userToken');
            Notification({
                message: err.response.data.message,
                type: 'error',
                onClose() {
                    history.go(0);
                    //location.href="/";
                }
            });
            return;
        }
        Notification({
            message: err.response.message,
            type: 'error'
        });
    }
})
export default http;