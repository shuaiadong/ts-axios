import {AxiosRequestConfig, AxiosResponse} from '../types'

class AxiosError extends Error {
    isAxiosError: boolean
    message: string
    config: AxiosRequestConfig
    code?: string | null
    request?: any
    response?: AxiosResponse

    constructor (
        message: string,
        config: any,
        code: string | null,
        request?: AxiosRequestConfig,
        response?: AxiosResponse
        ) {
            super(message)
            this.message = message
            this.config = config
            this.code = code
            this.request = request
            this.response = response
            this.isAxiosError = true
        }
}


function createError(
    message: string,
    config: any,
    code: string | null,
    request?: any,
    response?: AxiosResponse
): AxiosError {
    return new AxiosError(
        message,
        config,
        code,
        request,
        response)
}
export default createError