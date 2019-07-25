import axios from '../../../../src/index';
const context = 'error'


// 超时

// axios({
//     url: `/${context}/error`,
//     method: 'get',
// })


axios({
    url: `/${context}/timeout`,
    method: 'get',
    timeout: 1000,
})
// 错误
setTimeout(() => {
    axios({
        url: `/${context}/timeout`,
        method: 'get',
        timeout: 4000,
    });

}, 3000)

// 状态码