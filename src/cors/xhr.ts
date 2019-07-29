import { AxiosRequestConfig, AxiosPramise, AxiosResponse} from "../types";
import {parseHeaders} from '../helpers/headers'

import createError from '../helpers/error'

function xhr(config: AxiosRequestConfig): AxiosPramise {
    const {url, method = 'get', data = null, headers, responseType, timeout} = config;
  
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        
        function handleResponse(response: AxiosResponse) {
            if(request.status >= 200 && request.status <= 300) {
                resolve(response)
            }
            else {
                reject(createError(
                    `Request failed with status code  ${request.status}错误`,
                    config,
                    null,
                    request,
                    response
                    ))
            }
        }

        request.onreadystatechange = function () {
            if(request.readyState !== 4 || request.status === 0) {
                return;
            }

            const responseHeaders = parseHeaders(request.getAllResponseHeaders());
            const responseData = responseType && responseType !== 'text' ? request.response : request.responseText;
            
            const response:AxiosResponse = {
                headers: responseHeaders,
                config: config,
                data: responseData,
                request,
                status: request.status,
                statusText: request.statusText
            };

            handleResponse(response);
        }

        request.onerror = function () {
            reject(createError(
                'Network Error',
                config,
                null,
                request,
                ))
        }

        request.ontimeout = function () {
            reject(createError(
                `Timeout of ${timeout} ms exceeded`,
                config,
                'ECONNABORTED',
                request
            ,))
        }

        request.open(method.toUpperCase(), url!, true)
    
        if (responseType) {
            request.responseType = responseType
        }

        if(timeout) {
            request.timeout = timeout;
        }
    
        if (headers) {
            Object.keys(headers).forEach((name: string) => {
                if(data === null && name.toLowerCase() === 'content-type') {
                    delete headers[name]
                } else {
                    request.setRequestHeader(name, headers[name])
                }
            })
        }


    
        request.send(data);
    })
}

export default xhr;