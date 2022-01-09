<template>
  <div class="line"></div>
</template>

<script>
export default {
  name: "Line Top",
};
</script>

<style scoped>
.line {
  position: absolute;
  left: 245px;
  top: 200px;
  right: 450px;
  height: 0.5px;
  margin: 0;
  padding: 0;
  background-color: #b9b5b0;
  z-index: 1;
}
</style>
