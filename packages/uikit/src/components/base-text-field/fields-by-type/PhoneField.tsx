import { TextFieldProps } from "@mui/material";
import React from "react";
import NumberFormat from "react-number-format";
import { PhoneFieldProps } from "../types";
import { StyledMuiTextField } from "../view/StyledMuiTextField";

export const PhoneField: React.FC<PhoneFieldProps> = (props) => {
  return (
    <NumberFormat<TextFieldProps>
      {...props}
      customInput={StyledMuiTextField}
      format="+# ### ### ## ##"
    />
  );
};
