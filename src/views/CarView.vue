<template>
  <div class="row row-cols-3 justify-content-center">
    <div class="bg-light p-4 my-4 col-12">
      <!-- v-if -->
      <div class="text-center">
        購物車沒有任何品項
        <i class="fa-solid fa-cart-shopping fa-sm"></i>
      </div>
      <!-- v-if -->
      <table class="table align-middle ShopCart">
        <tbody>
          <BuyCard />
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" class="text-end">總金額 NT$ 1000</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { mapState } from 'pinia'
import BuyCard from '../components/BuyCard.vue'

export default {
  components: {
    BuyCard
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
.ShopCart {
  .table-image {
    width: 100px;
    height: 100px;
  }
}
</style>
