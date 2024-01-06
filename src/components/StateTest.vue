<template>
  <div class="state-test" :style="`border:1px solid ${props.color}`">
    <div>{{ props.title }}</div>
    <!-- <div class="test" v-for="(item, index) in someListNew" :key="index"
      :style="`height: 40px; width: 100px; color:${item.color} ;`">
      <soft-button :sid="item.sid" :sname="item.sname" v-bind="{ ghost: item.ghost, color: item.color }" @down="changeColor"></soft-button>
    </div> -->
    <div class="test" v-for="(item, index) in mySomeList" :key="index"
      :style="`height: 40px; width: 100px; color:${item.color} ;`">
      <soft-button :sid="item.sid" :sname="item.sname" v-bind="{ ghost: item.ghost, color: item.color }" @down="changeColor"></soft-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { toRefs, watch, ref } from 'vue'
import SoftButton from '@/components/SoftButton.vue'
type Props = { someList: SList[], title: string, color: string }
const props = defineProps<Props>()
const mySomeList = ref<SList[]>([])
const { someList: someListNew  } = toRefs(props)
// 如果点击下载就变成灰色
const changeColor = (sid:number) => {
  const sitem =  mySomeList.value.find(item => item.sid  === sid) 
  // const sitemP = someListNew.value.find(item => item.sid  === sid) 
  if(!sitem) return 
  sitem.color = 'gray'
  // if(!sitemP) return
  // sitemP.color = 'gray'
}
const getTheme = () => {
  const newSList = someListNew.value.map((item: SList): any => {
    if (item.cid === 1) {
      // item.ghost = true
      // item.color = props.color
      return {
        ...item,
        ghost: true,
        color: props.color
      }
    } else {
      // item.ghost = false
      // item.color = props.color
      return {
        ...item,
        ghost: false,
        color: props.color
      }
    }
  })
  mySomeList.value = newSList
}
watch(() => props.someList, () => {
  getTheme()
  // someListNew.value.push({sid:5,sname:'123',cid:3})
}, {
  deep: true
})
// getTheme()
</script>
<style scoped>
.state-test {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
}

.test {
  text-align: center;
}
</style>