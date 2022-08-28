<template>
  <form @submit.prevent class="my-license-form">
    <div class="animal-container">
      <div class="title-container">
        <h2 class="title">Умови страхування тварини</h2>
      </div>
      <div class="input-container">
        <label for="firstField" class="label">Поле</label>
        <my-input
          v-model="formData.firstField"
          name="firstField"
          id="firstField"
          type="text"
          placeholder="Поле"
        ></my-input>
      </div>
      <div class="input-container">
        <label for="secondField">Поле</label>
        <my-input
          v-model="formData.secondField"
          name="secondField"
          id="secondField"
          type="text"
          placeholder="Поле"
        ></my-input>
      </div>
      <div class="input-container">
        <label for="thirdField">Поле</label>
        <my-input
          v-model="formData.thirdField"
          name="thirdField"
          id="thirdField"
          type="text"
          placeholder="Поле"
        ></my-input>
      </div>
      <div class="data-container">
        <div class="title-container">
          <h2 class="title">Термін дії договору</h2>
        </div>
        <div class="input-container">
          <label for="startDate" class="label">Дата початку</label>
          <my-input
            v-model="formData.startDate"
            name="startDate"
            id="startDate"
            type="date"
            placeholder="ДД / ММ / РР"
          ></my-input>
        </div>
        <div class="input-container">
          <label for="endDate">Дата закінчення</label>
          <my-input
            v-model="formData.endDate"
            name="endData"
            id="endDate"
            type="date"
            placeholder="ДД / ММ / РР"
          ></my-input>
        </div>
      </div>
      <div class="my-btns">
        <go-back-button @click="$router.push('/')">Назад</go-back-button>
        <go-on-button @click="$router.push('/user')" style="margin-left: 10px"
          >Продовжити</go-on-button
        >
      </div>
    </div>
  </form>
</template>

<script>
import MyInput from '@/components/UI/MyInput.vue';
import GoBackButton from '@/components/UI/GoBackButton.vue';
import GoOnButton from '@/components/UI/GoOnButton.vue';
export default {
  name: 'license-form',
  components: {
    MyInput,
    GoBackButton,
    GoOnButton,
  },
  data() {
    return {
      formData: {
        firstField: '',
        secondField: '',
        thirdField: '',
        startDate: '',
        endDate: '',
      },
    };
  },
};
</script>

<style scoped>
.my-license-form {
  padding: 60px 98px;
  margin: 32px auto 160px auto;
  width: 750px;
  height: 840px;
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

/* .animal-container {
  width: 360px; */
/* } */

.title-container {
  width: 360px;
  padding-bottom: 8px;
  border-bottom: 1px solid #efedee;
}

.title {
  color: #0b0f0e;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.6;
}

.data-container {
  margin-top: 48px;
}
</style>