<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="body-web__news">
    <div class="body-web__news-begin-box"></div>
    <div class="grid">
      <div class="body-web__news-break-new">
        <span class="body-web__news-break-new-title">TIN TỨC MỚI NHẤT</span>
        <a href="" class="body-web__news-break-new-go">
          ĐẾN TRANG TIN TỨC
          <i class="fas fa-arrow-right body-web__news-break-new-go-icon"></i>
        </a>
      </div>
      <div class="body-web__news-break-news-content">
        <div class="new-content" v-for="breakNew in news" :key="breakNew.title">
          <img
            :src="
              require('../../assets/image/HomePage/body/news/' + breakNew.src)
            "
            alt=""
          />
          <div class="new-content-status">
            <div class="new-content-status-date">{{ breakNew.date }}</div>
            <div class="new-content-status-title">{{ breakNew.type }}</div>
          </div>
          <div class="new-content-main">
            <h3>{{ breakNew.title }}</h3>
            <p>{{ breakNew.desc }}</p>
          </div>
        </div>
      </div>
      <div class="body-web-line-connect"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home page News",
  data() {
    return {
      news: [
        {
          title: "Hiện Trạng Về Các Đặc Vụ - Yoru",
          src: "1.jpg",
          date: "09/12/21",
          type: "Đội ngũ phát triển",
          desc: "Loạt bài viết đặc biệt nhằm giúp bạn tìm hiểu chính xác điều chúng tôi đang làm để giúp đặc vụ Đối Đầu hệ không gian này tìm được chỗ đứng cho mình.",
        },
        {
          title: "VALORANT - Thông Tin Bản Cập Nhật 3.12",
          src: "2.jpg",
          date: "07/12/21",
          type: "Cập nhật trò chơi",
          desc: "Phím tắt riêng biệt cho mỗi Đặc Vụ. Chỉ vậy thôi.",
        },
        {
          title:
            "Kiến thức cơ bản về tình trạng bất ổn mạng và trò chơi VALORANT",
          src: "3.jpg",
          date: "02/12/21",
          type: "Cập nhật trò chơi",
          desc: "Chúng tôi có mặt để giúp bạn hiểu rõ các biểu tượng về tình trạng bất ổn mà đôi khi bạn có thể nhìn thấy trong trò chơi.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.grid {
  margin-left: 145px;
  width: 1230px;
}
.body-web__news {
  background-color: #ece8e1;
  width: 100vw;
  height: 1230;
  position: relative;
}

.body-web__news-begin-box {
  width: 100%;
  height: 130px;
  position: relative;
}

.body-web__news-begin-box::before {
  content: "";
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  top: 0;
  left: -32px;
  right: 32px;
  bottom: 0;
  margin: auto;
  background-color: tomato;
}

.body-web__news-begin-box::after {
  content: "";
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  top: 0;
  left: 32px;
  right: -32px;
  bottom: 0;
  margin: auto;
  background-color: tomato;
}

.body-web__news-break-new {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.body-web__news-break-new-title {
  font-size: 100px;
  color: #ff4655;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-self: flex-end !important;
  font-weight: 550;
  letter-spacing: -8px;
}

.body-web__news-break-new-go {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #ff4655;
  text-decoration: none;
  font-family: "Roboto", arial, georgia, sans-serif;
  font-weight: 600;
}

.body-web__news-break-new-go-icon {
  margin-left: 14px;
  font-size: 16px;
  transform: translateX(0%);
  transition: transform 0.3s ease-out;
}

.body-web__news-break-new-go:hover .body-web__news-break-new-go-icon {
  transform: translateX(50%);
  transition: transform 0.3s ease-out;
}

.body-web__news-break-news-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 450px;
}

.new-content {
  width: 390px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.new-content-status {
  display: flex;
  margin: 20px 0 15px;
  font-size: 12px;
  font-family: "Roboto", arial, georgia, sans-serif;
}

.new-content-status-date {
  color: #0f1923;
}

.new-content-status-title {
  margin: 0 0 0 20px;
  color: #ff4655;
  text-transform: uppercase;
}

.new-content-main h3 {
  font-size: 21px;
  margin: 0 0 15px;
  color: #383e3a;
  line-height: 1.25;
  font-weight: 700;
}
.new-content-main p {
  padding: 0 0 50px;
  font-size: 12px;
  color: #768079;
  line-height: 1.5;
}

.new-content-picture {
  position: relative;
}

.new-content-picture::before {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  color: #ff4655;
  transition: width 0.5s ease-out;
  z-index: 10;
}

.new-content:hover .new-content-picture::before {
  width: 100%;
  transition: width 0.5s ease-out;
}

.body-web-line-connect {
  width: 90%;
  height: 100px;
  border-bottom: 1px solid #b9b5b0;
  margin-left: 105px;
}
</style>
