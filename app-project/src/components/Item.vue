<template>
  <div class="item" :class="{active:isActive}" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // props: ['isActive']
  props: {
    isActive: {
      type: Boolean, // 约束改属性的类型
      // required: true // 约束改属性必须传值
      default: false
    }
  },
  methods: {
    handleClick () {
      this.$emit('active', 123)
    }
  }
}
</script>

<style scoped>
.active{
  background: #e7e7e7;
}
.item{
  cursor: pointer;
  width:100%;
  height:100%;
  transform: 0.2s;
}
.item:hover{
  background:#f4f4f4;

}
</style>
