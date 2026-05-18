export type SortOption = "price_asc" | "price_desc" | "rating" | "";

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
   { value: "price_asc", label: "Сначала недорогие" },
   { value: "price_desc", label: "Сначала дорогие" },
   { value: "rating", label: "По рейтингу" },
] as const;