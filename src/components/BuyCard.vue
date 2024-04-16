<template>
  <!-- 購物車用卡片 -->
  <tr>
    <td>
      <div class="d-flex justify-content-center align-items-center w-100">
        <a class="icon-link" href="#">
          <svg class="bi" aria-hidden="true"><use xlink:href="#box-seam"></use></svg>
          Icon link
        </a>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </td>
    <td class="d-flex justify-content-center">
      <img
        src="https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
        class="table-image"
        alt=""
      />
    </td>
    <td>爽快快的</td>
    <td width="200">
      <select name="" id="" class="form-select">
        <option value="1">1</option>
      </select>
    </td>
    <td width="200" class="text-end">$900</td>
  </tr>
</template>

<script lang="ts">
import { mapState } from 'pinia'
export default {}
</script>
