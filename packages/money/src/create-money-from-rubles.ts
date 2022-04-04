import { Money } from "./money.type";

export function createMoneyFromRubles(rubles: number): Money {
  const precision = 2;
  return {
    amount: rubles * precision,
    sign: "₽",
    precision,
  };
}
