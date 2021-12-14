import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Agent from "../views/Agent.vue";
import News from "../views/News.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/agents",
    component: Agent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
