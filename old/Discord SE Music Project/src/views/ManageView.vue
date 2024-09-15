<template>
  <!-- <h1 class="text-3xl font-semibold pt-2">Ayo Ade</h1> -->
  <div class="my-2 flex flex-col gap-8 md:flex-row items-start md:gap-4">
    <div class="md:basis-2/6 bg-color-white w-full">
      <app-upload />
    </div>
    <div class="md:basis-4/6 bg-color-white w-full">
      <div
        class="flex justify-between items-center p-2 border-b border-slate-400 border-solid"
      >
        <h1 class="text-lg font-semibold">My Uploads</h1>
        <i class="fa fa-list-music"></i>
      </div>
      <div class="bg-color-white flex flex-col gap-4 min-h-[6rem]">
        <song-upload-item
          v-for="(song, index) in songs"
          :key="song.docID"
          :song="song"
          :index="index"
          @modify-song="modifySong"
          @delete-song="deleteSong"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AppUpload from "../components/Upload.vue";
import SongUploadItem from "../components/SongUpload-Item.vue";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../includes/firebase";

export default {
  name: "ManageView",
  async created() {
    const q = query(
      collection(db, "songsCollection"),
      where("uid", "==", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      this.songs.push({
        docID: doc.id,
        ...doc.data(),
      });
    });
  },
  components: {
    AppUpload,
    SongUploadItem,
  },
  data() {
    return {
      songs: [],
    };
  },
  methods: {
    modifySong(emitParams) {
      this.songs[emitParams.id].modified_name = emitParams.values.songTitle;
      this.songs[emitParams.id].genre = emitParams.values.genre;
    },
    deleteSong(id) {
      this.songs.splice(id, 1);
    },
  },
};
</script>
