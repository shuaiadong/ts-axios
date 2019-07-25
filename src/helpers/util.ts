const toString = Object.prototype.toString;

export function isDate(val: any): val is Date {
    return toString.call(val) === '[object Date]' 
}

export function isObject(val: any): val is Object {
    return val !== null && toString.call(val) === '[object Object]'
}
/**
 * @param val 要排除 null ?
 */
export function isPlainObject(val: any): val is Object {
    return val !== null && typeof val === 'object'
}

export function isUndefined(val: any): val is undefined {
    return typeof val === 'undefined'
}