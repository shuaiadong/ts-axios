import {AxiosRequestConfig} from './types'
import xhr from './xhr'

import bindURL from './helpers/bindURL'
import {transformRequset} from './helpers/data'
import {processHeaders} from './helpers/headers'

function axios (config: AxiosRequestConfig): void {
    config.url = transformURL(config);
    config.headers = transformHeaders(config);
    config.data = transformRequestData(config);
    xhr(config)
}

function transformURL (config: AxiosRequestConfig): string {
    const {url, params} = config;
    return bindURL(url, params);
}

function transformRequestData (config: AxiosRequestConfig):any {
    const {data} = config;
    return transformRequset(data)
}

function transformHeaders (config: AxiosRequestConfig) {
    const {headers = {}, data} = config;
    return processHeaders(headers, data)
}

export default axios;