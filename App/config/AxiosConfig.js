import axios from 'axios';
import Constant from '../constants/Constants';

const instance = axios.create({
        baseURL: Constant.api_base_url
    });

instance.defaults.headers.post['Content-Type'] = 'application/json';
// instance.interceptors.response.use(res => res, err => Promise.reject(error));
export default instance;
