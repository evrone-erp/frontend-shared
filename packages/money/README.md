# Money

is library to work with money

*Built using [tsdx](https://tsdx.io/)*

## Money type

```ts
export type Money = {
  sign: string; // Currency sign example ₽
  precision: number
  amount: number; // integer number of currency units with object precision
};
```

## createMoneyFromRubles

create `Money` object from rubles amount.
Adds `sing` ₽, and set `precision` to 2 

## formatMoney
returns a string representation of the money object

examples
```tsx
formatMoney({ amount: 100000, precision: 2, sing:'₽' }) // 1 000 ₽
formatMoney({ amount: 10000000, precision: 2, sing:'₽' }) // 1 000 000 ₽
formatMoney({ amount: 10000000, precision: 2, sing:'₽' }, { endSign: false }) // 1 000 000
formatMoney({ amount: 10000000, precision: 2, sing:'₽' }, { endSign: false, group: false }) // 1000000
```

