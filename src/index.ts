import {AxiosRequestConfig} from './types'
import xhr from './xhr'

import bindURL from './helpers/bindURL'
import {transformRequset} from './helpers/data'

function axios (config: AxiosRequestConfig): void {
    config.url = transformURL(config);
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

export default axios;