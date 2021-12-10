import { createStore } from "vuex";

export default createStore({
  state: {
    playNow: "hide",
  },
  mutations: {
    togglePlayNow(state) {
      if (state.playNow === "hide") {
        state.playNow = "show";
      } else {
        state.playNow = "hide";
      }
    },
  },
  actions: {},
  modules: {},
});
