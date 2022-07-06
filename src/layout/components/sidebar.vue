<template>
  <div class="menu">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      router
      text-color="#fff"
      unique-opened
    >

      <sidebarmenus v-for="(item,index) in menuList" :key="index" :data="item"></sidebarmenus>
    </el-menu>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '../../utils/router'
import Sidebarmenus from '@/layout/components/sidebarmenus'

const router = useRouter()

// console.log(router.getRoutes(), 'router')
const menuList = generateMenus(filterRouters(router.getRoutes()))
console.log(menuList, 'menuList')
</script>

<style lang="scss" scoped>
::v-deep.el-menu-vertical-demo {
  height: 100%;
  width: 100%;
}

</style>
