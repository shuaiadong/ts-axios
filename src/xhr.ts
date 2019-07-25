import { AxiosRequestConfig } from "./types";

function xhr(config: AxiosRequestConfig): void {

    const {url, method = 'get', data = null, headers, responseType} = config;

    const request = new XMLHttpRequest();

    request.open(method.toUpperCase(), url, true)

    if (responseType) {
        request.responseType = responseType
    }

    if (headers) {
        Object.keys(headers).forEach((name: string) => {
            request.setRequestHeader(name, headers[name])
        })
    }

    request.send(data);
}

export default xhr;