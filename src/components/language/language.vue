<script lang="ts" setup>
import { useLanguageStore } from "@/stores/language";
import { ref } from "vue";
import { watch } from "vue";

const languageStore = useLanguageStore();

const language = ref(languageStore.language);

watch(language, (newCode) => {
  languageStore.setLanguage(newCode);
});
</script>

<template>
  <div class="flex justify-center items-center">
    <select v-model="language" class="p-2 border border-black rounded-md">
      <option value="en">{{ $t("language_en") }}</option>
      <option value="ar">{{ $t("language_ar") }}</option>
    </select>
  </div>
</template>
