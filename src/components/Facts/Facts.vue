<script lang="ts" setup>
import response from "@/data/response.json";
import { useI18n } from "vue-i18n-composable";
import { ref, computed } from "vue";
import type { LanguageMapping } from "@/types/language";

const languageMapping = ref<LanguageMapping>({
  en: "name",
  ar: "name_ar",
  es: "name_es",
  fr: "name_fr",
});

const key = computed(() => languageMapping.value[locale.value]);

const { locale } = useI18n();

const amounts = computed(() => response.label.amounts);
const dailyValues = computed(() => response.label.daily_value);
const servings = computed(() => response.label.serving);

console.log(servings.value);
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
          <span class="text-xl">{{ servings.Calories[key] }}</span>
          <span class="text-3xl">{{ Math.round(servings.Calories.value) }}</span>
        </div>
      </div>

      <div class="text-right border-b border-black py-0.5 font-bold">{{ $t("daily_value") }}</div>

      <div class="">
        <!-- Total Fat -->
        <div class="flex justify-between border-b border-black py-0.5 font-black">
          <span>Total Fat <span class="font-normal">94g</span></span>
          <span>121%</span>
        </div>

        <!-- Saturated Fat -->
        <div class="flex justify-between border-b border-black ps-4 py-0.5">
          <span>Saturated Fat 36g</span>
          <span class="font-black">181%</span>
        </div>

        <!-- Trans Fat -->
        <div class="flex justify-between border-b border-black ps-4 py-0.5 italic">
          <span>Trans Fat 0g</span>
          <span class="font-black not-italic">0%</span>
        </div>

        <!-- Cholesterol -->
        <div class="flex justify-between border-b border-black py-0.5">
          <span class="font-black">Cholesterol <span class="font-normal">35mg</span></span>
          <span class="font-black">11%</span>
        </div>

        <!-- Sodium -->
        <div class="flex justify-between border-b border-black py-0.5">
          <span class="font-black">Sodium <span class="font-normal">150mg</span></span>
          <span class="font-black">6%</span>
        </div>

        <!-- Total Carbohydrates -->
        <div class="flex justify-between border-b border-black py-0.5">
          <span class="font-black">Total Carbohydrates <span class="font-normal">23g</span></span>
          <span class="font-black">8%</span>
        </div>

        <!-- Dietary Fiber -->
        <div class="flex justify-between border-b border-black ps-4 py-0.5">
          <span>Dietary Fiber 2g</span>
          <span class="font-black">7%</span>
        </div>

        <!-- Total Sugars -->
        <div class="border-b border-black ps-4 py-0.5">
          <div class="flex justify-between border-b border-black">
            <span>Total Sugars 18g</span>
          </div>
          <div class="flex justify-between ps-4 pt-0.5">
            <span>Includes 0g Added Sugars</span>
            <span class="font-black">0%</span>
          </div>
        </div>

        <!-- Protein -->
        <div class="flex justify-between border-b-8 border-black py-0.5">
          <span class="font-black">Protein <span class="font-normal">27g</span></span>
        </div>

        <!-- Vitamins and Minerals -->
        <div class="">
          <div class="flex justify-between border-b border-black py-0.5">
            <span>Vitamin D 0.3mg</span>
            <span>2%</span>
          </div>
          <div class="flex justify-between border-b border-black py-0.5">
            <span>Iron 3.6mg</span>
            <span>20%</span>
          </div>
          <div class="flex justify-between border-b-8 border-black py-0.5">
            <span>Potassium 1060mg</span>
            <span>25%</span>
          </div>
        </div>
      </div>

      <!-- Footnote -->
      <p class="leading-tight mt-1">
        {{ $t("disclaimer") }}
      </p>
    </div>
  </div>
</template>
