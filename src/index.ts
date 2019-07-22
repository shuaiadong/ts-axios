import {axiosRequestConfig} from './types';
import {bindURL} from './helps/url';
import {transformRequest} from './helps/data'

import xhr from './xhr';

function axios (config:axiosRequestConfig) {
    processConfig(config);
    xhr(config);
}

function processConfig (config: axiosRequestConfig):void {
    config.url = transformURL(config);
    config.data = transformRequestData(config)
}

function transformURL (config: axiosRequestConfig):string {
    const {url, params} = config;
    return bindURL(url, params);
}

function transformRequestData (config: axiosRequestConfig):any {
    const {url,data, params} = config;
    return transformRequest(data);
}

export default axios;