import React from "react";

/*
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mergeProps = (props1: any, props2: any): any => {
};
 */

type MergeProps<MergeObject extends Record<string, unknown>> = (
  props1: MergeObject,
  props2: MergeObject
) => {};

export function createBindProps<MergeObject extends Record<string, unknown>>(
  mergeProps: MergeProps<MergeObject>
) {
  return function bindProps<Props, BoundKeys extends keyof Props>(
    Component: React.ComponentType<Props>,
    boundProps: { [K in BoundKeys]: Props[K] } & { children?: React.ReactNode },
    newName?: string
  ) {
    const BindedComponent: React.FC<
      Omit<Props, Exclude<BoundKeys, keyof MergeObject>>
    > = React.forwardRef((props, ref) => {
      const newProps = mergeProps(
        boundProps as MergeObject,
        props as MergeObject
      ) as Props;

      return <Component {...newProps} ref={ref} />;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as any;
    BindedComponent.displayName =
      newName ?? Component.displayName ?? Component.name;
    BindedComponent.defaultProps = Component.defaultProps;
    BindedComponent.contextTypes = Component.contextTypes;
    return BindedComponent;
  };
}

export const bindProps = createBindProps((p1: {}, p2: {}) => ({
  ...p1,
  ...p2,
}));
