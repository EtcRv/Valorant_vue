<template>
  <Header />
  <Home />
  <!-- <Agent /> -->
  <Footer />
</template>

<script>
import Home from "./views/Home.vue";
// import Agent from "./views/Agent.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Home,
    // Agent,
    Header,
    Footer,
  },
};
</script>
