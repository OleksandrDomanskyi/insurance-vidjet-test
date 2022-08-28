<template>
  <div>
    <div class="title-container">
      <h1>Страхування тварини</h1>
    </div>
    <progress-bar></progress-bar>
    <license-form></license-form>
  </div>
</template>

<script>
import LicenseForm from '@/components/LicenseForm.vue';
import ProgressBar from '@/components/ProgressBar.vue';
export default {
  components: {
    LicenseForm,
    ProgressBar,
  },
};
</script>

<style scoped>
.title-container {
  width: 1140px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}
</style>