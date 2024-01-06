<template>
  <div class="sitem-contain">
    <div>{{ props.sname }}</div>
    <button :style="buttonClass" @click="changeColor">{{ downText }}</button>
  </div>
</template>

<script lang='ts' setup>
import { computed, ref, watch } from 'vue'

const emits = defineEmits(['down'])
const props = defineProps({
  sid: { type: Number, default: null },
  sname: { type: String, default: '' },
  ghost: { type: Boolean, default: false },
  color: { type: String, default: '' }
})
const buttonClass = ref({})
const downText = computed((() => props.color === 'gray' ? '已下载' : '下载'))
const changeColor = () => {
  if(props.color === 'gray') return
  emits('down', props.sid)
}
const getClass = () => {
  if (props.color === 'gray') {
    buttonClass.value = {
      backgroundColor: '#FFF',
      border: `1px solid ${props.color}`,
      color: `${props.color}`
    }
    return
  }
  if (props.ghost === true) {
    buttonClass.value = {
      backgroundColor: '#FFF',
      border: `1px solid ${props.color}`,
      color: `${props.color}`
    }
    return
  }
  buttonClass.value = {
    backgroundColor: `${props.color}`,
    border: `1px solid ${props.color}`,
    color: '#FFF'
  }
}
watch(()=>props.color, ()=>{
  getClass()
},{
  immediate: true
})
</script>
<style scoped>
.sitem-contain {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}
</style>