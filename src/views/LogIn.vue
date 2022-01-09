<template>
  <Header />
  <LogIn />
  <div class="login_page-footer">
    <Footer />
  </div>
</template>

<script>
import LogIn from "../components/LoginPage/LoginPage.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Login Page",
  components: {
    LogIn,
    Header,
    Footer,
  },
};
</script>

<style scoped>
.login_page-footer {
  margin-top: -4px;
}
</style>
