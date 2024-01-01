<template>
  <div class="list-contain">
    <div v-for="(citem, index) in categoryList">
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, onMounted,ref } from 'vue'
  const categoryList = ref([])
  onMounted(() => {

  })

</script>
<style scoped lang='less'>

</style>