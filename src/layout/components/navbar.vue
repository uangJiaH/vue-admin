<template>
  <div class="navbar">
    <div class="left">
      <h3>VueAdmin后台管理系统</h3>
    </div>
    <div class="right">
      <img
        :src="$store.getters.userInfo.avatar"
        width="36px">
      <div class="loginout">
        <el-dropdown>
    <span class="el-dropdown-link">
        <a>{{ $store.getters.userInfo.username }}</a>
      <el-icon class="el-icon--right">
        <arrow-down/>
      </el-icon>
    </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="$router.push('/')">个人中心</el-dropdown-item>
              <el-dropdown-item @click="handleCommand">退出</el-dropdown-item>

            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()
const handleCommand = () => {
  store.commit('user/logout')
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.navbar {
  flex: 1;
  width: 85%;
  height: 60px;
  line-height: 60px;
  background-color: #17b3a3;
  display: flex;
  justify-content: center;

  .left {
    width: 80%;
    text-align: center;
    font-size: 15px;

  }

  .right {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    line-height: 100%;

    img {
      width: 40px;
      height: 40px;
      vertical-align: middle;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
