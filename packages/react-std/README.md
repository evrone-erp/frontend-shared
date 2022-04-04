# React std 

react-std is library of commonly used components in react code

*Built using [tsdx](https://tsdx.io/)*

## bindProps 

it Returns new component and saves passed props in closure, it helps to create components with simple interface

Excemple
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

You can't override bound props, except `sx` and `className`. 

bindProps merge `sx` props using `mergeSx` helper, and
`className` props using `classnames` package


## ComposeProviders

This Component helps to flat code with Context providers 
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

This hook helps to reduce boilerplate when you are working with boolean state
```tsx
const openModal = useBooleanState(false)


<Button onClick={openModal.setTrue}>Open</Button>
<Modal open={openModal.is} onClose={openModal.setTrue}>
 ...
</Modal>
```

## useDebounceValue

This hook delays value change
```tsx
const [input, setInput] = useState('')
// debouncedInput changes when input has not changed for 500ms
const debouncedInput = useDebounceValue(input, 500)

useEffect(() => {
  searchApi(debouncedInput)
}, [debouncedInput])
```

## useGetRef

This hook helps to work with refs map. 

```tsx
const getRef = useGetRef<string>();

const ref1 = getRef('key')
const ref2 = getRef('key')
const ref3 = getRef('key2')

ref1 === ref2 // true
ref3 !== ref2 // false
```

It's often using for refs list processing
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

This hook helps to work with localStorage. `useLocalStorage` result interface is the same as `useState`, 
but initialState sets from localStorage.

## useCookie

Since localStorage is only available on the client. If you want you global value on SSR you only can use cookie.

`useCookie` - it helps to unify the work with cookies.

if you want you use useCookie on server, you should provide server cookies from  App.getInitialProps. (it breaks SSG)
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

useCookie example

```ts
  const [themeType, setThemeType] = useCookie<ThemeKey>("themeType");
```

**You can not set cookie on server side**

