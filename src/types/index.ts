export type Method = 'get' | 'GET'
| 'post' | 'POST'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'put' | 'PUT'
| 'patch' | 'PATCH';

export interface AxiosRequestConfig {
    url?: string
    method?: Method
    data?: any
    params?: any
    headers?: any
    responseType?: XMLHttpRequestResponseType
    timeout?: number
}

export interface AxiosResponse {
    headers: any
    data: any
    status: number
    statusText: string
    request: any
    config: AxiosRequestConfig
    
}

export interface AxiosPramise extends Promise<AxiosResponse> {

}
export interface AxiosError {
    message: string
    config: AxiosRequestConfig
    code: string | null
    request?: any
    response?: AxiosResponse

}

export interface axios {
    request(config: AxiosRequestConfig): AxiosPramise
    get(url: string, config: AxiosRequestConfig): AxiosPramise
    delete(url: string, config: AxiosRequestConfig): AxiosPramise
    head(url: string, config:AxiosRequestConfig): AxiosPramise
    options(url: string, config: AxiosRequestConfig): AxiosPramise

    post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPramise
    patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPramise
    put(url: string, data?: any, cofing?: AxiosRequestConfig): AxiosPramise
}
// 混合对象类型（既有对象类型）
export interface AxiosInterface extends axios {
    (config: AxiosRequestConfig): AxiosPramise
}