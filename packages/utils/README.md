## @evrone-erp/utils

Package for sharing utils between projects

`wrapTextLinksInTags` - find urls in text and wrap them in `a` tags

example
```
wrapTextLinksInTags('some text before https://tracker.yandex.ru/BK-227 text after') => 

'some text before <a href="https://tracker.yandex.ru/BK-227" target="_blank">https://tracker.yandex.ru/BK-227</a> text after'
```
