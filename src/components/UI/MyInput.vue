<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number, Date],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  height: 40px;
  border: 1px solid teal;
  padding: 9px 0 7px 16px;
  margin-top: 8px;
  border: 1px solid #efedee;
  border-radius: 4px;
}
.input::placeholder {
  color: #dcdfe6;
}
</style>