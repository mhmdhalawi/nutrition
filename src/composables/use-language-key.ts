import { languageMapping } from "@/utils/language";
import { computed } from "vue";
import { useI18n } from "vue-i18n-composable";

export default function useLanguageKey() {
  const { locale } = useI18n();
  const key = computed(() => languageMapping[locale.value]);

  return {
    key,
  };
}
