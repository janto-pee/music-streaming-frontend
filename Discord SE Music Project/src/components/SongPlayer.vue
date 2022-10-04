<template>
  <div class="w-full">
    <!-- progress line -->
    <div class="bg-color-light-bg h-2" @click.prevent="updateSeek">
      <div class="flex h-full w-1/3 bg-red-500"></div>
    </div>
    <div class="flex justify-between items-center">
      <span class="text-[0.8rem] text-gray-300">00:00</span>
      <span class="text-[0.8rem] text-gray-300">03:05</span>
    </div>
  </div>
  <div class="flex justify-between gap-2 items-start md:items-center mx-2 mb-2">
    <!-- left -->
    <div class="flex basis-4/6 sm:basis-2/6 gap-2">
      <img
        src="./assets/img/Artboard-3.png"
        alt=""
        class="hidden md:flex w-12 h-12"
      />
      <div class="flex flex-col">
        <h5 class="text-sm font-bold">I wanna dance with somebody</h5>
        <p class="">Whitney Houston</p>
      </div>
    </div>
    <!-- center -->
    <div class="basis-2/6 sm:basis-2/6">
      <span class="flex items-center justify-between sm:justify-center"
        ><i
          class="fas fa-circle-play text-4xl"
          @click.prevent="toggleAudio"
        ></i>
        <i class="fas fa-download sm:hidden text-2xl"></i
      ></span>
    </div>
    <!-- right -->
    <div class="hidden sm:flex justify-end sm:basis-2/6">
      <div class="flex items-center justify-end gap-8">
        <button class="justify-center items-center">
          <i class="fas fa-download"></i>
        </button>
        <button class="justify-center items-center">
          <i class="fas fa-heart"></i>
        </button>
        <button class="justify-center items-center">
          <i class="fas fa-comment"></i>
        </button>
        <button class="justify-center items-center">
          <i class="fas fa-share"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Player",
  computed: {
    ...mapGetters(["playing"]),
  },
  methods: {
    ...mapActions(["updateSeek", "toggleAudio"]),
  },
};
</script>

<style></style>
