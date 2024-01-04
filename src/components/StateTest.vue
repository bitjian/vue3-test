<template>
  <div class="state-test" :style="`border:1px solid ${props.color}`">
    <div>{{ props.title }}</div>
    <div class="test" v-for="(item, index) in props.someList" :key="index"
      :style="`height: 40px; width: 100px; color:${props.color} ;`">
     <soft-button :sname="item.sname" v-bind="getTheme(item.cid)"></soft-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import SoftButton from '@/components/SoftButton.vue'
const props = defineProps({
  someList: { type: Object, default: () => { } },
  title: { type: String, default: '' },
  color: { type: String, default: '' }
})
const getTheme = (cid:number) => {
  if(cid === 1) {
    return {
      ghost: true,
      color: props.color
    }
  }
  return {
    ghost: false,
    color: props.color
  }
}
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