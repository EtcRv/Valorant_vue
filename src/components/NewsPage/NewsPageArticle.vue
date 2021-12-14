<template>
  <div class="new-article">
    <div class="grid">
      <h2 class="title" @click="showData()">
        <span>TIN TỨC</span>
      </h2>
      <div class="articles">
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="single-article"
          :class="{ right: index % 2 == 0, left: index % 2 == 1 }"
        >
          <img
            :src="
              require('../../assets/image/HomePage/body/news/' + article.src)
            "
            alt=""
          />
          <div class="single-article__content">
            <p class="single-article__content-date">{{ article.date }}</p>
            <h5 class="single-article__content-title">{{ article.title }}</h5>
            <p class="single-article__content-desc">{{ article.desc }}</p>
            <button class="single-article__content-button">
              XEM BÀI VIẾT
              <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  data() {
    return {
      articles: [],
    };
  },

  methods: {
    async getNewsDataFromAPI() {
      try {
        let response = await fetch(
          "https://valorant-ad27c-default-rtdb.asia-southeast1.firebasedatabase.app/News.json"
        );
        let datas = await response.json();
        const keys = Object.keys(datas);
        keys.forEach((key) => {
          this.articles.push(datas[key]);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getNewsDataFromAPI();
  },
};
</script>

<style scoped>
.left {
  display: flex;
  justify-content: left;
}

.right {
  display: flex;
  justify-content: right;
}

.new-article {
  position: absolute;
  top: 310px;
  left: 0;
  right: 0;
  background-color: #ece8e1;
}

.title {
  font-size: 100px;
  margin: 20px 0 0 105px;
  padding: 10px 0;
  font-weight: 900;
}

.articles {
  width: calc(75% - 75px);
  display: flex;
  flex-direction: column;
  margin-left: 105px;
}

.single-article {
  display: flex;
  margin: 110px 0;
  cursor: pointer;
}

.single-article > img {
  width: 390px;
  height: auto;
}

.single-article__content {
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 300px;
}

.single-article__content-date {
  color: #383e3a;
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 15px 0;
}

.single-article__content-title {
  text-transform: uppercase;
  padding-right: 10px;
  color: #383e3a;
  font-size: 21px;
  margin: 0;
}

.single-article__content-desc {
  margin: 12.5px 0 17px;
  color: #768079;
  font-size: 16px;
  line-height: 1.5;
}

.single-article__content-button {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  color: #ff4655;
  background-color: #ece8e1;
  text-align: left;
  border: none;
}

.single-article__content-button > i {
  margin-left: 14px;
  font-size: 18px;
  transition: margin-left 0.2s ease-in;
}

.single-article:hover .single-article__content-button > i {
  margin-left: 18px;
  transition: margin-left 0.2s ease-in;
}
</style>
