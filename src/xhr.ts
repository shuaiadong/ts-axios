import { AxiosRequestConfig, AxiosPramise, AxiosResponse} from "./types";
import {parseHeaders} from './helpers/headers'

function xhr(config: AxiosRequestConfig): AxiosPramise {
    const {url, method = 'get', data = null, headers, responseType} = config;
  
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        


        request.onreadystatechange = function () {
            if(request.readyState !== 4) {
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

            resolve(response);
        }


        request.open(method.toUpperCase(), url, true)
    
        if (responseType) {
            request.responseType = responseType
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