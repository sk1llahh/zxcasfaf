import axios from 'axios';
import { message } from "antd";
import {CANCEL} from "redux-saga";
import {Cookies} from "react-cookie";
import {COOKIES_ENUM, LANG} from "../constants";
import {getFromUrl} from "./getFromUrl";

const cookies = new Cookies()

const cancelTokenSource = axios.CancelToken.source();

let promise = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    accept: 'application/json, text/plain, */*',
  },
  cancelToken: cancelTokenSource.token,
  params: {
    debug: process.env.REACT_APP_ENV === 'production' ? null : true
  }
})

//@ts-ignore
promise[CANCEL] = () => cancelTokenSource.cancel();


const axiosConfig = promise
axiosConfig.interceptors.request.use(
  async (config) => {
    let token = cookies.get(COOKIES_ENUM.JWT)
    let lang = cookies.get(COOKIES_ENUM.LANG) || getFromUrl(COOKIES_ENUM.LANG) || LANG.RU

    if(token){
      config.headers["Authorization"] = `Bearer ${token}`
      config.headers["Accept-Language"] = lang;
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosConfig.interceptors.response.use(
  async (config) => {
    return config
  },
  error => {
    message.error(error.response.data.message)

    return Promise.reject(error)
  }
)

export {axiosConfig}