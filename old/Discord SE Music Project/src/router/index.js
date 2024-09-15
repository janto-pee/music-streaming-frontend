import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ChartView from "@/views/ChartView.vue";
import DiscoverView from "@/views/DiscoverView.vue";
import ManageView from "@/views/ManageView.vue";
import PopularView from "@/views/PopularView.vue";
import PodcastView from "@/views/PodcastView.vue";
import SongView from "@/views/Song.vue";
import store from "../store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "text-color-black",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/chart",
      name: "chart",
      component: ChartView,
    },
    {
      path: "/discover",
      name: "discover",
      component: DiscoverView,
    },
    {
      path: "/manage",
      name: "manage",
      component: ManageView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/podcast",
      name: "podcast",
      component: PodcastView,
    },
    {
      path: "/popular",
      name: "popular",
      component: PopularView,
    },
    {
      path: "/song/:id",
      name: "song",
      component: SongView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.matched.some((recored) => recored.meta.requiresAuth)) {
    next();
    return;
  }
  if (store.state.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});
export default router;
