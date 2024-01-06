import Axios, { type AxiosResponse } from "axios";
import router from '@/router/index'
import {useSomeList} from '@/stores/index'
import { RET_ENUM } from '@/utils/index'
const axios = Axios.create({
  baseURL: ''
})

axios.interceptors.response.use((response) => {
  const { config } = response
  // 如果token过期，就把请求都收集起来
  if (window.refreshFlag) {
    return new Promise(resolve => {
      window.taskList.push({
        config,
        resolve
      })
    })
  }
  if (response.status !== 200) return Promise.reject(response.data);
  const { code } = response.data;
  if (code === RET_ENUM.EXPIRE) {
    window.refreshFlag = true
    console.error('登陆太过期')
    if (!window.taskList) window.taskList = []
    // TODO 更新token
    window.utils.refreshToken()
    return new Promise(resolve => {
      window.taskList.push({
        config, resolve
      })
    })
  }
  return response
}, (err) => {
  console.log('网络错误', err.message);
  Promise.reject(err.response);
})

export const post = <T>(url: string, data?: { [key: string]: any }): ApiResponse<T> => {
  return new Promise((resolve) => {
    axios
      .post(url, data)
      .then((result) => {
        router.push('/home')
        const store = useSomeList()
        console.log(store.someList)
        resolve([null, result.data as MResponse<T>]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });
};