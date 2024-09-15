<template>
  <vee-form @submit="login" :validation-schema="loginSchema">
    <div
      v-show="login_show_alert"
      :class="login_bg_variant"
      class="text-color-white p-2 my-2 text-center"
    >
      {{ login_alert_message }}
    </div>
    <div class="my-2 flex flex-col gap-2">
      <label for="email" class="text-color-text">Email</label>
      <vee-field
        type="email"
        name="email"
        placeholder="Email"
        class="border rounded-md py-1 px-2 border-gray-400"
      />
      <ErrorMessage class="text-red-500" name="email" />
    </div>
    <div class="my-2 flex flex-col gap-2">
      <label for="password" class="text-color-text">Password</label>
      <vee-field
        type="password"
        name="password"
        placeholder="Password"
        class="border rounded-md py-1 px-2 border-gray-400"
      />
      <ErrorMessage class="text-red-500" name="password" />
    </div>
    <button
      type="submit"
      class="flex justify-center w-full my-4 px-8 py-2 bg-color-secondary text-center text-color-white"
    >
      Login
    </button>
  </vee-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginSchema: {
        email: "required|email",
        password: "required|min:8",
      },
      login_in_submission: false,
      login_show_alert: false,
      login_bg_variant: "bg-blue-400",
      login_alert_message: "Login in progress",
    };
  },
  methods: {
    async login(values) {
      this.login_in_submission = true;
      this.login_show_alert = true;
      this.login_bg_variant = "bg-blue-500";
      this.login_alert_message = "Login in progress";
      try {
        await this.$store.dispatch("login", values);
      } catch (error) {
        this.login_in_submission = false;
        this.login_show_alert = true;
        this.login_bg_variant = "bg-red-500";
        this.login_alert_message = `Login not successful - ${error.message}`;
        return;
      }
      this.login_in_submission = false;
      this.login_show_alert = true;
      this.login_bg_variant = "bg-green-500";
      this.login_alert_message = "Login was successful";
      window.location.reload();
    },
  },
};
</script>
