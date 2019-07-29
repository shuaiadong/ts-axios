import Axios from './cors/axios';
import {AxiosInstance, AxiosPramise} from './types'
import {extend} from './helpers/util';

function createInstance():AxiosInstance {

    const context = new Axios();
    const instance = Axios.prototype.request.bind(context);
    extend(instance, context);
    return instance as AxiosInstance;
}

const axios = createInstance();

export default axios;