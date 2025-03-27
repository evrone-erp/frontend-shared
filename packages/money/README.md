# @evrone-erp/money
Функции для произведения вычислений с денежными единицами

## Использование

1. Установите пакет `npm insttall @evrone-erp/money`.
2. Импортируйте нужную функцию в коде `import { ECurrency, Money } from '@evrone-erp/money';`

## Class Money

Базовый класс для работы с денежными единицами. Содержит методы для математических операций и форматирования.
Все методы производят вычисления без округлений и могут быть вызваны по цепочке (кроме метода форматирования).
Форматирование нужно выполнять в самом конце, после выполнения всех вычислений. Во время форматирования происходит
округление до 2-х знаков после запятой. Форматирование может производиться как с валютой, так и без нее.
На данный момент поддерживаются 4 валюты: `rub`, `eur`, `usd`, `cu`.

```tsx
new Money(1250.50, 'usd')
  .sum(50.1) // {currency: 'usd', amount: 1300.6}
  .subtract(100) // {currency: 'usd', amount: 1200.6}
  .multiply(3) // {currency: 'usd', amount: 3601.8}
  .divide(2) // {currency: 'usd', amount: 1800.9} 
  .format()* // 1 800.9 $
```

*метод `format` принимает 2 необязательных аргумента:  
`discardZeroFractal` - отбрасывает дробную часть, если она нулевая `.00`  
`currencySignInFront` - устанавливает знак валюты перед числом `$ 1 800.9`  

## createMoney

Помимо класса, можно использовать функцию `createMoney`, которая вернет экземпляр класса `Money`

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
Возвращает строку из числа, разделенного на группы по 3 знака через пробел   

examples
```tsx
groupNumberString(100000) // 100 000
groupNumberString(12345678.56) // 12 345 678.56
```

[<img src="https://evrone.com/logo/evrone-sponsored-logo.png" width=231>](https://evrone.com/?utm_source=github&utm_medium=evrone-erp-money)
