import {isDate, isPlainObject} from './util'
/**
 * @param url 特殊字符 | 已有参数（&拼接） | hash
 * @param params {} | [] | Date
 */


 function encode(str:string):string {
    return encodeURIComponent(str)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+') // 约定将 空格 号转为 +
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
 }
function bindURL(url:string, params: any):string {
    if(!params) {
        return url;
    }
    
    // params 参数的拼接地址
    const parts:string[] = [];
    let serializedParams:string;
    
    Object.keys(params).forEach(key => {
        let val = params[key];

        /**
         * 去除null 和 undefined ？ 为什么不用 !val
         * 1.  哪 0 咋办
         */
        if(val === null || typeof val === 'undefined') {
            return;
        }


        // 都变成数组方便处理参数
        if(Array.isArray(val)) {
            key += '[]'
        } else {
            val = [val]
        }

        val.forEach((val:any) => {
                    // val  = {} | Date | 普通值 
            if(isPlainObject(val)) {
                val = JSON.stringify(val);
            } else if (isDate(val)) {
                val = val.toISOString()
            }

            parts.push(`${encode(key)}=${encode(val)}`)
        });
    });

    serializedParams = parts.join('&');

    if(serializedParams) {
       let hasMarkIndex = url.indexOf('#');
       if(hasMarkIndex !== -1) {
           url = url.slice(0, hasMarkIndex)
       }
       url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }


    return url;
}
export default bindURL;