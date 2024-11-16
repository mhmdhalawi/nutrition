import response from "@/data/response.json";

type DailyValueKey = keyof typeof response.label.daily_value | string;

export type DailyValue = {
  [key in DailyValueKey]?: number;
};

export type Servings = {
  [key in keyof typeof response.label.serving]: (typeof response.label.serving)[key];
};

export type Key = keyof typeof response.label.serving;
export type Serving = (typeof response.label.serving)[Key];
