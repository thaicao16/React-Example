
// import Constant from '../constants/Constants'
// import axios from 'axios'

// // axios.defaults.baseURL = Constant.api_base_url;;
// // axios.defaults.headers.post['Content-Type'] = 'application/json';
// // axios.interceptors.response.use(res => res, err => Promise.reject(error));

// const instance = axios.create({
//     baseURL: Constant.api_base_url
// });

// instance.defaults.headers.post['Content-Type'] = 'application/json';

// const apiKey = Constant.api_key;

// const getAPI = (route) =>{
//     const uri = route + '?' + apiKey;
//     return instance.get(uri);
// }

// const getAllMovieNowPlaying = () => {
//     return getAPI(Constant.getMovieNowPlaying)
// }

// export default{
//     getAPI,
//     getAllMovieNowPlaying
// }