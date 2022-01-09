<template>
  <div class="create_acc_page">
    <div class="create_acc_page-logo">
      <img src="../../assets/image/CreateAccountPage/riot.png" />
    </div>
    <div class="grid create_acc_page-content">
      <div class="create_acc_page-header">
        <h3>CREATE AN ACCOUNT</h3>
      </div>
      <div class="create_acc_page-rules">
        <a href="https://support.riotgames.com/hc/en-us">SUPPORT</a>
        <a href="https://www.riotgames.com/en/privacy-notice">Privacy Notice</a>
        <a href="https://www.riotgames.com/en/terms-of-service"
          >Terms of Service</a
        >
        <a>Cookie Preferences</a>
        <div class="create_acc_page-rules-lang">
          <section></section>
          <span>
            EN
            <i class="fas fa-globe"></i>
          </span>
        </div>
      </div>
      <div class="create_acc_page-info">
        <p class="create_acc_page-info-riot">
          © 2020 Riot Games. All rights reserved.
        </p>
        <p class="create_acc_page-info-site">
          This site is protected by hCaptcha and its
          <a href="https://hcaptcha.com/privacy">Privacy Policy</a>
          and
          <a href="https://hcaptcha.com/terms">Terms of Service</a>
          apply.
        </p>
      </div>
      <div class="create_acc_page-form">
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./AccountForm.vue";
export default {
  name: "Create Account Page",
  components: {
    Form,
  },
};
</script>

<style scoped>
.create_acc_page {
  background-image: url(../../assets/image/CreateAccountPage/bg_viper.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}

.create_acc_page-logo {
  padding: 46px 0 0 126px;
}

.create_acc_page-logo > img {
  width: 160px;
  height: auto;
}

.create_acc_page-content {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.create_acc_page-header {
  font-size: 45px;
  width: 300px;
  color: #fff;
  text-shadow: 0px 16px 70px rgb(0 0 0 / 20%), 0px 8px 24px rgb(0 0 0 / 25%);
  position: fixed;
  bottom: 120px;
}

.create_acc_page-rules {
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  position: fixed;
  bottom: 80px;
  font-size: 14px;
  text-transform: uppercase;
  opacity: 0.8;
}

.create_acc_page-rules > a {
  cursor: pointer;
  margin-right: 8px;
  text-decoration: none;
  color: #fff;
}

.create_acc_page-rules-lang {
  width: 56px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3cfcf;
  border-radius: 5px;
  font-weight: 800;
}

.create_acc_page-rules-lang:hover {
  background-color: red;
}

.create_acc_page-info {
  position: fixed;
  bottom: 20px;
  opacity: 0.9;
}
.create_acc_page-info-riot {
  font-size: 10px;
  color: #fff;
  text-transform: uppercase;
}
.create_acc_page-info-site {
  font-size: 10px;
  color: #ccc;
  text-transform: uppercase;
}

.create_acc_page-info-site > a {
  color: #fff;
}
.create_acc_page-form {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 120px;
}
</style>
