<template>
  <div class="mx-4 my-2 border p-4 rounded-lg border-slate-200 border-solid">
    <div class="flex items-center justify-between items-start gap-8">
      <h1 class="my-2 font-semibold">{{ song.modified_name }}</h1>
      <div class="flex gap-2">
        <a href="" class="bg-blue-400 px-2 rounded-md text-color-black"
          ><i class="fas fa-pencil" @click.prevent="formTab = !formTab"></i
        ></a>
        <a href="" class="bg-red-400 px-2 rounded-md text-color-black"
          ><i class="fas fa-xmark" @click.prevent="deleteSong"></i
        ></a>
      </div>
    </div>
    <!-- Edit form -->

    <vee-form
      :class="{ hidden: !formTab }"
      :validation-schema="editSongSchema"
      @submit="editSong"
    >
      <div
        v-show="editSong_show_alert"
        :class="editSong_bg_variant"
        class="text-color-white p-2 my-2 text-center"
      >
        {{ editSong_alert_message }}
      </div>
      <div class="my-2 flex flex-col gap-2">
        <label for="songTitle" class="text-color-text text-[14px]"
          >Song Title</label
        >
        <vee-field
          type="text"
          name="songTitle"
          placeholder="song title"
          class="border rounded-md py-1 px-2 border-gray-400"
        />
        <ErrorMessage name="songTitle" class="text-red-500" />
      </div>
      <div class="my-2 flex flex-col gap-2">
        <label for="genre" class="text-color-text text-[14px]">Genre</label>
        <vee-field
          type="text"
          name="genre"
          placeholder="genre"
          class="border rounded-md py-1 px-2 border-gray-400"
        />
        <ErrorMessage name="genre" class="text-red-500" />
      </div>
      <button
        type="submit"
        class="my-2 px-4 py-2 bg-color-secondary text-center text-color-white mr-4"
      >
        Submit
      </button>
      <button
        type="submit"
        class="my-2 px-4 py-2 bg-color-gray-deep text-center text-color-white"
      >
        Cancel
      </button>
    </vee-form>
  </div>
</template>

<script>
import { db } from "../includes/firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

export default {
  name: "SongUploadItem",
  data() {
    return {
      formTab: false,
      editSongSchema: {
        songTitle: "required|alpha_spaces",
        genre: "required",
      },
      editSong_in_submission: false,
      editSong_show_alert: false,
      editSong_bg_variant: "bg-blue-400",
      editSong_alert_message: "modification in progress",
    };
  },
  methods: {
    async editSong(values) {
      this.editSong_in_submission = true;
      this.editSong_show_alert = true;
      this.editSong_bg_variant = "bg-blue-500";
      this.editSong_alert_message = "modification in progress";
      try {
        const songRef = doc(db, "songsCollection", this.song.docID);
        await updateDoc(songRef, {
          modified_name: values.songTitle,
          genre: values.genre,
        });
      } catch (error) {
        this.editSong_in_submission = false;
        this.editSong_show_alert = true;
        this.editSong_bg_variant = "bg-red-500";
        this.editSong_alert_message = `modification not successful - ${error.message}`;
        return;
      }
      const emitParams = { values: values, id: this.index };
      this.$emit("modify-song", emitParams);
      this.editSong_in_submission = false;
      this.editSong_show_alert = true;
      this.editSong_bg_variant = "bg-green-500";
      this.editSong_alert_message = "modification was successful";
    },
    async deleteSong() {
      try {
        await deleteDoc(doc(db, "songsCollection", this.song.docID));
      } catch (error) {
        console.log(error);
      }
      this.$emit("delete-song", this.index);
    },
  },
  props: {
    song: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  emits: ["modify-song", "delete-song"],
};
</script>

<style></style>
