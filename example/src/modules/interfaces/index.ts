import axios, {AxiosError} from '../../../../src/index';
import Axios from '../../../../src/cors/axios';
const context = '/demo01'


axios(`${context}/get`, {
    params: {
        a: 1
    }
});

axios.get(`${context}/get`, {})
axios.head(`${context}/head`, {params: {a: 1}})
axios.delete(`${context}/delete`, {})
axios.options(`${context}/options`, {})




// axios.post(`${context}/post`, {
//     post: 'post'
// })

// axios.patch(`${context}/patch`, {
//     post: 'post'
// })

// axios.put(`${context}/put`, {
//     post: 'post'
// })

axios.interceptors.request.use(config => {
    config.headers.test += '2'
    return config
  })

  axios.interceptors.request.use(config => {
    config.headers.test += '3'
    return config
  })





  axios.interceptors.response.use(config => {
    console.log(1)
    return config
  })
  axios.interceptors.response.use(config => {
    console.log(2)
    return config
  })

  axios.interceptors.response.use(config => {
    console.log(3)

    return config
  })

interface ResultData<T> {
    code: number
    message: string
    result: T
}

interface User {
    name: string
    age: number
}


function getUser<T>() {
    return axios.post<ResultData<T>>(`${context}/post/user`, {

    }, {
        headers: {
            test: 1
        }
    })
    .then(res => res.data)
}

async function test() {
    const test = await getUser<User>();
    console.log(test.message)
}
test()