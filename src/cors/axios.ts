import {AxiosRequestConfig, Method, AxiosPramise} from '../types'
import dispatchRequest from './dispatchRequest'
class Axios {
    _requestMethodWithoutData(method:Method, url: string, config?: AxiosRequestConfig) {
        return this.request(Object.assign(config || {},{
            method,
            url,
        }))
    }
    
    _requestMethodWithData(method: Method, url: string, data?: any, config?: AxiosRequestConfig) {
        return this.request(Object.assign(config || {}, {
            method,
            url,
            data
        }))
    }
    
    request(url:any, config?: any): AxiosPramise {

        if(typeof url === 'string') {
            if(!config) {
                config = {}
            }
            config.url = url;
        }else {
            config = url
        }
        return dispatchRequest(config )
    }

    get(url:string, config?: AxiosRequestConfig): AxiosPramise {
        return this._requestMethodWithoutData('get', url, config)
    }

    delete(url:string, config?: AxiosRequestConfig): AxiosPramise {
        return this._requestMethodWithoutData('delete', url, config)
    }
    head(url:string, config?: AxiosRequestConfig):AxiosPramise {
        return this._requestMethodWithoutData('head', url, config)
    }

    options(url:string, config?: AxiosRequestConfig): AxiosPramise {
        return this._requestMethodWithoutData('options', url, config)
    }

    post(url: string, data?: any, config?: AxiosRequestConfig) {
        return this._requestMethodWithData('POST', url, data, config)
    }

    patch(url: string, data?: any, config?: AxiosRequestConfig) {
        return this._requestMethodWithData('patch', url, data, config)
    }

    put(url: string, data?: any, config?: AxiosRequestConfig) {
        return this._requestMethodWithData('put', url, data, config)
    }
    
}
export default Axios;
