export type Method = (
    'get' | 'GET' |
    'post' | 'POST' |
    'put'| 'PUT'|
    'delete' | 'delete' |
    'options' | 'OPTIONS'
    );

export interface axiosRequestConfig {
    url: string,
    method?: Method,
    data?: any,
    params?: any
}