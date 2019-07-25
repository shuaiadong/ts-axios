import { AxiosRequestConfig } from "./types";

function xhr(config: AxiosRequestConfig): void {

    const {url, method = 'get', data = null, headers} = config;

    const request = new XMLHttpRequest();

    request.open(method.toUpperCase(), url, true)

    if (headers) {
        Object.keys(headers).forEach((name: string) => {
            request.setRequestHeader(name, headers[name])
        })
    }

    request.send(data);
}

export default xhr;