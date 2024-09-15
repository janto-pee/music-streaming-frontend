<template>
  <!-- Navigation -->
  <app-navigation />
  <!-- main -->
  <section class="relative top-16">
    <!-- aside -->
    <app-sidebar />
    <!-- contents -->
    <div
      class="relative w-full md:w-[calc(100%-12rem)] md:left-48 px-4 py-8 md:px-16 md:py-8"
    >
      <!-- ROUTER VIEW -->
      <router-view></router-view>

      <!-- authentication -->
      <app-auth />

      <!-- Player -->
      <div class="fixed w-full bg-emerald-500 h-20 bottom-0 left-0 z-30">
        <app-player />
      </div>
    </div>
  </section>
</template>

<script>
import AppNavigation from "./components/Navbar.vue";
import AppSidebar from "./components/Sidebar.vue";
import AppAuth from "./components/Authentication.vue";
import AppPlayer from "./components/SongPlayer.vue";

export default {
  name: "App",
  components: {
    AppNavigation,
    AppSidebar,
    AppAuth,
    AppPlayer,
  },
  created() {
    this.$store.dispatch("init_login");
  },
};
</script>

<style></style>
