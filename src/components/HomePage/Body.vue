<template>
  <PlayNow v-show="playNowStatus === 'show'" />
  <VideoTeaser v-show="videoTeaserStatus === 'show'" />
  <Line />
  <Trailer />
  <News />
  <AboutUs />
  <YourHero />
  <Maps />
</template>

<script>
import Trailer from "./HomePageTrailer.vue";
import News from "./HomePageNews.vue";
import AboutUs from "./HomePageAboutUs.vue";
import YourHero from "./HomePageYourHero.vue";
import Maps from "./HomePageMaps.vue";
import Line from "./Line.vue";
import PlayNow from "./PlayNow.vue";
import VideoTeaser from "./VideoTeaser.vue";

export default {
  name: "Body Home Page",
  data() {
    return {};
  },
  components: {
    Trailer,
    News,
    AboutUs,
    YourHero,
    Maps,
    Line,
    PlayNow,
    VideoTeaser,
  },
  computed: {
    playNowStatus() {
      return this.$store.state.playNow;
    },
    videoTeaserStatus() {
      return this.$store.state.videoTeaser;
    },
  },
};
</script>
