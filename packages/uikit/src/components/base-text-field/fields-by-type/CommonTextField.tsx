import React, { PropsWithChildren, forwardRef, Ref } from 'react';
import { CommonFieldProps } from 'components/base-text-field/types';
import { StyledMuiTextField } from 'components/base-text-field/view/StyledMuiTextField';

export const CommonTextField = forwardRef((props: PropsWithChildren<CommonFieldProps>, ref: Ref<HTMLDivElement>) => (
  <StyledMuiTextField {...props} inputRef={ref} />
));
