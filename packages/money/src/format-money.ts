import { Money } from "./money.type";

type FormatOptions = { group?: boolean; endSign?: boolean };

// 10000000 => 10 000 000
const groupNumberString = (numberString: string) =>
  numberString.replace(/(\d)(?=(\d{3})+$)/g, "$1 ");

export function formatMoney(
  money: Money,
  { endSign = true, group = true }: FormatOptions = {}
) {
  let result = Math.round(money.amount / money.precision).toString();

  if (group) {
    result = groupNumberString(result);
  }

  if (endSign) {
    result = `${result} ${money.sign}`;
  }
  return result;
}
