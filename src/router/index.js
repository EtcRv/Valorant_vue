import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Agent from "../views/Agent.vue";
import News from "../views/News.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";

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
  {
    path: "/sign_up",
    component: SignUp,
  },
  {
    path: "/log_in",
    component: LogIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
