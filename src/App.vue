
<template>
  <header>
    <div class="wrapper">
      <state-test color="aquamarine" title="计算属性" :some-list="listState" key="aquamarine"></state-test>
      <state-test color="pink" title="直接解构" :some-list="someList" key="pink"></state-test>
      <state-test color="orange" title="使用storeToRefs" :some-list="someListRef" key="orange"></state-test>
      <state-test color="red" title="直接使用store.state" :some-list="someStore.someList" key="red"></state-test>
    </div>
  </header>
  <RouterView />
</template>
<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { errorLog } from '@/utils/index'
import { onMounted, computed } from 'vue'
import { useSomeList } from '@/stores/index'
import { storeToRefs } from 'pinia'
import StateTest from '@/components/StateTest.vue'
import {useRouter } from 'vue-router'
const router = useRouter()
// router.push('/home')
const someStore = useSomeList()
// 组件能监听到这里的属性变动
const { someList:someListRef  } = storeToRefs(someStore)
const { someList  } = someStore
const listState = computed(() => someStore.someList);
console.log(someStore.GET_LIST)
onMounted(async () => {
  await someStore.init()
})
errorLog('hello vue3')

</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.wrapper {
  display: flex;
  gap: 5px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    gap: 5px;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
