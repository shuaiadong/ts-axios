import axios from '../../../../src/index';
const context = 'demo01'
axios({
    method: 'get',
    url: `/${context}/get#/1111?a=1`
})

axios({
    method: 'post',
    url: `/${context}/post`
})


axios({
    method: 'put',
    url: `/${context}/put`
})


axios({
    method: 'delete',
    url: `/${context}/delete`
})


axios({
    method: 'head',
    url: `/${context}/head`
})

axios({
    method: 'patch',
    url: `/${context}/patch`
})

