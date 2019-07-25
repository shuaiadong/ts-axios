import {isPlainObject} from './util'

// headers 传递时 默认为 {}

function normalizeHeaderName (headers:any, normalizedName: string):any {
    if (!headers) {
        return;
    }

    Object.keys(headers).forEach( (name:string) => {
        if (name && name !== normalizedName && name.toLowerCase() === normalizedName.toLowerCase()) {
            headers[normalizedName] = headers[name]
            delete headers[name]
        }
    })
    console.log(headers, 'headers')
}

export function processHeaders(headers: any, data: any): any {
    normalizeHeaderName(headers, 'Content-Type');
    if(isPlainObject(data)) {
        if(headers && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/json; charset=utf-8'
        }
    }
    return headers;
}