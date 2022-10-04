<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-color-gray-deep z-30 overflow-y-scroll"
    :class="{ hidden: !authModal }"
  >
    <div
      class="w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 mx-auto mt-8 rounded-lg py-2 px-8 bg-color-light-bg"
    >
      <div class="w-full flex gap-2 my-2 items-center justify-between">
        <h1 class="text-xl font-semibold">Your Account</h1>
        <i class="fas fa-xmark" @click.prevent="toggleAuthModal"></i>
      </div>
      <div class="w-full flex gap-2">
        <button
          class="basis-1/2 px-10 py-2 rounded-md"
          :class="{
            'bg-color-secondary text-color-white': authTab === 'Login',
          }"
          @click.prevent="authTab = 'Login'"
        >
          Log in
        </button>
        <button
          class="basis-1/2 px-10 py-2 rounded-md"
          :class="{
            'bg-color-secondary text-color-white': authTab === 'Register',
          }"
          @click.prevent="authTab = 'Register'"
        >
          Register
        </button>
      </div>
      <!-- sign-up form -->
      <app-registration v-show="authTab === 'Register'" />

      <!-- Login form -->
      <app-login v-show="authTab === 'Login'" />
    </div>
  </div>
</template>

<script>
import AppRegistration from "./Registration.vue";
import AppLogin from "./Login.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "Authentication",
  components: {
    AppRegistration,
    AppLogin,
  },
  data() {
    return {
      authTab: "Login",
    };
  },
  computed: {
    ...mapState(["authModal"]),
  },
  methods: {
    ...mapMutations(["toggleAuthModal"]),
  },
};
</script>

<style></style>
