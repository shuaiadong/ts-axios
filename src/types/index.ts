export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface AxiosResponse<T = any> {
  headers: any
  data: T
  status: number
  statusText: string
  request: any
  config: AxiosRequestConfig
}

export interface AxiosPramise<T = any> extends Promise<AxiosResponse<T>> {}
export interface AxiosError {
  message: string
  config: AxiosRequestConfig
  code: string | null
  request?: any
  response?: AxiosResponse
}

export interface Axios {
  request<T>(config: AxiosRequestConfig): AxiosPramise<T>
  get<T>(url: string, config: AxiosRequestConfig): AxiosPramise<T>
  delete<T>(url: string, config: AxiosRequestConfig): AxiosPramise<T>
  head<T>(url: string, config: AxiosRequestConfig): AxiosPramise<T>
  options<T>(url: string, config: AxiosRequestConfig): AxiosPramise<T>

  post<T>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPramise<T>
  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPramise<T>
  put<T>(url: string, data?: any, cofing?: AxiosRequestConfig): AxiosPramise<T>
}
// 混合对象类型（既有对象类型）
export interface AxiosInstance extends Axios {
  <T>(config: AxiosRequestConfig): AxiosPramise<T>
  <T>(url: string, config: AxiosRequestConfig): AxiosPramise<T>
}
