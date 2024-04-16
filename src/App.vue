<template>
  <div class="body">
    <Navbar />
    <!-- 中間內容（首頁） -->
    <div class="container mt-4 view">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style lang="scss">
@import './assets/all.scss';
// 撐開 footer
// .body {
//   width: 100%;
//   padding: 0px;
//   margin-top: 0px;
//   min-height: 100vh;
//   display: grid;
//   grid-template-rows: auto 1fr auto; /* 或其他固定/自動高度 */
// }
.view {
  flex-grow: 1;
}

// 導覽列
.navbar-collapse {
  flex-grow: initial;
}
</style>
