import { defineStore } from 'pinia'
import { getCList, getSList } from '@/api/list'

type ISomeList = {
  someList: any[],
  someCategory: any[]
}
const useSomeList = defineStore('someList', {
  state: (): ISomeList => {
    return {
      someList: [],
      someCategory: []
    }
  },
  getters: {
    GET_LIST: ({ someList }) => {
      return someList
    }
  },
  actions: {
    async getList(categoryId: number) {
      const params = {
        token: '567890',
        cid: categoryId
      }
      const [err, res] = await getSList<any[]>(params)
      if (err) {
        console.log(err)
        return
      }
      const { data } = res as MResponse<CList[]>
      this.someList = this.someList.concat(data)
    },
    async getCategory() {
      const params = {
        token: '123456'
      }
      const [err, res] = await getCList<any[]>(params)
      if (err) {
        console.error(err)
        return
      }
      const { data } = res as MResponse<CList[]>
      this.someCategory = data
    },
    async init() {
      await this.getCategory()
      await Promise.all(this.someCategory.map(async (item: any) => await this.getList(item.cid)))
    }
  }
})

export { useSomeList }