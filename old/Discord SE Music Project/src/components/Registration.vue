<template>
  <VeeForm
    @submit="register"
    :validation-schema="registrationSchema"
    :initial-values="userData"
  >
    <div
      v-show="reg_show_alert"
      :class="reg_bg_variant"
      class="text-color-white p-2 my-2 text-center"
    >
      {{ reg_alert_message }}
    </div>
    <div class="my-2 flex flex-col gap-2">
      <label for="email" class="text-color-text">Email</label>
      <vee-field
        type="email"
        name="email"
        placeholder="Email"
        class="border rounded-md py-1 px-2 border-gray-400"
      />
      <ErrorMessage name="email" class="text-red-400" />
    </div>
    <div class="my-2 flex flex-col gap-2">
      <label for="password" class="text-color-text">Password</label>
      <vee-field
        type="password"
        name="password"
        placeholder=""
        class="border rounded-md py-1 border-gray-400"
      />
      <ErrorMessage name="password" class="text-red-400" />
    </div>
    <div class="my-2 flex flex-col gap-2">
      <label for="confirmPassword" class="text-color-text"
        >Confirm Password</label
      >
      <vee-field
        type="password"
        name="confirm_password"
        placeholder="confirm password"
        class="border rounded-md py-1 border-gray-400"
      />
      <ErrorMessage name="confirm_password" class="text-red-400" />
    </div>
    <div class="my-4 flex flex-col gap-2">
      <label for="age">Age</label>
      <vee-field
        type="number"
        name="age"
        placeholder="age"
        class="border rounded-md py-1 px-2 border-gray-400"
      />
      <ErrorMessage name="age" class="text-red-400" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="country">Country</label>
      <vee-field
        as="select"
        name="country"
        class="border rounded-md py-1 px-2 border-gray-400"
      >
        <option selected>Choose...</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Egypt">Egypt</option>
        <option value="South-Africa">South Africa</option>
        <option value="Ethiopia">Ethiopia</option>
      </vee-field>
      <ErrorMessage name="country" class="text-red-400" />
    </div>
    <div class="my-2">
      <vee-field type="checkbox" name="human" value="1" />
      <label for="human"> I am not a robot </label>
      <ErrorMessage name="human" class="text-red-400" />
    </div>
    <button
      type="submit"
      class="flex justify-center w-full my-4 px-8 py-2 bg-color-secondary text-center text-color-white"
      :disabled="reg_in_submission"
    >
      Create Account
    </button>
  </VeeForm>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Registration",
  data() {
    return {
      registrationSchema: {
        email: "required|min:5|email",
        password: "required|min:8|max:100",
        confirm_password: "password_mismatch:@password",
        age: "required|min_value:18|max_value:70",
        country: "required",
        human: "required",
      },
      userData: {
        country: "Nigeria",
      },

      reg_in_submission: false,
      reg_show_alert: false,
      reg_bg_variant: "bg-blue-400",
      reg_alert_message: "Registration in progress",
    };
  },
  methods: {
    ...mapMutations(["toggleUserLoggedIn"]),

    async register(values) {
      this.reg_in_submission = true;
      this.reg_show_alert = true;
      this.reg_bg_variant = "bg-blue-500";
      this.reg_alert_message = "Registration in progress";

      try {
        await this.$store.dispatch("register", values);
      } catch (error) {
        this.reg_in_submission = false;
        this.reg_show_alert = true;
        this.reg_bg_variant = "bg-red-500";
        this.reg_alert_message = `Registration not successful - ${error.message}`;
        return;
      }
      this.reg_in_submission = false;
      this.reg_show_alert = true;
      this.reg_bg_variant = "bg-green-500";
      this.reg_alert_message = "Registration was successful";
    },
  },
};
</script>

<style></style>
