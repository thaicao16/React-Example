import axios from "axios";
import Constant from '../constants/Constants'

export default axios.create({
  baseURL: Constant.api_base_url,
  headers: {
    "Content-type": "application/json",
    "accept": "application/json, text/plain, */*",
  }
});