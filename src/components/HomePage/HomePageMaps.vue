<template>
  <div class="body-web__maps">
    <img
      src="../../assets/image/HomePage/body/map/1.png"
      alt=""
      class="body-web__maps-bg"
    />
    <div class="body-web__map-content">
      <h2>BẢN ĐỒ CỦA BẠN</h2>
      <h5>Chiến đấu khắp thế giới</h5>
      <p>
        Mỗi bản đồ đều là một sân chơi để bạn thỏa sức thể hiện tư duy sáng tạo
        của mình. Được xây dựng với mục đích phát triển chiến lược đội nhóm nhằm
        mang đến các trận đấu ngoạn mục và những khoảnh khắc xuất thần. Hãy tạo
        ra lối chơi đi vào lịch sử mà ai cũng muốn học hỏi.
      </p>
      <div class="body-web__map-btn">
        <button class="map_btn">
          <label class="label_map">XEM TẤT CẢ BẢN ĐỒ</label>
        </button>
      </div>
    </div>
    <img
      src="../../assets/image/HomePage/body/map/2.png"
      alt=""
      class="body-web__maps-riot"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body-web__maps {
  background-color: #ece8e1;
  width: 100vw;
  height: 960px;
  padding: 100px 110px 0;
  position: relative;
}

.body-web__maps-bg {
  position: absolute;
  right: 235.5px;
  top: 100px;
  width: 1375px;
  height: auto;
  z-index: 5;
}

.body-web__map-content {
  position: absolute;
  left: 245px;
  top: 240px;
  width: 495px;
  padding-top: 20px;
  border-top: 2px solid #b9b5b0;
  z-index: 10;
}

.body-web__map-content > h2 {
  font-size: 100px;
  margin: 0 0 40px;
  line-height: 1.3;
}

.body-web__map-content > h5 {
  text-transform: uppercase;
  font-size: 21px;
  line-height: 1.25;
}

.body-web__map-content > p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 42px;
  width: 350px;
}

.body-web__map-btn {
  position: relative;
}

.map_btn {
  display: block;
  padding: 20px 60px;
  color: #fff;
  font-weight: 700;
  background-color: #ff4655;
  z-index: 1;
  cursor: pointer;
  border: 0;
  margin: 0;
}

.map_btn:hover {
  /* filter: brightness(1.25); */
  background-color: #b9b5b0;
  color: #000;
}

.label_map {
  z-index: 100;
  font-size: 14px;
}

.body-web__maps-riot {
  position: absolute;
  bottom: 0;
  left: 111px;
  z-index: 0;
}
</style>
