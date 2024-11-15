export interface LocalizedObject {
  name: string;
  name_ar?: string;
  name_es?: string;
  name_fr?: string;
}

export type LanguageMapping = Record<string, keyof LocalizedObject>;
