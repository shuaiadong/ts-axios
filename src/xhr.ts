import {axiosRequestConfig} from './types';

function xhr(config:axiosRequestConfig) {
    const {
        url, method = 'get',
        data = null, params = null
    } = config;
    
    const request = new XMLHttpRequest();

    request.open(method, url.toUpperCase(), true);

    request.send(null)
}
export default xhr;