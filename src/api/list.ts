import { post } from '@utils/request'
const clistUrl = '/api/clist'
const slistUrl = '/api/slist'
const getCList = async <T>(data) => {
  return await post<T>(clistUrl, data)
}
const getSList = async <T>(data: MReq) => {
  return await post<T>(slistUrl, data)
}

export {
  getCList,
  getSList
}