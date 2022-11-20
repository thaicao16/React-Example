
import Constant from '../constants/Constants'
import axios from 'axios'

// axios.defaults.baseURL = Constant.api_base_url;;
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.interceptors.response.use(res => res, err => Promise.reject(error));

const instance = axios.create({
    baseURL: Constant.api_base_url
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.post['accept'] = 'application/json, text/plain, */*';

const getAPI = (route: string) =>{
    return instance.get(route);
}

const postAPI = (route: string) =>{
    return instance.post(route);
}

const postLogin = (email: string, password: string) => {
    const params = JSON.stringify({
        "email": email,
        "password": password,
        });
    return instance.post(Constant.login, params)
}

export default{
    postLogin
}