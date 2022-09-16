<template>
  <vee-form @submit="login" :validation-schema="loginSchema">
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
    };
  },
  methods: {
    login(values) {
      console.log(values);
    },
  },
};
</script>
