<template>
  <!-- Featured -->
  <h1 class="text-4xl font-semibold pt-2 pb-4">Trending</h1>
  <!-- main contents -->
  <div class="grid grid-cols-1 my-2">
    <div v-for="(song, index) in songs" :key="song.docID">
      <router-link :to="{ name: 'song', params: { id: song.docID } }">
        <div class="bg-color-white w-full p-4 rounded-md border my-4">
          <div
            class="flex flex-col gap-8 md:gap-2 md:flex-row md:items-center md:justify-between"
          >
            <div class="basis-4/12 flex gap-6 items-center px-2">
              <span class="hidden md:flex">{{ index }}</span>
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
                <h3 class="text-md">{{ song.modified_name }}</h3>
                <span>Hellyson</span>
              </div>
            </div>
            <div class="basis-3/12 flex gap-4 justify-center md:justify-end">
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
          <div class="flex items-center justify-between gap-4 px-2 mt-4">
            <p>
              <button class="">
                <i class="fa fa-circle-play text-color-text text-lg"></i>
              </button>
            </p>
            <div class="w-full bg-color-light-bg h-2">
              <div class="flex h-full w-1/3 bg-red-500"></div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="flex items-center" :class="{ hidden: !loading }">
      <i class="fas fa-spinner fa-spin"></i>
    </div>
  </div>
</template>
<script>
import {
  collection,
  getDocs,
  getDoc,
  query,
  orderBy,
  limit,
  startAfter,
  doc,
} from "firebase/firestore";
import { db } from "../includes/firebase";

export default {
  name: "PopularView",
  async created() {
    this.getSongs();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      songs: [],
      maxLoadValue: 3,
      loading: false,
    };
  },
  methods: {
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement;
      const { innerHeight } = window;
      const bottomOfPage = Math.round(scrollTop) + innerHeight === offsetHeight;

      if (bottomOfPage) {
        this.getSongs();
      }
    },
    async getSongs() {
      if (this.loading) {
        return;
      }

      this.loading = true;

      const songsRef = collection(db, "songsCollection");

      let querySnapshot;

      if (this.songs.length) {
        const lastSong = this.songs[this.songs.length - 1].docID;
        const docRef = doc(db, "songsCollection", lastSong);
        const docSnap = await getDoc(docRef);
        console.log(docSnap);

        const q = query(
          startAfter(docSnap),
          collection(db, "songsCollection"),
          orderBy("modified_name"),
          limit(2)
        );
        querySnapshot = await getDocs(q);
      } else {
        //
        const q = query(
          songsRef,
          orderBy("modified_name"),
          limit(this.maxLoadValue)
        );
        querySnapshot = await getDocs(q);
      }

      querySnapshot.forEach((doc) => {
        this.songs.push({
          docID: doc.id,
          ...doc.data(),
        });
        this.loading = false;
        console.log(this.songs);
      });
    },
  },
};
</script>
