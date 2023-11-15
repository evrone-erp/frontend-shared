import React, { PropsWithChildren } from 'react';
import { InputAdornment } from '@mui/material';
import { BaseIconButton } from 'components/base-icon-button';
import { BaseIcon } from 'components/base-icon';
import { StyledMuiTextField } from 'components/base-text-field/view/StyledMuiTextField';
import { PasswordFieldProps } from 'components/base-text-field/types';

export const PasswordField = (props: PropsWithChildren<PasswordFieldProps>) => {
  const [isValueVisibile, setIsValueVisible] = React.useState(false);

  const handlePasswordVisibilityIconClick = () => {
    setIsValueVisible((prevVal) => !prevVal);
  };

  return (
    <StyledMuiTextField
      {...props}
      type={isValueVisibile ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <BaseIconButton aria-label="toggle password visibility" onClick={handlePasswordVisibilityIconClick}>
              {isValueVisibile ? <BaseIcon type="opened-eye" /> : <BaseIcon type="closed-eye" />}
            </BaseIconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
