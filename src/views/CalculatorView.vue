<template>
  <div class="row row-cols-3 my-3">
    <div class="col col-12">
      <h1>add</h1>
    </div>
    <div class="col col-12">
      <div class="row">
        <div class="col col-12">
          {{ total_math }}
        </div>
        <div class="col col-12">
          <input type="number" v-model="numInput" class="hide-arrows" />
          total：{{ total }}
        </div>
        <div class="col col-12">
          <div class="col col-12">
            <div class="btn btn-primary m-1" @click="getTotal('+')">+</div>
            <div class="btn btn-primary m-1" @click="getTotal('-')">-</div>
            <div class="btn btn-primary m-1" @click="getTotal('*')">*</div>
            <div class="btn btn-primary m-1" @click="getTotal('/')">/</div>
            <div class="btn btn-primary m-1" @click="getTotal('=')">=</div>
          </div>
          <div
            v-for="(num, index) in 10"
            :key="index"
            class="btn btn-primary m-1"
            @click="addInput(index)"
          >
            {{ index }}
          </div>
        </div>
        <div class="col col-12">
          <div class="btn btn-primary m-1" @click="addInput('00')">00</div>
          <div class="btn btn-primary m-1" @click="addInput('CE')">CE</div>
          <div class="btn btn-primary m-1" @click="addInput('清除')">清除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      total_math: null,
      total: 0,
      numInput: ''
    }
  },
  methods: {
    addInput(num1: string) {
      if (num1 === 'CE' || num1 === '清除') {
        this.numInput = ''
        if (num1 === '清除') {
          this.total = 0
          this.total_math = null
        }
      } else {
        if (this.total_math == '=') this.total = 0
        let add = this.numInput.toString() + num1
        this.numInput = parseInt(add)
      }
    },
    getTotal(math: string) {
      let num = this.numInput
      let total = this.total
      if (total == 0) {
        this.total = num
      }
      if (total != 0) {
        if (this.total_math == '+') this.total = total + num
        if (this.total_math == '-') this.total = total - num
        if (this.total_math == '*') this.total = total * num
        if (this.total_math == '/') this.total = total / num
      }
      this.total_math = math
      this.numInput = ''
    }
  }
}
</script>

<style lang="scss">
/* Chrome, Safari, Edge, Opera */
.hide-arrows::-webkit-outer-spin-button,
.hide-arrows::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.hide-arrows {
  -moz-appearance: textfield;
}
</style>
