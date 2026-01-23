import type { PropsWithChildren, Ref } from 'react';
import React, { forwardRef } from 'react';
import type { CommonFieldProps } from 'components/base-text-field/types';
import { StyledMuiTextField } from 'components/base-text-field/view/StyledMuiTextField';

export const CommonTextField = forwardRef((props: PropsWithChildren<CommonFieldProps>, ref: Ref<HTMLDivElement>) => (
  <StyledMuiTextField {...props} inputRef={ref} />
));
