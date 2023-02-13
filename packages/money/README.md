# Money

is library to work with money

*Built using [tsdx](https://tsdx.io/)*

## Money class

Base class for work with money. Contains methods for mathematical operations with money and formatting.
All methods can be chained except format (do all operations before use format)
All methods calculate amount without rounding for greater accuracy.
Amount rounds only when use format

examples
```tsx
const money = createMoney(10000.50, 'rub')
money
  .sum(2000.1) // {currency: 'rub', amount: 12000.6}
  .subtract(100) // {currency: 'rub', amount: 11900.6}
  .multiply(2) // {currency: 'rub', amount: 23801.2}
  .divide(3) // {currency: 'rub', amount: 7933.733333333334} 
  .format() // 7 933.73 ₽
```

## groupNumberString
returns string with number groups separated by spaces 

examples
```tsx
groupNumberString(100000) // 100 000
groupNumberString(12345678.56) // 12 345 678.56
```

