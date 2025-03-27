## @evrone-erp/utils
Пакет для хранения вспомогательных ts функций

## Использование

1. Установите пакет `yarn add @evrone-erp/utils`.
2. Импортируйте нужные функции в коде `import { wrapTextLinksInTags } from '@evrone-erp/utils';`

## Содержание

- `wrapTextLinksInTags`
Находит в строке ссылки и оборачивает их тегами `a`

```js
wrapTextLinksInTags('some text before https://tracker.yandex.ru/BK-227 text after') => 

'some text before <a href="https://tracker.yandex.ru/BK-227" target="_blank">https://tracker.yandex.ru/BK-227</a> text after'
```

[<img src="https://evrone.com/logo/evrone-sponsored-logo.png" width=231>](https://evrone.com/?utm_source=github&utm_medium=evrone-erp-utils)
