import React, { forwardRef, Ref } from 'react';
import { CommonFieldProps } from 'components/base-text-field/types';
import { StyledMuiTextField } from 'components/base-text-field/view/StyledMuiTextField';

export const CommonTextField: React.FC<CommonFieldProps> = forwardRef((props, ref: Ref<HTMLDivElement>) => (
  <StyledMuiTextField {...props} inputRef={ref} />
));
