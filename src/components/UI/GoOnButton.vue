<template>
  <button class="go-on-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'go-on-button',
};
</script>

<style scoped>
.go-on-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  width: 134px;
  height: 40px;
  color: #ffffff;
  background: #48a70a;
  border-radius: 4px;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.6;
}
</style>