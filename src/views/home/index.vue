<template>
  <main>
    <div class="menu">
      <sidebar></sidebar>
    </div>
    <div class="right">
      <div class="top">
        <div class="navbar">
          <navbar></navbar>
        </div>
        <div class="tagviews">
          <el-tag
            v-for="(tag,i) in $store.getters.tagArray"
            :key="i"
            :closable="$route.path!==tag.path"
            :type="$route.path===tag.path?'success':'info'"
            @click="$router.push(tag.path)"
            @close="$store.commit('tags/delTag',i)">{{ tag.title }}
          </el-tag>
        </div>
      </div>
      <div class="btm">
        <app-main class="app-main"></app-main>
      </div>
    </div>
  </main>
</template>

<script setup>

import Sidebar from '@/layout/components/sidebar'
import Navbar from '@/layout/components/navbar'
import AppMain from '@/layout/components/AppMain'</script>

<style lang="scss" scoped>

.btm {
  height: 80%;
  overflow: hidden;
}

.menu {
  width: 210px;
  height: 100%;
}

main {
  height: 100%;
  display: flex;

  .right {
    flex: 1;
  }
}

.el-tag {
  margin: 5px;
}

.navbar {
  flex: 1;
  height: 60px;
  line-height: 60px;
  background-color: #17b3a3;
  display: flex;
  justify-content: center;

}

</style>
