import React from "react";
import { InputAdornment } from "@mui/material";
import { BaseIconButton } from "components/base-icon-button";
import { StyledMuiTextField } from "../../view/StyledMuiTextField";
import { PasswordFieldProps } from "../../types";
import { getCommonTextFieldProps } from "../../lib/getCommonTextFieldProps";
import { BaseIcon } from "components/base-icon";

export const PasswordField: React.FC<PasswordFieldProps> = (props) => {
  const commonProps = getCommonTextFieldProps(props, true);

  const [isValueVisibile, setIsValueVisible] = React.useState(false);

  const handlePasswordVisibilityIconClick = () => {
    setIsValueVisible((prevVal) => !prevVal);
  };

  return (
    <StyledMuiTextField
      {...commonProps}
      type={isValueVisibile ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <BaseIconButton
              aria-label="toggle password visibility"
              onClick={handlePasswordVisibilityIconClick}
            >
              {isValueVisibile ? (
                <BaseIcon type="opened-eye" />
              ) : (
                <BaseIcon type="closed-eye" />
              )}
            </BaseIconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
