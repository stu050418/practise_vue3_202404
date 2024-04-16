<template>
  <div class="about">
    <h1>This is an about page</h1>
    is:
    <p>{{ name }}</p>
    <p>{{ getUserName }}</p>
    <p>{{ wallet }}</p>
    <button type="button" @click="updateName(name)">按我</button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import userStore from '@/stores/user'

// Composition API
// Option API
export default {
  computed: {
    // 1.Store
    // 2. 要帶入的 State , Getters
    ...mapState(userStore, ['name', 'getUserName', 'wallet'])
  },
  methods: {
    ...mapActions(userStore, ['updateName'])
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    /* display: flex; */
    align-items: center;
  }
}
</style>
