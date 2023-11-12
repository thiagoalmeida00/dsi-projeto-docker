import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import artistaPage from "../views/artistaPage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/artista",
    name: "ArtistaPage",
    component: artistaPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
