const toString = Object.prototype.toString; // 主要为了缓存处理(性能考虑)

export const isObject = function (val:any): val is Object {
    return val !== null && typeof val === 'object'
}

export const isPlainObject = function (val:any): val is Object {
    return val !== null && toString.call(val) === '[object Object]'
}

export const isDate = function (val:any):val is Date {
    return toString.call(val) === '[object Date]'
}

export function encode  (val:string) {
    return encodeURIComponent(val)
    .replace(/'%40'/g, '@')
    .replace(/'%24'/g, '$')
    .replace(/'%20'/g, '+')
    .replace(/'%3A'/ig, ':')
    .replace(/'%2c'/ig, ',')
    .replace(/'%5B'/ig, '[')
    .replace(/'%5D'/ig, ']')
}