import {isDate, isObject, isPlainObject, encode} from './utils';
export function bindURL (url:string, params?: Object): string {
    // 没有 params 返回url
    if(!params) {
        return url;
    }

    const parts: string[] = [];
    
    Object.keys(params).forEach(key => {
        const val = params[key];
        // 0 是可以的
        if(val === null && typeof val === 'undefined') {
            return;
        }

        let values = [];

        if (Array.isArray(val)) {
            values = val;
            key += '[]'
        } else {
            values = [val];
        }

        values.forEach(value => {
            if(isDate(value)) {
                value = value.toISOString();
            }
            else if (isPlainObject(value)) {
                value = JSON.stringify(value);
            }
            
            parts.push(`${encode(key)}=${encode(value)}`);
        })
    })

    let serializedParams = parts.join('&');

    if(serializedParams) {
        let markIndex= url.indexOf('#');
        if(markIndex !== -1) {
            url = url.slice(markIndex)
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
    }
    
}