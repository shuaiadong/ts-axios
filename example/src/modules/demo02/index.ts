import axios from '../../../../src/index';
const context = 'demo01'


/**
 * url
 * 1. 特殊字符
 * 2. hash
 * 3. 已有参数
 */


axios({
    method: 'get',
    url: `/${context}/get?@[]`
})

axios({
    method: 'get',
    url: `/${context}/get/#1111`,
    params: {
        name1: '*',
        name2: '+',
        name3: ',',
        name4: '[',
        name5: ' ',
    }
})


/**
 * params 
 * []
 * {}
 * null
 * Date
 */

axios({
    method: 'get',
    url: `/${context}/get/#1111`,
    params: {
        name1: '*',
        name2: '+',
        name3: ',',
        name4: '[',
        name5: ' ',
        arr: [1, 3, 4, 5],
        Date: new Date()
    }
})

axios({
    method: 'get',
    url: `/${context}/get/#1111`,
    params: null
})

axios({
    method: 'get',
    url: `/${context}/get/#1111`,
    params: [1, null, 'a']
})

axios({
    method: 'get',
    url: `/${context}/get/#1111`,
    params: [1, null, 'a']
})


axios({
    method: 'post',
    url: `/${context}/post/#1111`,
    params: [1, null, 'a'],
    data: {
        a: 1
    }
})
