<template>
  <vee-form
    @submit="register"
    :validation-schema="registrationSchema"
    :initial-values="countryData"
  >
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
        placeholder=""
        class="border rounded-md py-1 border-gray-400"
      />
      <ErrorMessage class="text-red-500" name="password" />
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
      <ErrorMessage class="text-red-500" name="confirm_password" />
    </div>
    <div class="my-4 flex flex-col gap-2">
      <label for="age">Age</label>
      <vee-field
        type="number"
        name="age"
        placeholder="age"
        class="border rounded-md py-1 px-2 border-gray-400"
      />
      <ErrorMessage class="text-red-500" name="age" />
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
      <ErrorMessage class="text-red-500" name="country" />
    </div>
    <div class="my-2">
      <vee-field type="checkbox" name="human" value="1" />
      <label for="human"> I am not a robot </label>
      <ErrorMessage class="text-red-500" name="human" />
    </div>
    <button
      type="submit"
      class="flex justify-center w-full my-4 px-8 py-2 bg-color-secondary text-center text-color-white"
    >
      Create Account
    </button>
  </vee-form>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      registrationSchema: {
        email: "required|min:5|email",
        password: "required",
        confirm_password: "password_mismatch:@password",
        age: "required|min_value:18|max_value:70",
        country: "required",
        human: "required",
      },
      countryData: {
        country: "Nigeria",
      },
    };
  },
  methods: {
    register(values) {
      console.log(values);
    },
  },
};
</script>

<style></style>
