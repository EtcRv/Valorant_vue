<template>
  <div class="body-web__trailer">
    <video autoplay loop class="vid" muted>
      <source src="../../assets/video/trailer.mp4" type="video/mp4" />
    </video>
    <img
      src="../../assets/image/HomePage/body/trailer/rule.jpg"
      alt=""
      class="rule"
    />
    <div class="body-web__trailer-content">
      <p>
        Một tựa game bắn súng chiến thuật 5 đấu 5 lấy các nhân vật làm nền tảng
      </p>
      <img
        src="../../assets/image/HomePage/body/trailer/Title.png"
        alt=""
        class="trailer_title"
      />
      <div class="body-web__trailer-content-btn">
        <span i></span>
        <button class="trailer_btn" @click="showPlayNow()">
          <label class="label_play_for_free">CHƠI MIỄN PHÍ</label>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Body Trailer",
  methods: {
    showPlayNow() {
      this.$store.commit("togglePlayNow");
    },
  },
};
</script>

<style scoped>
.body-web__trailer {
  position: relative;
  width: 100%;
  height: 640px;
}

.body-web__trailer video {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  max-height: 100%;
}

.body-web__trailer .rule {
  position: absolute;
  top: 120px;
  left: 40px;
  z-index: 2;
}

.body-web__trailer-content {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0px;
  margin: 0px auto;
  width: 1200px;
  height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 0;
}

.body-web__trailer-content p {
  color: #ece8e1;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 35px;
}

.body-web__trailer-content .trailer_title {
  width: auto;
  height: 93px;
  margin: 0 0 35px;
}

.body-web__trailer-content-btn {
  position: relative;
}

.body-web__trailer-content-btn::after {
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

.body-web__trailer-content-btn::before {
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

.trailer_btn {
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

.label_play_for_free {
  z-index: 100;
}

.trailer_btn::after {
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

.trailer_btn:hover::after {
  background-color: #fff;
}
</style>
