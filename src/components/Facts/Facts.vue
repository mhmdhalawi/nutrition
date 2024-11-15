<script lang="ts" setup>
import { computed } from "vue";
import response from "@/data/response.json";
import useLanguageKey from "@/composables/use-language-key";
import Fact from "./Fact.vue";

import type { Serving, Key } from "@/types/facts";

const { key } = useLanguageKey();

const amounts = computed(() => response.label.amounts);
const dailyValues = computed(() => response.label.daily_value as any);

const servings = computed<Serving[]>(() => {
  return Object.keys(response.label.serving)
    .map((key) => response.label.serving[key as Key])
    .filter((serving) => serving.enabled === 1 && serving.name !== "Calories")
    .sort((a, b) => {
      // First, compare by `section`
      if (a.section !== b.section) {
        return a.section - b.section;
      }
      // If `section` is the same, compare by `order`
      return a.order - b.order;
    });
});

const sections = computed(() => {
  const sectionMap = new Map<number, Serving[]>();
  servings.value.forEach((serving) => {
    if (!sectionMap.has(serving.section)) {
      sectionMap.set(serving.section, []);
    }
    sectionMap.get(serving.section)?.push(serving);
  });

  return Array.from(sectionMap.values());
});
</script>

<template>
  <div class="max-w-64 border border-black p-1.5 bg-white text-[10px]">
    <div class="border border-black p-2">
      <h1 class="text-2xl font-black mb-1 border-b border-black">{{ $t("nutrition_facts") }}</h1>
      <div class="border-b-[16px] border-black text-md font-black">
        <p class="font-normal text-sm -mb-2">
          {{ amounts.number_of_servings }} {{ $t("servings_per_container") }}
        </p>
        <div class="flex justify-between items-baseline">
          <span class="text-sm">{{ $t("serving_size") }}</span>
          <span class="text-lg"> {{ amounts.serving }}g</span>
        </div>
      </div>

      <div class="border-b-8 border-black py-0.5 font-black">
        <div class="text-sm -mb-3">{{ $t("amount_per_serving") }}</div>
        <div class="flex justify-between items-baseline">
          <span class="text-xl">{{ response.label.serving.Calories[key] }}</span>
          <span class="text-3xl">{{ Math.round(response.label.serving.Calories.value) }}</span>
        </div>
      </div>

      <div class="text-right border-b border-black py-0.5 font-bold">{{ $t("daily_value") }}</div>

      <div>
        <div
          class="border-b-8 border-black py-0.5"
          v-for="(section, index) in sections"
          :key="index"
        >
          <Fact
            v-for="serving in section"
            :key="serving.id"
            :serving="serving"
            :daily-value="dailyValues[serving.name]"
          />
        </div>
      </div>

      <!-- Footnote -->
      <p class="leading-tight mt-1">
        {{ $t("disclaimer") }}
      </p>
    </div>
  </div>
</template>
