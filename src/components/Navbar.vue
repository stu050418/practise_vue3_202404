<template>
  <!-- 導航欄 -->
  <nav class="navbar navbar-expand navbar-light bg-light">
    <!-- navbar-expand-lg -->
    <div class="container">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">about</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/calculator">Add</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/producPage">商品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link btn btn-primary position-relative" to="/car">
              購物車
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                >99+
                <span class="visually-hidden">unread messages</span>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { mapState } from 'pinia'
export default {}
</script>
