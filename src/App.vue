<template>
  <Header></Header>
  <NavBar></NavBar>
  <div class="app">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    NavBar,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
}
.app {
  padding: 20px;
}
</style>
