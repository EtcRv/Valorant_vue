<template>
  <Header />
  <Body />
  <Footer />
</template>

<script>
import Body from "../components/HomePage/Body.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    Body,
    Header,
    Footer,
  },
};
</script>
