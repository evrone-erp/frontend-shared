import { CURRENCY_UI_PROPS, ECurrency } from "./currency";
import { groupNumberString } from "./group-number-string";

const FLOAT_MODIFIER = 100;

export class Money {
  currency?: ECurrency;

  amount: number;

  constructor(amount: number | string, currency?: ECurrency) {
    this.currency = currency;
    this.amount = +amount;
  }

  sum(term: number) {
    return this.action(term, 'sum');
  }

  subtract(deductible: number) {
    return this.action(deductible, 'subtract');
  }

  multiply(multiplier: number) {
    this.amount = this.amount * multiplier;
    return this;
  }

  divide(divider: number) {
    this.amount = this.amount / divider;
    return this;
  }

  format(discardZeroFractal?: boolean) {
    const currencySign = this.currency ? ` ${CURRENCY_UI_PROPS[this.currency]?.sign}` : '';
    const amount = String(this.amount.toFixed(2));
    const parsedAmount = discardZeroFractal ? parseFloat(amount) : amount;
    return `${groupNumberString(parsedAmount)}${currencySign}`;
  }

  private action(arg: number, action: string) {
    const preparedAmount = this.amount * FLOAT_MODIFIER;
    const preparedArg = arg * FLOAT_MODIFIER;
    let result = 0;

    switch (action) {
      case 'sum': {
        result = preparedAmount + preparedArg;
        break;
      }
      case 'subtract': {
        result = preparedAmount - preparedArg;
        break;
      }
    }
    this.amount = result / FLOAT_MODIFIER;
    return this;
  }
}

export const createMoney = (amount: number | string, currency?: ECurrency) => new Money(amount, currency);
