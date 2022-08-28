<template>
  <form @submit.prevent class="my-user-form">
    <div>
      <div class="title-container">
        <h2 class="title">Особисті дані страхувальника</h2>
      </div>
      <div class="input-container">
        <label for="countryField" class="label"
          >Громадянство<span class="span">(країна)</span></label
        >
        <my-input
          v-model="formData.countryField"
          name="countryField"
          id="countryField"
          type="text"
          placeholder="Україна"
        ></my-input>
      </div>
      <div class="input-container">
        <label for="secondNameField">Прізвище</label>
        <my-input
          v-model="formData.secondNameField"
          name="secondNameField"
          id="secondNameField"
          type="text"
          placeholder="Шевченко"
        ></my-input>
      </div>
      <div class="input-container">
        <label for="firstNameField">Ім’я</label>
        <my-input
          v-model="formData.firstNameField"
          name="firstNameField"
          id="firstNameField"
          type="text"
          placeholder="Тарас"
        ></my-input>
      </div>
      <div class="input-container">
        <label for="thirdNameField">По-батькові</label>
        <my-input
          v-model="formData.thirdNameField"
          name="thirdNameField"
          id="thirdNameField"
          type="text"
          placeholder="Григорович"
        ></my-input>
      </div>
      <div class="input-container">
        <label for="fullNameField"
          >Прізвище та ім’я<span class="span">(латиницею)</span></label
        >
        <my-input
          v-model="formData.fullNameField"
          name="fullNameField"
          id="fullNameField"
          type="text"
          placeholder="Shevchenko Taras"
        ></my-input>
      </div>
      <div class="input-container">
        <label for="birthDate" class="label">Дата народження</label>
        <my-input
          v-model="formData.birthDate"
          name="birthDate"
          id="birthDate"
          type="date"
          placeholder="ДД / ММ / РР"
        ></my-input>
      </div>
      <div class="input-container">
        <label for="codeField">Ідентифікаційний код (ІПН)</label>
        <my-input
          v-model.number="formData.codeField"
          name="codeField"
          id="codeField"
          type="number"
          placeholder="XX-XX-XX-XX-XX"
        ></my-input>
      </div>
      <div class="input-container">
        <label for="phoneField">Номер мобільного телефону</label>
        <my-input
          v-model.number="formData.phoneField"
          name="phoneField"
          id="phoneField"
          type="number"
          placeholder="+38 XXX XXX XX XX"
        ></my-input>
      </div>
      <div class="input-container">
        <p>Статус</p>
        <div class="radio-btns-container">
          <div class="radio-box" style="margin-right: 30px">
            <my-radio
              v-model="formData.statusFirstField"
              name="status"
              id="statusFirstField"
              type="radio"
            ></my-radio>
            <label for="statusFirstField">Резидент</label>
          </div>
          <div class="radio-box">
            <my-radio
              v-model="formData.statusSecondField"
              name="status"
              id="statusSecondField"
              type="radio"
            ></my-radio>
            <label for="statusSecondField">Не резидент</label>
          </div>
        </div>
      </div>
      <div class="data-container">
        <div class="title-container">
          <h2 class="title">Адреса</h2>
        </div>
        <div class="input-container">
          <label for="districtField" class="label">Район</label>
          <my-input
            v-model="formData.districtField"
            name="districtField"
            id="districtField"
            type="text"
            placeholder="Шевченківський"
          ></my-input>
        </div>
        <div class="input-container">
          <label for="addressField" class="label"
            >Адреса<span class="span">(латиницею)</span></label
          >
          <my-input
            v-model="formData.addressField"
            name="addressField"
            id="addressField"
            type="text"
            placeholder="Ukraine, Kyivska obl., Kyiv, Khreshchatyk, 1"
          ></my-input>
        </div>
      </div>
      <div class="my-btns">
        <go-back-button @click="$router.push('/license')">Назад</go-back-button>
        <go-on-button @click="$router.push('/')" style="margin-left: 10px"
          >Продовжити</go-on-button
        >
      </div>
    </div>
  </form>
</template>

<script>
import MyInput from '@/components/UI/MyInput.vue';
import MyRadio from '@/components/UI/MyRadio.vue';
import GoBackButton from '@/components/UI/GoBackButton.vue';
import GoOnButton from '@/components/UI/GoOnButton.vue';
export default {
  name: 'user-form',
  components: {
    MyInput,
    MyRadio,
    GoBackButton,
    GoOnButton,
  },
  data() {
    return {
      formData: {
        countryField: '',
        secondNameField: '',
        firstNameField: '',
        thirdNameField: '',
        fullNameField: '',
        birthDate: '',
        codeField: '',
        phoneField: '',
        statusFirstField: '',
        statusSecondField: '',
        districtField: '',
        addressField: '',
      },
    };
  },
};
</script>

<style scoped>
.my-user-form {
  padding: 60px 98px;
  margin: 32px auto 160px auto;
  height: 1724px;
  width: 750px;
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

.span {
  color: #c0c4cc;
}

.radio-box {
  display: flex;
}

.radio-btns-container {
  display: flex;
  padding: 8px 21px 8px 0;
}
</style>