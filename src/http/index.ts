import axios from "axios";
// 创建http实例
const $http = axios.create({
    baseURL: '',
    timeout: 30000,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Requested-With": "XMLHttpRequest"
    }
})
//请求拦截
$http.interceptors.request.use(async (config:any) => {
    config.headers = config.headers || {}
    config.headers.Authorization = getUserToken()
    return config
})
export const getUserToken = (): string => {
    return localStorage.getItem('userToken') || "";
}
$http.interceptors.response.use((res)=>{
    return res.data
}, error=>{
    return Promise.reject(error);
})
export const httpGet = (url: string, params?: any): Promise<any> => {
    return $http.get(url, { params });
}

export const httpPost = (url: string, params?: any): Promise<any> => {
    return $http.post(url, params);
}
export const httpPut = (url: string, params?: any): Promise<any> => {
    return $http.put(url, params);
}

export const httpDelete = (url: string, params?: any): Promise<any> => {
    return $http.delete(url, params);
}