<template>
  <div class="News_Page">
    <Line />
    <PlayNow v-show="playNowStatus === 'show'" />
    <div class="news-page-bg">
      <img
        src="../../assets/image/HomePage/body/trailer/rule.jpg"
        alt=""
        class="rule"
      />
      <h2 class="news-page__text-bg">
        <span>VALORANT</span>
      </h2>
      <Articles />
    </div>
  </div>
</template>

<script>
import Line from "../HomePage/Line.vue";
import Articles from "./NewsPageArticle.vue";
import PlayNow from "../HomePage/PlayNow.vue";

export default {
  name: "News Body",
  components: {
    Line,
    Articles,
    PlayNow,
  },
};
</script>

<style scoped>
h2 {
  margin: 0;
}

.News_Page {
  position: relative;
}

.news-page-bg {
  position: relative;
}

.rule {
  position: absolute;
  top: 120px;
  left: 40px;
  z-index: 2;
}

.news-page__text-bg {
  background-color: #ece8e1;
  position: absolute;
  left: -2.5em;
  top: 2em;
}

.news-page__text-bg > span {
  color: #ece8e1;
  font-size: 20rem;
  line-height: 0.82;
  text-shadow: 3px 2px 1px #ccc;
}
</style>
