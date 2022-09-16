<template>
  <nav
    class="bg-white px-4 sm:px-8 py-4 border-b border-slate-300 border-solid fixed top-0 left-0 right-0 h-16 z-10"
  >
    <div class="flex justify-between items-center gap-4 h-full">
      <!-- Left Navigation -->
      <div class="basis-3/6 md:basis-64">
        <div class="flex items-center gap-2 sm:gap-4">
          <i
            class="bi bi-soundwave text-color-secondary text-lg sm:text-2xl md:text-3xl"
          ></i>
          <a href="#" class="text-lg md:text-xl font-semibold">Waveme</a>
        </div>
      </div>
      <!-- Center Navigation -->
      <div class="hidden md:flex basis-auto px-2 w-full">
        <div
          class="m-auto flex justify-between items-center bg-color-light-bg gap-2 px-4 py-2 rounded-3xl w-9/12"
        >
          <input
            type="text"
            placeholder="search..."
            class="bg-transparent w-full bg-bue-500"
          />
          <i class="fas fa-magnifying-glass"></i>
        </div>
      </div>
      <!-- Right Navigation -->
      <div class="hidden md:flex justify-end basis-2/6 md:basis-96">
        <div class="flex items-center justify-end gap-4">
          <i class="fas fa-magnifying-glass md:hidden text-sm"></i>
          <span class="hidden">Adejumo</span>
          <img
            src="./assets/img/profile.png"
            alt=""
            class="rounded-full w-8 h-8 border-2 hidden"
          />
          <button
            class="hidden sm:flex text-sm"
            @click.prevent="toggleAuthModal"
          >
            Sign In
          </button>
          <button
            class="px-4 py-2 bg-color-secondary text-color-white hidden md:flex"
            @click.prevent="toggleAuthModal"
          >
            Sign Up
          </button>
          <button
            class="rounded-full bg-color-secondary text-color-white md:hidden px-2"
          >
            <i class="fa fa-user text-color-white text-sm"></i>
          </button>
        </div>
      </div>

      <!-- mobile menu -->
      <i class="fas fa-bars text-md sm:text-xl md:text-xl md:hidden"></i>
      <div class="hidden">
        <div
          class="absolute top-0 right-0 z-30 bg-color-secondary h-screen w-1/2"
        >
          <div class="flex items-center justify-end">
            <i class="fas fa-xmark text-2xl text-color-white my-8 px-8"></i>
          </div>
          <div class="px-4">
            <div>
              <p class="mb-2 text-color-light-text">Browse</p>
              <ul class="text-color-white">
                <li class="my-4">
                  <a
                    class="flex items-center cursor-pointer gap-4"
                    href="/index.html"
                  >
                    <i class="fa fa-up-right-from-square"></i>
                    <span class="text-[14px] font-[400]">New Release</span>
                  </a>
                </li>
                <li class="my-4">
                  <a
                    class="flex items-center cursor-pointer gap-4"
                    href="/discover.html"
                  >
                    <i class="fa fa-compact-disc"></i>
                    <span class="text-[14px] font-[400]">Discover</span>
                  </a>
                </li>
                <li class="my-4">
                  <a class="flex items-center cursor-pointer gap-4">
                    <i class="fab fa-edge"></i>
                    <span class="text-[14px] font-[400]">Manage</span>
                  </a>
                </li>
                <li class="my-4">
                  <a
                    class="flex items-center cursor-pointer gap-4"
                    href="/Popular.html"
                  >
                    <i class="fas fa-arrow-trend-up"></i>
                    <span class="text-[14px] font-[400]">Popular</span>
                  </a>
                </li>
                <li class="my-4">
                  <a
                    class="flex items-center cursor-pointer gap-4"
                    href="/charts.html"
                  >
                    <i class="fas fa-chart-simple"></i>
                    <span class="text-[14px] font-[400]">Charts</span>
                  </a>
                </li>
                <li class="my-4">
                  <a
                    class="flex items-center cursor-pointer gap-4"
                    href="/Podcast.html"
                  >
                    <i class="fa fa-radio"></i>
                    <span class="text-[14px] font-[400]">Podcast</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class="my-4 text-color-light-text">Library</p>
              <ul class="text-color-white">
                <li class="my-4">
                  <a class="flex items-center cursor-pointer gap-4">
                    <i class="fas fa-arrow-trend-up"></i>
                    <span class="text-[14px] font-[400]">Stream</span>
                  </a>
                </li>
                <li class="my-4">
                  <a class="flex items-center cursor-pointer gap-4">
                    <i class="fas fa-chart-simple"></i>
                    <span class="text-[14px] font-[400]">Playlist</span>
                  </a>
                </li>
                <li class="my-4">
                  <a class="flex items-center cursor-pointer gap-4">
                    <i class="fa fa-radio"></i>
                    <span class="text-[14px] font-[400]">Likes</span>
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="flex justify-between items-center bg-color-light-bg gap-2 px-2 rounded-lg"
            >
              <input
                type="text"
                placeholder="search..."
                class="bg-transparent w-full bg-bue-500"
              />
              <i class="fas fa-magnifying-glass"></i>
            </div>
            <div class="flex items-center gap-4 my-4">
              <button
                class="hidden sm:flex text-sm"
                @click.prevent="toggleAuthModal"
              >
                Sign In
              </button>
              <button
                class="px-4 py-2 bg-color-gray-deep text-color-white"
                @click.prevent="toggleAuthModal"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Navigation",
  methods: {
    ...mapMutations(["toggleAuthModal"]),
  },
};
</script>

<style></style>
