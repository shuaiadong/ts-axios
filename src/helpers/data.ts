import {isPlainObject} from './util'
export function transformRequset (data: any ): any {
    if(isPlainObject(data)) {
        return JSON.stringify(data)
    }
    return data
}

export function transformResponse (data: string): any {
    if(typeof data === 'string') {
        try {
            data = JSON.parse(data);
        } catch { /**  */}
    }
    return data;
}
