<template>
  <PlayNow v-show="playNowStatus === 'show'" />
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
  },
  computed: {
    playNowStatus() {
      return this.$store.state.playNow;
    },
  },
};
</script>
