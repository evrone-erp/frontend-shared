# @evrone-erp/react-std
Библиотека часто используемых в `react`-коде функций


## Использование

1. Установите пакет `yarn add @evrone-erp/react-std`.
2. Импортируйте нужные компоненты в коде. `import { CookiesProvider } from '@evrone-erp/react-std';`

## bindProps
Возвращает новый компонент и сохраняет переданные свойства в замыкании, помогает создавать компоненты с простым интерфейсом.

```tsx
type ButtonProps = {
  color: string;
  children?: ReactNode;
};

const Button = ({ color, children }:ButtonProps) => { 
  return (
   <button style={{ color }}>{children}</button>
  )
}

const DangerButton = bindProps(Button, {
  color: 'red'
})
const PrimaryButton = bindProps(Button, {
  color: 'blue'
})

<PrimaryButton>Update</PrimaryButton>
<DangerButton>Delete</DangerButton>
```

Вы не можете переопределить привязанные свойства, за исключением `sx` и `className`. 

`bindProps` объединяет `sx` используя `mergeSx` и `className` используя пакет `classnames`

## ComposeProviders
Функция объединения контекстов

```tsx
<ComposeProviders
  providers={[
    <Provider1 key="1" />,
    <Provider2 key="2" />,
    <Provider3 key="3" />,
  ]}
>
  <Content />
</ComposeProviders>
```

## useBooleanState
Помогает избежать шаблонного кода

```tsx
const openModal = useBooleanState(false)


<Button onClick={openModal.setTrue}>Open</Button>
<Modal open={openModal.is} onClose={openModal.setTrue}>
 ...
</Modal>
```

## useDebounceValue
Хук для отложенного изменения переданного значения

```tsx
const [input, setInput] = useState('')
// debouncedInput изменится когда инпут не будет изменяться в течение 500ms
const debouncedInput = useDebounceValue(input, 500)

useEffect(() => {
  searchApi(debouncedInput)
}, [debouncedInput])
```

## useGetRef

```tsx
const getRef = useGetRef<string>();

const ref1 = getRef('key')
const ref2 = getRef('key')
const ref3 = getRef('key2')

ref1 === ref2 // true
ref3 !== ref2 // false
```

Обычно используется для обработки списка ссылок.
```tsx
const keys = ['key1', 'key2', 'key3'];
const getRef = useGetRef<HTMLDivElement>();

useEffect(() => {
  const elements = keys.map(getRef);
  elements // [<div>key1</div>, <div>key2</div>, <div>key3</div>];
},[getRef])

return keys.map(key => <div ref={getRef(key)}>{key}</div>);
```

## useLocalStorage
Этот хук помогает работать с localStorage.
Интерфейс результата `useLocalStorage` такой же, как `useState`, но initialState устанавливается из localStorage.

## useCookie
Унифицирует работу с куками

При использовании useCookie на сервере, следует передать куки из App.getInitialProps. (ломает SSG)
```tsx
export function App({
  Component,
  pageProps,
  serverCookie,
}: MyAppProps) {
  return (
    <ComposeProviders
      providers={[
        <CookiesProvider key="CookiesProvider" serverCookies={serverCookie} />,
        ...
      ]}
    >
      <Component {...pageProps} />
    </ComposeProviders>
  );
}
```

```ts
  const [themeType, setThemeType] = useCookie<ThemeKey>("themeType");
```

**Возможность установки куки на стороне сервера отсутствует**

[<img src="https://evrone.com/logo/evrone-sponsored-logo.png" width=231>](https://evrone.com/?utm_source=github&utm_medium=evrone-erp-react-std)
