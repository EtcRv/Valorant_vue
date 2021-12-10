<template>
  <div class="play_now">
    <div class="backdrop" @click="hidePlayNow()"></div>
    <div class="content">
      <div class="content_inner">
        <button class="content__closeBtn" @click="hidePlayNow()">
          <i class="fas fa-times"></i>
        </button>
        <div class="content__play-now">
          <div class="content-title">
            <h2>
              <span>\</span>
              Chuẩn bị sẵn sàng để chơi
              <span>\</span>
            </h2>
          </div>
          <div class="content-account">
            <div class="content-account-sign">
              <span>Tôi chưa có tài khoản RIOT</span>
              <button class="new_account-white">
                <span>Tạo mới ngay</span>
              </button>
            </div>
            <div class="content-account-sign">
              <span>Tôi đã có tài khoản RIOT</span>
              <button class="new_account-red">
                <span>Tải Game ngay</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Play Now",
  methods: {
    hidePlayNow() {
      this.$store.commit("togglePlayNow");
    },
  },
};
</script>

<style>
.play_now {
  position: relative;
}

.backdrop {
  z-index: 10000;
  position: fixed;
  display: block;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #00000080;
}

.content {
  min-width: 66.7%;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #0f1923;
  color: #f4f1ed;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 10010;
  border-bottom: 1px solid #968d8c;
  border-top: 1px solid #968d8c;
  max-height: 99vh;
  overflow-y: auto;
}

.content_inner {
  text-align: center;
  padding: 20px;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.content__closeBtn {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 16px;
  right: 16px;
  cursor: pointer;
  border: 0;
  background-color: #0f1923;
  padding: 0;
  color: #fff;
  font-size: 18px;
  transition: font-size 0.2s ease-out;
}

.content__closeBtn:hover {
  font-size: 20px;
  color: #ff4655;
  transition: all 0.2s ease-out;
}

.content__closeBtn::after {
  content: "";
  display: block;
  width: 4px;
  height: 4px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #fff;
}

.content__play-now {
  text-align: center;
  padding: 20px;
  min-height: 28vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-direction: column;
}

.content-title {
  margin-bottom: 40px;
  color: #f4f1ed;
}

.content-title > h2 {
  margin: 0;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: -1px;
}

.content-title > h2 > span {
  margin: 0 30px;
}
.content-account {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-account-sign {
  margin: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-account-sign > span {
  margin: 0 0 16px;
  font-size: 14px;
  font-weight: 600;
}

.content-account-sign > button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px 30px;
  width: 256px;
  height: 54px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
}

.content-account-sign > button::before {
  content: "";
  display: block;
  position: absolute;
  width: 266px;
  height: 30px;
  border-top: 1px solid rgba(236, 232, 225, 0.5);
  border-left: 1px solid rgba(236, 232, 225, 0.5);
  border-right: 1px solid rgba(236, 232, 225, 0.5);
  left: -6px;
  top: -10px;
}

.content-account-sign > button::after {
  content: "";
  display: block;
  position: absolute;
  width: 266px;
  height: 30px;
  border-bottom: 1px solid rgba(236, 232, 225, 0.5);
  border-left: 1px solid rgba(236, 232, 225, 0.5);
  border-right: 1px solid rgba(236, 232, 225, 0.5);
  left: -6px;
  bottom: -10px;
}

.content-account-sign > button:hover {
  background-color: rgb(26, 25, 25);
  color: #fff;
}

.new_account-white {
  background-color: #ece8e1;
}

.new_account-red {
  background-color: #ff4655;
}
</style>
