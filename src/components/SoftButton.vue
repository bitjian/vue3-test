<template>
  <div class="sitem-contain">
    <div>{{ props.sname }}</div>
    <button :style="buttonClass">下载</button>
  </div>
</template>

<script lang='ts' setup>
import {  onMounted, ref } from 'vue'

const props = defineProps({
  sname: { type: String, default: '' },
  ghost: { type: Boolean, default: false },
  color: { type: String, default: '' }
})
const buttonClass = ref({})
const getClass = () => {
  if (props.ghost === true) {
    buttonClass.value = {
      backgroundColor: '#FFF',
      border: `1px solid ${props.color}`,
      color: `${props.color}`
    }
    return
  }
  buttonClass.value =  {
    backgroundColor: `${props.color}`,
    border: `1px solid ${props.color}`,
    color: '#FFF'
  }
}
getClass()
</script>
<style scoped>
.sitem-contain {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}
</style>