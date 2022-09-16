<template>
  <!-- Navigation -->
  <app-navbar />
  <!-- main -->
  <section class="relative top-16">
    <!-- aside -->
    <div
      class="hidden md:block fixed w-48 top-16 px-4 sm:px-8 bg-white py-6 h-full"
    >
      <div>
        <p class="mb-2 text-color-light-text">Browse</p>
        <ul class="ml-2">
          <li class="my-4">
            <a
              class="flex items-center cursor-pointer gap-4"
              href="./index.html"
            >
              <i class="fa fa-house text-color-secondary w-4"></i>
              <span class="text-[14px] font-bold">Home</span>
            </a>
          </li>
          <li class="my-4">
            <a
              class="flex items-center cursor-pointer gap-4"
              href="/discover.html"
            >
              <i class="fab fa-cc-discover text-red-400 w-4"></i>
              <span class="text-[14px] font-[400]">Discover</span>
            </a>
          </li>
          <li class="my-4">
            <a
              class="flex items-center cursor-pointer gap-4"
              href="/Manage.html"
            >
              <i class="fas fa-clone text-red-400 w-4"></i>
              <span class="text-[14px] font-[400]">Manage</span>
            </a>
          </li>
          <li class="my-4">
            <a
              class="flex items-center cursor-pointer gap-4"
              href="/Popular.html"
            >
              <i class="fas fa-arrow-trend-up text-red-400 w-4"></i>
              <span class="text-[14px] font-[400]">Popular</span>
            </a>
          </li>
          <li class="my-4">
            <a
              class="flex items-center cursor-pointer gap-4"
              href="/charts.html"
            >
              <i class="fas fa-chart-simple text-red-400 w-4"></i>
              <span class="text-[14px] font-[400]">Charts</span>
            </a>
          </li>
          <li class="my-4">
            <a
              class="flex items-center cursor-pointer gap-4"
              href="/Podcast.html"
            >
              <i class="fa fa-radio text-red-400 w-4"></i>
              <span class="text-[14px] font-[400]">Podcast</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p class="my-4 text-color-light-text">Library</p>
        <ul class="ml-2">
          <li class="my-4">
            <a class="flex items-center cursor-pointer gap-4">
              <i class="fas fa-arrow-trend-up text-red-400 w-4"></i>
              <span class="text-[14px] font-[400]">Stream</span>
            </a>
          </li>
          <li class="my-4">
            <a class="flex items-center cursor-pointer gap-4">
              <i class="fas fa-chart-simple text-red-400 w-4"></i>
              <span class="text-[14px] font-[400]">Playlist</span>
            </a>
          </li>
          <li class="my-4">
            <a class="flex items-center cursor-pointer gap-4">
              <i class="fa fa-radio text-red-400 w-4"></i>
              <span class="text-[14px] font-[400]">Likes</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- aside footer -->
      <ul class="fixed left-0 bottom-0 px-8 flex flex-col gap-4">
        <li class="">
          <a href="">About Us</a>
        </li>
        <li class="">
          <a href="">Contact Us</a>
        </li>
      </ul>
    </div>
    <!-- contents -->
    <div
      class="relative w-full md:w-[calc(100%-12rem)] md:left-48 px-4 py-8 md:px-16 md:py-8"
    >
      <router-view></router-view>
      <!-- authentication -->
      <app-auth />
    </div>
  </section>
</template>

<script>
import AppAuth from "./components/Authentication.vue";
import AppNavbar from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    AppAuth,
    AppNavbar,
  },
};
</script>

<style></style>
