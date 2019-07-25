export type Method = 'get' | 'GET'
| 'post' | 'POST'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'put' | 'PUT'
| 'patch' | 'PATCH';

export interface AxiosRequestConfig {
    url: string
    method?: Method
    data?: any
    params?: any
    headers?: any
    responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
    headers: any
    data: any
    status: Number
    statusText: string
    request: any
    config: AxiosRequestConfig
}

export interface AxiosPramise extends Promise<AxiosResponse> {

}