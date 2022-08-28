<template>
  <button class="go-back-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'go-back-button',
};
</script>

<style scoped>
.go-back-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  width: 84px;
  height: 40px;
  color: #656266;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
</style>