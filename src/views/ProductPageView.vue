<template>
  <div class="row row-cols-3 my-3">
    <div class="col-12"><h1>商品頁面</h1></div>
    <!-- {{ name }} -->
    <p>User 2: {{ getUserById(2) }}</p>
    <!-- <ProductCard v-for="product in products" :key="product.id" /> -->
  </div>
</template>

<script lang="ts">
import { mapState } from 'pinia'
// import { useUserListStore } from './stores/user'
// import { userStore } from '@/stores/user'

import ProductCard from '../components/ProductCard.vue'

export default {
  computed: {
    ...mapState(useUserListStore, ['userList'])
  },
  components: {
    ProductCard
  },
  data() {
    return {
      b: '456'
    }
  },
  methods: {}
}
</script>
<style lang="sass"></style>
