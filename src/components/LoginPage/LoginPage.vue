<template>
  <div class="login_page">
    <Line />
    <LineRight />
    <LineTop />
    <video autoplay loop class="login_page-background" muted>
      <source
        src="../../assets/image/LoginPage/canal-loop.mp4"
        type="video/mp4"
      />
    </video>

    <div class="login_page-download-login">
      <span class="login_page-header">Tải trò chơi</span>
      <div class="login_page-download">
        <button class="login_page-download-btn">
          <label>TẢI VỀ</label>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Line from "../HomePage/Line.vue";
import LineRight from "./LineRight.vue";
import LineTop from "./LineTop.vue";

export default {
  name: "Login Page",
  components: {
    Line,
    LineRight,
    LineTop,
  },
};
</script>

<style scoped>
.login_page {
  position: relative;
  padding-top: 80px;
}

.login_page-background {
  width: 100vw;
  height: auto;
}

.login_page-download-login {
  position: absolute;
  top: 300px;
  left: 200px;
}

.login_page-header {
  font-size: 100px;
  line-height: 1.3;
  color: #ff4655;
  font-family: "Anton", sans-serif;
  text-transform: uppercase;
  letter-spacing: -6px;
  font-weight: 700;
  word-spacing: -2.5px;
}

.login_page-download {
  position: relative;
  margin-top: 100px;
  width: 203px;
}

.login_page-download::after {
  position: absolute;
  content: "";
  bottom: -6px;
  left: -6px;
  right: -6px;
  height: 24px;
  background-color: transparent;
  border-top: 0;
  border-bottom: 1px solid rgba(236, 232, 225, 0.5);
  border-left: 1px solid rgba(236, 232, 225, 0.5);
  border-right: 1px solid rgba(236, 232, 225, 0.5);
  display: block;
}

.login_page-download::before {
  position: absolute;
  content: "";
  top: -6px;
  left: -6px;
  right: -6px;
  height: 24px;
  background-color: transparent;
  border-bottom: 0;
  border-top: 1px solid rgba(236, 232, 225, 0.5);
  border-left: 1px solid rgba(236, 232, 225, 0.5);
  border-right: 1px solid rgba(236, 232, 225, 0.5);
  display: block;
}

.login_page-download-btn {
  display: block;
  padding: 20px 80px;
  color: #fff;
  font-weight: 700;
  background-color: #ff4655;
  z-index: 1;
  cursor: pointer;
  border: 0;
  margin: 0;
  position: relative;
}

.login_page-download-btn::after {
  position: absolute;
  z-index: 1000;
  content: "";
  display: block;
  bottom: 0;
  right: 0;
  width: 4px;
  height: 4px;
  background-color: #000;
}

.login_page-download-btn:hover::after {
  background-color: #fff;
}

.login_page-download-btn > label {
  z-index: 100;
}
</style>
