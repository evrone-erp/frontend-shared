import React from 'react';
import { CommonFieldProps } from 'components/base-text-field/types';
import { StyledMuiTextField } from 'components/base-text-field/view/StyledMuiTextField';

export const CommonTextField: React.FC<CommonFieldProps> = (props) => <StyledMuiTextField {...props} />;
