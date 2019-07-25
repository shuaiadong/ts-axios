import {isPlainObject} from './util'
export function transformRequset (data: any ): any {
    if(isPlainObject(data)) {
        return JSON.stringify(data)
    }
    return data
}