<script lang="ts" setup>
import { useLanguageStore } from "@/stores/language";
import { ref } from "vue";

const store = useLanguageStore();

const isOpen = ref(false);

const selectLanguage = (code: string) => {
  store.setLanguage(code);
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="relative inline-block text-left">
    <button
      @click="isOpen = !isOpen"
      class="inline-flex items-center justify-between w-[120px] px-3 py-2 text-sm bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
    >
      <span class="text-sm">
        {{ $t(store.language.name) }}
      </span>
      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div v-if="isOpen" class="absolute z-10 w-[120px] mt-1 bg-white border rounded-md shadow-lg">
      <div class="py-1">
        <button
          v-for="language in store.languages"
          :key="language.code"
          @click="selectLanguage(language.code)"
          :class="{
            'bg-blue-500 text-white': language.code === store.language.code,
            'hover:bg-gray-100': language.code !== store.language.code,
          }"
          class="block w-full px-3 py-2 text-sm text-left"
        >
          {{ $t(language.name) }}
        </button>
      </div>
    </div>
  </div>
</template>
