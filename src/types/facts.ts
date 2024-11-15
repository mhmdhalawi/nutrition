import response from "@/data/response.json";

export type Unit = {
  id?: number;
  name?: string;
  name_ar?: string;
  grams?: string;
};

export type DailyValue = {
  [key in keyof typeof response.label.daily_value]: number;
};

export type Servings = {
  [key in keyof typeof response.label.serving]: (typeof response.label.serving)[key];
};

export type Key = keyof typeof response.label.serving;
export type Serving = (typeof response.label.serving)[Key];
