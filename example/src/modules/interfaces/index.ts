import axios, {AxiosError} from '../../../../src/index';
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




axios.post(`${context}/post`, {
    post: 'post'
})

axios.patch(`${context}/patch`, {
    post: 'post'
})

axios.put(`${context}/put`, {
    post: 'post'
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
    return axios.post<ResultData<T>>(`${context}/post/user`)
    .then(res => res.data)
}

async function test() {
    const test = await getUser<User>();
    console.log(test.message)
}
test()