import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useI18n } from "vue-i18n-composable";

export const useLanguageStore = defineStore("language", () => {
  const { locale } = useI18n();

  const languages = ref([
    {
      code: "en",
      dir: "ltr",
      font: "font-sans",
    },
    {
      code: "ar",
      dir: "rtl",
      font: "font-arabic",
    },
  ]);

  const getLanguage = computed(() => {
    const code = localStorage.getItem("language");
    const language = languages.value.find((lang) => lang.code === code) || languages.value[0];
    return language;
  });

  const language = ref(getLanguage.value.code);

  function setLanguage(language: string) {
    const lang = languages.value.find((lang) => lang.code === language) || languages.value[0];
    document.documentElement.lang = lang.code;
    document.documentElement.dir = lang.dir;
    document.body.className = lang.font;
    localStorage.setItem("language", lang.code);
    locale.value = lang.code;
  }

  return {
    language,
    languages,
    setLanguage,
  };
});
