<template>
  <div class="my-8">
    <h4 class="text-xl mb-4 font-semibold">Comments (1200)</h4>
    <div
      v-show="comment_show_alert"
      :class="comment_bg_variant"
      class="text-color-white p-2 my-2 text-center"
    >
      {{ comment_alert_message }}
    </div>
    <vee-form
      class="flex flex-col gap-4"
      @submit="addComment"
      v-if="userLoggedIn"
    >
      <vee-field
        as="textarea"
        cols="4"
        rows="6"
        class="bg-color-white p-4 text-md"
        name="comment"
        placeholder="please share your thoughts"
        :rules="'required'"
      >
      </vee-field>
      <ErrorMessage class="text-red-500" name="comment" />
      <div class="">
        <button
          class="flex bg-color-secondary rounded-lg py-2 px-8 ml-auto"
          :disabled="comment_in_submission"
        >
          Comment
        </button>
      </div>
    </vee-form>
    <!-- All Comments -->
    <div class="my-4">
      <div>
        <div class="flex items-start gap-8 my-4">
          <img
            src="../assets/img/Artboard-30.png"
            alt=""
            class="rounded-full w-8 h-8"
          />
          <div>
            <h1 class="font-semibold">Emiloju Benjamin</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              et corrupti qui! Libero odit odio assumenda repudiandae aliquid.
            </p>
            <small>2022-11-26</small>
            <div class="flex gap-4 my-2">
              <i class="fas fa-like"></i>
              <i class="fas fa-dislike"></i>
            </div>
          </div>
        </div>
        <div class="ml-8">
          <div class="flex items-start gap-8 my-4">
            <img
              src="../assets/img/Artboard-30.png"
              alt=""
              class="rounded-full w-8 h-8"
            />
            <div>
              <h1 class="font-semibold">Emiloju Benjamin</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                et corrupti qui! Libero odit odio assumenda repudiandae aliquid.
              </p>
              <small>2022-11-26</small>
              <div class="flex gap-4 my-2">
                <i class="fas fa-like"></i>
                <i class="fas fa-dislike"></i>
                <i class="fas fa-comment"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-start gap-8 my-4">
        <img
          src="../assets/img/Artboard-3.png"
          alt=""
          class="rounded-full w-8 h-8"
        />
        <div>
          <h1 class="font-semibold">Gbenga Yomi</h1>
          <p>
            Dolor sit amet consectetur adipisicing elit. Itaque et corrupti qui!
            Libero odit odio assumenda repudiandae aliquid.
          </p>
          <small>2022-11-26</small>
          <div class="flex gap-4 my-2">
            <i class="fas fa-like"></i>
            <i class="fas fa-dislike"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../includes/firebase";

export default {
  name: "Comments",
  async created() {
    this.getComments();
  },
  computed: {
    ...mapState(["userLoggedIn"]),
  },
  data() {
    return {
      comment_in_submission: false,
      comment_show_alert: false,
      comment_bg_variant: "bg-blue-400",
      comment_alert_message: "comment in progress",
      comments: [],
    };
  },
  methods: {
    async addComment(values, context) {
      this.comment_in_submission = true;
      this.comment_show_alert = true;
      this.comment_bg_variant = "bg-blue-500";
      this.comment_alert_message = "comment in progress";

      const comment = {
        content: values.comment,
        datePosted: new Date().toString(),
        sid: this.$route.params.id,
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid,
      };
      try {
        await this.$store.dispatch("comment", comment);
      } catch (error) {
        this.comment_in_submission = false;
        this.comment_show_alert = true;
        this.comment_bg_variant = "bg-red-500";
        this.comment_alert_message = `comment not successful - ${error.message}`;
        return;
      }

      this.getComments();
      this.comment_in_submission = false;
      this.comment_show_alert = true;
      this.comment_bg_variant = "bg-green-500";
      this.comment_alert_message = "comment was successful";

      context.resetForm();
    },
    async getComments() {
      const q = query(
        collection(db, "comment"),
        where("sid", "==", this.$route.params.id)
      );

      this.comments = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.comments.push({
          docID: doc.id,
          ...doc.data(),
        });
      });
    },
  },
};
</script>

<style></style>
