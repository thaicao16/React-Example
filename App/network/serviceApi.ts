
import Constant from '../constants/Constants'
import http from "./http-common";
import ILoginRequest from '../data/LoginRequest';
import ILoginOTPRequest from '../data/LoginOTPRequest';

// axios.defaults.baseURL = Constant.api_base_url;;
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.interceptors.response.use(res => res, err => Promise.reject(error));

// const instance = axios.create({
//     baseURL: Constant.api_base_url
// });
// 
// instance.defaults.headers.post['Content-Type'] = 'application/json';
// instance.defaults.headers.post['accept'] = 'application/json, text/plain, */*';

const getAPI = (route: string) =>{
    return http.get(route);
}

const postAPI = (route: string) =>{
    return http.post(route);
}

const postLogin = (email: string, password: string) => {
    const params = JSON.stringify({
        "email": email,
        "password": password,
        });
    return http.post(Constant.login, params)
}

const postLoginUser = (data: ILoginRequest) => {
    console.log('postLoginUser: '+ data);
    return http.post<ILoginRequest>(Constant.login, data)
}

const postLoginOTP = (data: ILoginOTPRequest) => {
    console.log('postLoginOTP: '+ data);
    return http.post<ILoginOTPRequest>(Constant.login_otp, data)
}

const ApiService = {
    getAPI,
    postLogin,
    postLoginUser,
    postLoginOTP,
  };

export default ApiService;

// export default  getLogin