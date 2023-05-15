<template>
  <form
    class="space-y-3"
    @submit="(e) => e.preventDefault()"
    @keyup.enter="onClickSignIn"
  >
    <input
      v-model="username"
      class="w-full px-3 py-2 bg-white border border-gray-300 focus:border-indigo-600 rounded placeholder:text-gray-600"
      placeholder="Username"
    />

    <input
      v-model="password"
      type="password"
      class="w-full px-3 py-2 bg-white border border-gray-300 focus:border-indigo-600 rounded placeholder:text-gray-600"
      placeholder="Password"
    />

    <button
      @click="onClickSignIn"
      class="w-full bg-indigo-600 hover:bg-indigo-700 px-3 py-2 text-lg rounded-md text-white"
    >
      Sign In
    </button>

    <p
      v-if="errorMessage"
      class="p-4 bg-red-100 border border-red-600 rounded-md text-red-600"
    >
      {{ errorMessage }}
    </p>
  </form>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

const { signIn } = useAuth();
const { $zod, $parseDataAs } = useNuxtApp();

const errorMessage = ref("");
const username = ref("");
const password = ref("");

const onClickSignIn = async function () {
  errorMessage.value = "";
  try {
    const userData = { username: username.value, password: password.value };
    const parseData = await $parseDataAs(
      userData,
      $zod.object({ username: $zod.string().min(1), password: $zod.string().min(6) })
    );

    await signIn({ ...userData, redirect: false });
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>
