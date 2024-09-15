<template>
  <div class="flex justify-between items-center p-2 border-4">
    <h1 class="text-lg font-semibold">Upload</h1>
    <i class="fas fa-upload text-color-secondary"></i>
  </div>
  <div class="border-t border-slate-400 border-solid">
    <p
      class="p-8 lg:p-12 bg-slate-200 m-4 text-center"
      :class="{ 'bg-slate-500': is_drag }"
      @drag.prevent.stop="is_drag = true"
      @dragend.prevent.stop="is_drag = false"
      @dragover.prevent.stop="is_drag = true"
      @dragenter.prevent.stop="is_drag = false"
      @dragleave.prevent.stop="is_drag = false"
      @dragstart.prevent.stop="is_drag = true"
      @drop.prevent.stop="upload($event)"
    >
      Drop your files here
    </p>
    <input
      type="file"
      class="m-4 text-center border border-slate-100 border-solid"
      multiple
      @change="upload($event)"
    />
  </div>
  <div class="border-t px-6 py-4">
    <div class="my-2" v-for="upload in uploads" :key="upload.name">
      <p :class="upload.text_class">
        <i :class="upload.icon" class="mr-2"></i>{{ upload.name }}
      </p>
      <div class="w-full h-2 bg-slate-300 my-2 rounded-md">
        <div
          class="h-full rounded-l-md"
          :class="[upload.bg_variant]"
          :style="{ width: upload.initial_progress + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { storage, db, auth } from "../includes/firebase";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default {
  name: "Upload",
  data() {
    return {
      is_drag: false,
      uploads: [],
    };
  },
  methods: {
    upload($event) {
      this.is_drag = false;

      const files = $event.dataTransfer
        ? [...$event.dataTransfer.files]
        : [...$event.target.files];

      files.forEach((file) => {
        // vet file
        if (file.type !== "audio/mpeg") {
          return;
        }

        const storageRef = ref(storage);
        const songsRef = ref(storageRef, `songs/${file.name}`);
        const uploadTask = uploadBytesResumable(songsRef, file);

        const uploadIndex =
          this.uploads.push({
            uploadTask,
            initial_progress: 0,
            name: file.name,
            bg_variant: "bg-blue-400",
            icon: "fas fa-spinner fa-spin",
            text_class: "",
          }) - 1;

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.uploads[uploadIndex].initial_progress = progress;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            this.uploads[uploadIndex].bg_variant = "bg-red-500";
            this.uploads[uploadIndex].icon = "fas fa-xmark";
            this.uploads[uploadIndex].text_class = "text-red-500";
            return;
          },
          async () => {
            // adding song details to firestore
            const song = {
              uid: auth.currentUser.uid,
              displayName: auth.currentUser.displayName,
              original_name: uploadTask.snapshot.ref.name,
              modified_name: uploadTask.snapshot.ref.name,
              ccomment_count: 0,
              release_date: "",
              display_picture: "",
              artist: "",
              album: "",
              likes: 0,
              genre: "",
              downloads: 0,
              shares: "",
              comments: "",
              genre: "",
              release_year: "",
            };
            song.url = await getDownloadURL(uploadTask.snapshot.ref);
            // Upload completed successfully, now we can get the download URL

            await addDoc(collection(db, "songsCollection"), song);

            this.uploads[uploadIndex].bg_variant = "bg-green-500";
            this.uploads[uploadIndex].icon = "fas fa-check";
            this.uploads[uploadIndex].text_class = "text-green-500";
          }
        );
      });
    },
  },
  beforeUnmount() {
    this.uploads.forEach((upload) => {
      upload.uploadTask.cancel();
    });
  },
};
</script>
