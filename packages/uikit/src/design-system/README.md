
# Design system  

Module for creating and working with a mui design system.

*Built using [tsdx](https://tsdx.io/)*

## interface

- `ColorName`: type of color name from `design-tokens`
- `TypographyName`: type of typography name from `design-tokens`
- `Sx`: type of mui sx prop
- `ThemeKey`: Theme variants type
- `Breakpoint`: Breakpoints variants type
- `mergeSx`: helps to merge values with `Sx` type
- `addSxProp`: add sx prop to `JSX.Element` 
- `createTheme`: function which create `mui` theme
- `Baseline`:  component with add global styles


### addSxProp

This feature helps layout components add styles to passed elements without using the render prop pattern.
**Do not use this function in other cases. Implicit relationships can cause strange bugs** 

Example
```tsx
type OtherLayoutProps = {
  sx?: Sx;
  history: JSX.Element;
  events: JSX.Element;
};

export function OtherLayout({ sx, events, history }: OtherLayoutProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateAreas: {
          mob: `
            "history"
            "events"
          `,
          tab: `
            "history events"
          `,
        },
      }}
    >
      {addSxProp(history, { gridArea: "history" })}
      {addSxProp(events, { gridArea: "events" })}
    </Box>
  );
}
```


