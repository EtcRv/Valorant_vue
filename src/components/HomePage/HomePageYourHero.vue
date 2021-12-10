<template>
  <div class="body-web__your-heros">
    <div class="body-web__your-heros-content">
      <h2>ĐẶC VỤ CỦA BẠN</h2>
      <h5>VŨ KHÍ TỐI THƯỢNG CHÍNH LÀ TRÍ SÁNG TẠO CỦA BẠN.</h5>
      <p>
        Ngoài việc trang bị súng đạn, hãy chọn cho mình một Đặc Vụ có kỹ năng
        phù hợp để giúp bạn tỏa sáng trong những màn đấu súng. Không có Đặc Vụ
        nào giống nhau, mỗi cá nhân đều là độc nhất.
      </p>
      <div class="body-web__your-hero-btn">
        <button class="your-hero_btn">
          <label class="label_your_hero">XEM TẤT CẢ ĐIỆP VIÊN</label>
        </button>
      </div>
    </div>
    <img src="../../assets/image/HomePage/body/your-heros/1.gif" alt="" />
  </div>
</template>

<script>
export default {
  name: "Your Hero",
};
</script>

<style scoped>
.body-web__your-heros {
  width: 100vw;
  position: relative;
  height: 886.66px;
  z-index: 2;
}

.body-web__your-heros::before {
  position: absolute;
  content: "";
  top: 0;
  left: 250px;
  width: 80%;
  height: 1px;
  background-color: #b9b5b0;
}

.body-web__your-heros > img {
  width: 100vw;
  height: auto;
}

.body-web__your-heros-content {
  position: absolute;
  left: 145px;
  top: 140px;
  width: 495px;
  padding-top: 20px;
  border-top: 2px solid #b9b5b0;
}

.body-web__your-heros-content > h2 {
  font-size: 100px;
  margin: 0 0 40px;
  line-height: 1.3;
}

.body-web__your-heros-content > h5 {
  font-size: 21px;
  line-height: 1.25;
}

.body-web__your-heros-content > p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 92px;
  width: 350px;
}

.body-web__your-hero-btn {
  position: relative;
}

.your-hero_btn {
  display: block;
  padding: 20px 60px;
  color: #fff;
  font-weight: 700;
  background-color: #ff4655;
  z-index: 1;
  cursor: pointer;
  border: 0;
  margin: 0;
}

.your-hero_btn:hover {
  /* filter: brightness(1.25); */
  background-color: #b9b5b0;
  color: #000;
}

.label_your_hero {
  z-index: 100;
  font-size: 14px;
}
</style>
