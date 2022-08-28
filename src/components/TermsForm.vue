<template>
  <form @submit.prevent class="my-terms-form">
    <div class="form-container">
      <div class="title-container">
        <h2 class="title">Умови страхування тварини</h2>
      </div>
      <div class="input-container">
        <label for="sum" class="label">Страхова сума</label>
        <!-- <my-input
          v-model="formData.sum"
          name="sum"
          id="sum"
          type="number"
          placeholder="5000"
        ></my-input> -->
        <my-select
          class="my-select-btn"
          v-model="selectedSort"
          :options="insuranceOptions"
        />
      </div>
      <div class="input-container">
        <label for="payment">Страховий Платіж</label>
        <my-input
          v-model.number="formData.payment"
          name="payment"
          id="payment"
          type="number"
          placeholder="80"
        ></my-input>
      </div>
      <div class="my-btns">
        <go-on-button @click="$router.push('/license')"
          >Продовжити</go-on-button
        >
      </div>
    </div>
    <div class="box"></div>
  </form>
</template>

<script>
import axios from 'axios';
import MyInput from '@/components/UI/MyInput.vue';
import GoOnButton from '@/components/UI/GoOnButton.vue';
import MySelect from '@/components/UI/MySelect.vue';
export default {
  name: 'terms-form',
  components: {
    MyInput,
    GoOnButton,
    MySelect,
  },
  data() {
    return {
      formData: {
        payment: '',
      },
      selectedSort: '',
      insuranceOptions: [
        { value: '5000', name: '5000' },
        { value: '7000', name: '7000' },
        { value: '10000', name: '10000' },
      ],
    };
  },
  methods: {
    async postOption() {
      try {
        const response = await axios.post(
          'https://ecom-proxy.codot.pro/api/v1/widgets/get_tariff_test'
        );
      } catch (error) {
        alert('Ошибка');
      }
    },
  },
};
</script>

<style scoped>
.my-terms-form {
  width: 1140px;
  display: flex;
  margin: 32px auto 200px auto;
  padding: 60px 98px;
  border: 2px solid #f8f9fb;
  border-radius: 8px;
}

.my-btns {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}

.input-container {
  margin-top: 32px;
}

.form-container {
  width: 360px;
}

.title-container {
  padding-bottom: 8px;
  border-bottom: 1px solid #efedee;
}

.title {
  color: #0b0f0e;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.6;
}

.box {
  width: 458px;
  height: 328px;
  background: #ebeef5;
  border-radius: 4px;
  margin-left: 127px;
}

.my-select-btn {
  width: 360px;
  height: 40px;
  margin-top: 8px;
  border: 1px solid #efedee;
  border-radius: 4px;
}
</style>