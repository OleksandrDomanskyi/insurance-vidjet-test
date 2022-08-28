<template>
  <div class="progress-container">
    <div>Умови страхування</div>
    <div>Дані договору</div>
    <div>Дані страхувальника</div>
  </div>
</template>

<script>
export default {
  name: 'progress-bar',
};
</script>

<style scoped>
.progress-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1140px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 26px;
  background: #f8f9fb;
  border-radius: 4px;
}
</style>