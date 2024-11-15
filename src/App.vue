<script setup lang="ts">
import Facts from "./components/Facts/Facts.vue";
import Language from "./components/language/language.vue";
</script>

<template>
  <div class="bg-slate-700 min-h-svh flex justify-center items-center">
    <div class="flex justify-center gap-x-2 items-start">
      <Facts />
      <Language />
    </div>
  </div>
</template>

<style scoped></style>
