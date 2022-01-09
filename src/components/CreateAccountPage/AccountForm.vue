<template>
  <form class="account_form" @submit.prevent="postUser()">
    <h5 class="account_form_header">Your account</h5>
    <div class="account_form_input">
      <span class="account_form_input-placeholder">email</span>
      <input type="email" class="account_form_input-input" v-model="email" />
    </div>
    <div class="account_form_input">
      <span class="account_form_input-placeholder">username</span>
      <input type="text" class="account_form_input-input" v-model="username" />
    </div>
    <div class="account_form_input">
      <span class="account_form_input-placeholder">password</span>
      <input
        type="password"
        class="account_form_input-input"
        v-model="password"
      />
    </div>
    <div class="account_form_input">
      <span class="account_form_input-placeholder">confirm password</span>
      <input
        type="password"
        class="account_form_input-input"
        v-model="confirmPassword"
      />
    </div>
    <div class="account_form_newsletter">
      <input type="checkbox" class="account_form_newsletter-checkbox" />
      <span class="account_form_newsletter-content"
        >Receive news, special offers, feedback surveys, and playtest
        invitations from Riot Games</span
      >
    </div>
    <!-- <div class="account_form_sign-in-another">
      <p class="account_form_sign-in-another-caption">
        You can also create an account with
      </p>
      <div class="account_form_sign-in-another-methods">
        <button type="button" class="sign-in-method facebook">
          <i class="fab fa-facebook"></i>
        </button>
        <button type="button" class="sign-in-method google">
          <i class="fab fa-google"></i>
        </button>
        <button type="button" class="sign-in-method apple">
          <i class="fab fa-apple"></i>
        </button>
      </div>
    </div> -->
    <button
      class="account_form_move-next"
      :class="{ active: changeButtonStatus() }"
    >
      <i class="fas fa-arrow-right"></i>
    </button>
    <a href="" class="account_form_move-to-sign-in">Already have an account?</a>
  </form>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      submitButtonStatus: false,
    };
  },
  methods: {
    changeButtonStatus() {
      if (
        this.email.trim().includes("@") &&
        this.username.trim().length > 0 &&
        this.password.trim().length >= 6 &&
        this.confirmPassword === this.password
      ) {
        return true;
      }
      return false;
    },
    async postUser() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Vue POST Request Example" }),
      };
      const response = await fetch(
        "https://valorant-ad27c-default-rtdb.asia-southeast1.firebasedatabase.app/Users",
        requestOptions
      );
      const data = await response.json();
      this.postId = data.id;
    },
  },
};
</script>

<style scoped>
.account_form {
  background-color: #fff;
  width: 352px;
  height: 500px;
  padding: 32px 54px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.account_form_header {
  font-family: "FF Mark W05", sans-serif;
  margin: 0 0 30px 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.8px;
}

.account_form_input {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
}

.account_form_input-input {
  background-color: transparent;
  width: 250px;
  height: 100%;
  background-color: rgba(126, 126, 126, 0.1);
  color: #525252;
  padding: 0;
  font-size: 20px;
}

.account_form_input-placeholder {
  width: 120px;
  display: flex;
  align-items: center;
}

.account_form_input-input:hover {
  background-color: rgba(126, 126, 126, 0.15);
}

.account_form_newsletter {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
}

.account_form_newsletter-checkbox {
  background-color: #525252;
  border-radius: 8px;
  width: 30px;
  height: 30px;
}

.account_form_newsletter-content {
  font-size: 16px;
  font-family: "FF Mark W05", sans-serif;
  margin-left: 8px;
  font-weight: 600;
}

.account_form_move-next {
  width: 100px;
  height: 150px;
  border-radius: 10px;
  border: 2px solid #e8e8e8;
  background-color: transparent;
  color: #e8e8e8;
}

.account_form_move-next > i {
  font-size: 24px;
}

.active {
  background-color: #ff4655;
  color: #fff;
  cursor: pointer;
}

.account_form_move-to-sign-in {
  margin-top: 24px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 110%;
  font-size: 12px;
  color: #666;
}

/* .account_form_sign-in-another {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.account_form_sign-in-another-caption {
  font-size: 12px;
}

.account_form_sign-in-another-methods {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.sign-in-method {
  width: 92px;
  height: 35px;
  font-size: 18px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
}

.facebook {
  background-color: #1877f2;
  color: #fff;
}

.google {
  background-color: #e4e3e3;
  color: #aa333c;
}

.apple {
  background-color: #000;
  color: #fff;
} */
</style>
