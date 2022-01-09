<template>
  <from class="login_form">
    <h5 class="login_form_header">Login To Download</h5>
    <div class="login_form_input">
      <span class="login_form_input-placeholder">email</span>
      <input type="email" class="login_form_input-input" />
    </div>
    <div class="login_form_input">
      <span class="login_form_input-placeholder">password</span>
      <input type="password" class="login_form_input-input" />
    </div>
  </from>
</template>

<script>
export default {
  name: "Login Form",
};
</script>

<style scoped>
.login_form {
  display: flex;
  flex-direction: column;
  background-color: #ff4655;
  border-radius: 8px;
}

.login_form_header {
  font-family: "Anton", sans-serif;
  font-size: 60px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: inherit;
  margin: 20px 10px;
}

.login_form_input {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-bottom: 10px;
  margin-left: 40px;
}

.login_form_input-placeholder {
  position: absolute;
}

.login_form_input-input {
  width: 100%;
  height: 50px;
  background-color: rgba(126, 126, 126, 0.1);
}
</style>
