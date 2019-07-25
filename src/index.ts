import {AxiosRequestConfig} from './types'
import xhr from './xhr'

import bindURL from './helpers/bindURL'

function axios (config: AxiosRequestConfig): void {
    config.url = transformURL(config);
    xhr(config)
}

function transformURL (config: AxiosRequestConfig): string {
        const {url, params} = config;
        return bindURL(url, params);
}

export default axios;