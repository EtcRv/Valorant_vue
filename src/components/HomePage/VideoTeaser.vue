<template>
  <div class="video_teaser">
    <div class="backdrop" @click="hideVideoTeaser()"></div>
    <div class="video_teaser-content">
      <button class="video_teaser-close-btn" @click="hideVideoTeaser()">
        <i class="fas fa-times"></i>
      </button>
      <section>
        <iframe
          width="1519"
          height="675"
          src="https://www.youtube.com/embed/gv_fxgP2Jtk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video Teaser",
  methods: {
    hideVideoTeaser() {
      this.$store.commit("toggleVideoTeaser");
    },
  },
};
</script>

<style scoped>
.video_teaser {
  position: relative;
}

.video_teaser-content {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 10010;
}

section {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.video_teaser-close-btn {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 16px;
  right: 16px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  padding: 0;
  color: #fff;
  font-size: 14px;
  transition: background-color 1s ease-in-out;
  transition: font-size 0.2s ease-out;
}

.video_teaser-close-btn:hover {
  background-color: #0f1923;
  font-size: 18px;
  color: #ff4655;
  transition: all 0.2s ease-in;
}
</style>
