export type SortOption = "price_asc" | "price_desc" | "rating_asc" | "rating_desc" | "";

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
   { value: "price_asc", label: "сначала недорогие" },
   { value: "price_desc", label: "сначала дорогие" },
   { value: "rating_asc", label: "сначала с худшей оценкой" },
   { value: "rating_desc", label: "сначала с лучшей оценкой" },
] as const;