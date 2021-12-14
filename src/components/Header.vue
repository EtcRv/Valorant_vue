<!-- eslint-disable prettier/prettier -->
<template>
  <div class="header">
    <router-link class="header__logo" to="/">
      <img src="../assets/image/HomePage/valorant-logo.png" alt="Logo" />
    </router-link>
    <div class="header__selection">
      <div class="header__selection-content have-nav">
        <h4>THÔNG TIN TRÒ CHƠI</h4>
        <i class="fas fa-sort-down header-icon"></i>
        <ul class="header__selection-nav">
          <li>
            <router-link to="/agents" class="header__selection-nav-sub">
              ĐIỆP VIÊN
            </router-link>
          </li>
          <li>
            <router-link to="/maps" class="header__selection-nav-sub">
              BẢN ĐỒ
            </router-link>
          </li>
          <li>
            <router-link to="/weapons" class="header__selection-nav-sub">
              KHO VŨ KHÍ
            </router-link>
          </li>
        </ul>
      </div>
      <router-link class="header__selection-content" to="/news">
        <h4>TIN TỨC</h4>
      </router-link>
      <div class="header__selection-content">
        <h4>HỖ TRỢ</h4>
        <i class="fas fa-location-arrow header-icon"></i>
      </div>
    </div>
    <div class="header__button">
      <button class="header_btn" @click="showPlayNow()">CHƠI NGAY</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  name: "Header",
  methods: {
    showPlayNow() {
      this.$store.commit("togglePlayNow");
    },
  },
};
</script>

<style scoped>
.header {
  height: 80px;
  width: 100%;
  display: flex;
  background-color: #0f1923;
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 100;
}

.header__logo {
  width: 80px;
  height: 80px;
  margin: 0 10px;
}

.header__logo img {
  width: 100%;
  height: 100%;
}

.header__selection {
  display: flex;
  align-items: center;
  height: 80px;
  width: 1200px;
  padding: 0 20px;
}

.header__selection-content {
  text-decoration: none;
  cursor: pointer;
  position: relative;
  height: 80px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.header-icon {
  font-size: 16px;
  opacity: 0.6;
  padding: 0 4px;
}

.header__selection-content:hover {
  border-bottom: 3px solid #d5934a;
}

.header__selection-content:hover .header-icon {
  opacity: 1;
}

.header__button {
  height: 80px;
  display: flex;
  align-items: center;
}

.header_btn {
  height: 41px;
  width: 129px;
  font-weight: 600;
  background-color: #ff4655;
  color: #fff;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
}

.header_btn:hover {
  filter: brightness(1.25);
}

.have-nav:hover .header__selection-nav-sub {
  display: block;
}

.header__selection-nav {
  position: absolute;
  top: 83px;
  left: 0;
  width: 100%;
  background-color: #0f1923;
  padding: 0;
  margin: 0;
  list-style: none;
  cursor: pointer;
}

.header__selection-nav-sub {
  display: none;
  height: 24px;
  padding: 15px 24px;
  font-size: 16px;
  font-weight: 500;
  color: #f9f9f9;
  text-decoration: none;
}

.header__selection-nav-sub:hover {
  background-color: #888;
}
</style>
