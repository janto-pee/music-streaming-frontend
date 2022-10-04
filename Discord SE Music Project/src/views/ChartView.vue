<template>
  <!-- Featured -->
  <h1 class="text-4xl font-semibold pt-2">Charts</h1>
  <div class="my-8 flex gap-6">
    <a href="#" class="font-semibold">Monthly Top Chart</a>
    <a href="#">Weekly Top Chart</a>
  </div>
  <!-- main contents -->
  <div class="grid grid-cols-1 my-2">
    <div class="bg-color-white w-full p-4 rounded-md border my-4">
      <div
        class="flex flex-col gap-8 md:gap-2 md:flex-row md:items-center md:justify-between"
      >
        <div class="basis-4/12 flex gap-6 items-center px-2">
          <span class="hidden md:flex">1</span>
          <div
            alt=""
            class="bg-[url(../assets/img/recommended/Artboard-39.png)] bg-cover relative rounded-md w-24 h-28 flex relative chart-hover"
          >
            <button
              class="opacity-0 absolute bottom-0 right-4 text-color-white text-lg"
            >
              <i class="fas fa-circle-play"></i>
            </button>
          </div>
          <div>
            <h3 class="text-md">Album 2020</h3>
            <span>Hellyson</span>
          </div>
        </div>
        <div class="basis-3/12 flex gap-4 md:justify-end px-2">
          <a href="" class="flex gap-2">
            <i class="fa fa-download text-color-text"></i>
            <span>36.4k</span>
          </a>
          <a href="" class="flex gap-2">
            <i class="fas fa-heart text-color-secondary"></i>
            <span>19.4k</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
