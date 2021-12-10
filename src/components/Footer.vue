<template>
  <div class="footer">
    <div class="footer-picture">
      <!-- <img src="../assets/image/footer/3.png" />
      <img src="../assets/image/footer/logo_vng.png" /> -->
    </div>
    <p>Create by <a href="/">Dũng</a></p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #0f1923;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 24px;
  color: #fff;
}
</style>
