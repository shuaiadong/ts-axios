import {AxiosRequestConfig, AxiosPramise, AxiosResponse} from '../types'
import xhr from './xhr'

import bindURL from '../helpers/bindURL'
import {transformRequset, transformResponse} from '../helpers/data'
import {processHeaders} from '../helpers/headers'

function dispatchRequest (config: AxiosRequestConfig): AxiosPramise {
    processConfig(config);
    return xhr(config).then((res: AxiosResponse) => transformResponseData(res))
}


function processConfig (config: AxiosRequestConfig) {
    config.url = transformURL(config);
    config.headers = transformHeaders(config);
    config.data = transformRequestData(config);
}

function transformURL (config: AxiosRequestConfig): string {
    const {url, params} = config;
    return bindURL(url!, params);
}

function transformRequestData (config: AxiosRequestConfig):any {
    const {data} = config;
    return transformRequset(data)
}

function transformHeaders (config: AxiosRequestConfig) {
    const {headers = {}, data} = config;
    return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse) {
    res.data = transformResponse(res.data)
    return res;
}
export default dispatchRequest;