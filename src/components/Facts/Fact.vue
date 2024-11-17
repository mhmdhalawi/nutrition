<script setup lang="ts">
import { ref } from "vue";

import type { Serving } from "@/types/facts";
import useLanguageKey from "@/composables/use-language-key";

const { key } = useLanguageKey();

defineProps<{
  dailyValue?: number;
  serving: Serving;
}>();

const show = ref(true);

const handleChecked = (event: Event) => {
  const target = event.target as HTMLInputElement;
  show.value = target.checked;
};
</script>

<template>
  <div class="border-b border-black py-0.5 last:border-none">
    <input
      type="checkbox"
      :checked="show"
      :id="`${serving.id}`"
      class="hidden"
      @change="handleChecked"
    />
    <label
      :for="`${serving.id}`"
      class="flex justify-between font-black cursor-pointer"
      :class="{
        'ps-4 font-normal': serving.indentations === 1,
        'ps-8 font-normal': serving.indentations === 2,
      }"
    >
      <template v-if="show">
        <p>
          {{ serving[key] }}
          <span class="font-normal"
            >{{ Math.round(serving.value) }} {{ serving.unit ? serving.unit.name : "g" }}</span
          >
        </p>
        <span
          class="font-black"
          :class="{
            'font-normal': serving.section !== 0,
          }"
          >{{ dailyValue ? Math.round(dailyValue) : Math.round(serving.daily_value) }}%</span
        >
      </template>
      <template v-else>
        <p>&nbsp;</p>
      </template>
    </label>
  </div>
</template>
