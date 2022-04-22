export const Currencies = {
  RUB: "₽",
  USD: "$",
  EUR: "€",
} as const;

export type Currency = keyof typeof Currencies;
