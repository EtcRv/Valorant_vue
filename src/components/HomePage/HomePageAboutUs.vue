<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="body-web__about-us">
    <div class="grid">
      <div class="body-web__about-us-header">
        <div class="bigdot about-us-header-biggot-place"></div>
        <div class="about-us-header-content">
          <span class="about-us-header-content-title"
            >CHÚNG TÔI LÀ VALORANT</span
          >
          <span class="about-us-header-content-effect-text">
            <span class="effect-text_line">VLRT PR0T0C0L</span>
            <span class="effect-text_line">MR0C - SWD - BR4</span>
          </span>
        </div>
      </div>
      <div class="body-web__about-us-content">
        <div class="smalldot dot_about_us-1"></div>
        <div class="smalldot dot_about_us-2"></div>
        <div class="smalldot dot_about_us-3"></div>
        <div class="smalldot dot_about_us-4"></div>
        <div class="bigdot dot_about_us-5"></div>
        <div class="about-us-main-content">
          <h5>THÁCH THỨC MỌI GIỚI HẠN</h5>
          <div>
            <span class="about-us-main-content-text"
              >Mang phong cách và trải nghiệm cá nhân tới đấu trường cạnh tranh
              toàn cầu. Bạn có 13 vòng đấu để tấn công và phòng thủ bằng kỹ năng
              đấu súng và tư duy chiến thuật sắc bén. Với chỉ 1 mạng mỗi vòng
              đấu, nhanh trí là yếu tố sẽ giúp bạn sống sót trước kẻ địch. Hãy
              tranh tài trong các chế độ Đấu Xếp Hạng, Đấu Thường, Sinh Tử và
              Spike Thần Tốc.</span
            >
            <div class="about-us-main-content-link">
              Xem trailer lối chơi tại đây.
            </div>
          </div>
          <div class="about-us-video-trailer">
            <div class="about-us-video-trailer-img">
              <img src="../../assets/image/HomePage/body/news/4.jpg" alt="" />
              <div class="about-us-video-trailer-play">
                <i class="fas fa-play"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About us",
};
</script>

<style scoped>
.about-us-header-biggot-place {
  position: absolute;
  top: 16px;
  right: 240px;
}

.body-web__about-us {
  padding: 15px 0;
  background-color: #ece8e1;
}

.body-web__about-us-header {
  position: relative;
}

.about-us-header-content {
  width: 100%;
  height: 180px;
  margin-bottom: 40px;
  position: relative;
}

.about-us-header-content-title {
  position: absolute;
  top: 60px;
  left: 0;
  padding: 15px 0;
  display: inline-block;
  width: 100%;
  font-size: 92px;
  color: #0f1923;
  letter-spacing: -8px;
  font-weight: 600;
}

.about-us-header-content-effect-text {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 160px;
  height: 40px;
  border-bottom: 4px solid #ff4655;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 12px;
  line-height: 1.4;
  color: #ff4655;
}

.effect-text_line {
  transform: scaleX(-1);
  font-weight: 600;
  letter-spacing: 1.5px;
}

.body-web__about-us-content {
  height: 480px;
  width: 100%;
  position: relative;
}

.dot_about_us-1 {
  position: absolute;
  top: 0;
  left: 0;
}

.dot_about_us-2 {
  position: absolute;
  top: 0;
  left: 629px;
}
.dot_about_us-3 {
  position: absolute;
  top: 0;
  left: 675px;
}

.dot_about_us-4 {
  position: absolute;
  top: 258px;
  left: 105px;
}

.dot_about_us-5 {
  position: absolute;
  bottom: 0;
  left: 0;
}

.about-us-main-content {
  position: relative;
  margin: 0 0 80px 210px;
  padding: 40px 0;
  width: 285px;
  height: 320px;
  border-bottom: 1px solid #383e3a;
}

.about-us-main-content > h5 {
  color: #383e3a;
  margin: 0 0 25px;
  font-size: 21px;
}

.about-us-main-content-text {
  color: #768079;
  font-size: 16px;
  line-height: 1.5;
}

.about-us-main-content-link {
  font-weight: 600;
  margin: 25px 0 0;
  cursor: pointer;
  color: #ff4655;
  transition: color 0.1s ease-out;
}

.about-us-main-content-link:hover {
  color: #0f1923;
  transition: color 0.1s ease-out;
}

.about-us-main-content::after {
  content: "";
  display: block;
  position: absolute;
  height: 4px;
  width: 4px;
  background-color: #0f1923;
  bottom: 0;
}

.about-us-video-trailer {
  position: absolute;
  left: 420px;
  top: 40px;
  width: 705px;
  height: 340px;
}

.about-us-video-trailer-img {
  width: 711px;
  height: 400px;
  position: relative;
}

.about-us-video-trailer-img > img {
  width: auto;
  height: 400px;
  cursor: pointer;
}

.about-us-video-trailer-play {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 68px;
  height: 68px;
  background-color: #ff4655;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-us-video-trailer-play > i {
  font-size: 24px;
  transition: font-size 0.15s ease-in;
  z-index: 10;
}

.about-us-video-trailer-img:hover .about-us-video-trailer-play > i {
  font-size: 28px;
  transition: font-size 0.15s ease-in;
}

.about-us-video-trailer-play::after {
  content: "";
  position: absolute;
  display: block;
  bottom: 0;
  right: 0;
  width: 4px;
  height: 4px;
  background-color: #fff;
}

.about-us-video-trailer-img::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100px;
  height: 4px;
  background-color: #ff4655;
}
</style>
