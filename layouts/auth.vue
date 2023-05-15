<template>
  <div class="h-screen flex items-center justify-center">
    <div class="w-full max-w-sm rounded-md border border-gray-200 p-8">
      <icon
        name="material-symbols:contacts-outline"
        class="mb-4 text-indigo-500"
        size="48"
      />
      <p class="text-lg font-black text-indigo-700 mb-4">Contacts Demo App</p>
      <slot />
    </div>
  </div>
</template>
