import { createStore } from "vuex";

export default createStore({
  state: {
    playNow: "hide",
    videoTeaser: "hide",
  },
  mutations: {
    togglePlayNow(state) {
      if (state.playNow === "hide") {
        state.playNow = "show";
      } else {
        state.playNow = "hide";
      }
    },
    toggleVideoTeaser(state) {
      if (state.videoTeaser === "hide") {
        state.videoTeaser = "show";
      } else {
        state.videoTeaser = "hide";
      }
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
