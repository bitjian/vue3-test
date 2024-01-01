
<template>
  <header>
    <img alt="Vue logo" class="logo" src="@assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <div>计算属性</div>
      <div class="test" v-for="(item, index) in listState" :key="index" style="height: 40px; width: 100px; color: aquamarine;">
        <div>{{ item.sname }}</div>
      </div>
      <div>直接解构</div>
      <div class="test" v-for="(item, index) in someList" :key="index" style="height: 40px; width: 100px; color:pink;">
        <div>{{ item.sname }}</div>
      </div>
      <div>使用storeToRefs</div>
      <div class="test" v-for="(item, index) in someListRef" :key="index" style="height: 40px; width: 100px; color:orange;">
        <div>{{ item.sname }}</div>
      </div>
      <div>直接使用store.state</div>
      <div class="test" v-for="(item, index) in someStore.someList" :key="index" style="height: 40px; width: 100px; color:red;">
        <div>{{ item.sname }}</div>
      </div>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
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
const someStore = useSomeList()
// 组件能监听到这里的属性变动
const { someList:someListRef  } = storeToRefs(someStore)
const { someList  } = someStore
const listState = computed(() => someStore.someList);

console.log(someStore.GET_LIST)
onMounted(async () => {
  // const { data } = await axios({
  //   method: 'get',
  //   url: '/api'
  // })
  // console.log(data)
  await someStore.init()
})
errorLog('hello vue3')

</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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
    flex-direction: column;

  }
.test {
  display: flex;
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
