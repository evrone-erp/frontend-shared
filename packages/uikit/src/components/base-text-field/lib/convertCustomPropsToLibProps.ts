import type { ChangeEvent } from 'react';

import type { BaseTextFieldProps, LocalTextFieldProps } from 'components/base-text-field/types';

export const convertCustomPropsToLibProps = <P extends BaseTextFieldProps, R extends LocalTextFieldProps>(
  props: P,
): R => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(event.target.value);
  };

  const overridedProps = {
    type: props.type ?? 'text',
    onChange: handleChange,
    error: Boolean(props.error),
    helperText: props.error,
    variant: 'standard' as const,
  };

  return { ...props, ...overridedProps };
};
