import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useI18n } from "vue-i18n-composable";

export const useLanguageStore = defineStore("language", () => {
  const { locale } = useI18n();

  const languages = ref([
    {
      code: "en",
      name: "language_en",
      dir: "ltr",
      font: "font-sans",
    },
    {
      code: "ar",
      name: "language_ar",
      dir: "rtl",
      font: "font-arabic",
    },
  ]);

  const getLanguage = computed(() => {
    const code = localStorage.getItem("language");
    const language = languages.value.find((lang) => lang.code === code) || languages.value[0];
    return language;
  });

  const language = ref(getLanguage.value);

  function setLanguage(code: string) {
    language.value = languages.value.find((lang) => lang.code === code) || languages.value[0];
    document.documentElement.lang = language.value.code;
    document.documentElement.dir = language.value.dir;
    document.body.className = language.value.font;
    localStorage.setItem("language", language.value.code);
    locale.value = language.value.code;
  }

  return {
    language,
    languages,
    setLanguage,
    getLanguage,
  };
});
