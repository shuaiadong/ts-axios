export type Method = 'get'

export interface AxiosRequestConfig {
    url: string
    method?: Method
    params?: any
    data?: any
}
