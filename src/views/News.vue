<template>
  <Header />
  <Body />
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import Body from "../components/NewsPage/Body.vue";
import Header from "../components/Header.vue";

export default {
  name: "News Page",
  components: {
    Body,
    Header,
    Footer,
  },
};
</script>

<style></style>
