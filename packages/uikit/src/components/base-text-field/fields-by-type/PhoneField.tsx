import { TextFieldProps } from "@mui/material";
import React, { ComponentType } from "react";
import NumberFormat from "react-number-format";
import { getCommonTextFieldProps } from "../lib/getCommonTextFieldProps";
import { NumberFieldProps } from "../types";
import { StyledMuiTextField } from "../view/StyledMuiTextField";

export const PhoneField: React.FC<NumberFieldProps> = (props) => {
  const commonProps = getCommonTextFieldProps(props);
  return (
    <NumberFormat
      {...commonProps}
      customInput={StyledMuiTextField as ComponentType<TextFieldProps>}
      format="+# ### ### ## ##"
      type={props.type}
    />
  );
};
