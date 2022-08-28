<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: 'my-radio',
  props: {
    modelValue: [String],
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
  position: relative;
  top: 3px;
  appearance: none;
  width: 14px;
  height: 14px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid #efedee;
  transition: 0.2s all linear;
  outline: none;
}

.input:checked {
  border: 5px solid #48a70a;
}
</style>