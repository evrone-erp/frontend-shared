import React from "react";
import { getCommonTextFieldProps } from "../lib/getCommonTextFieldProps";
import { SimpleTextFieldProps } from "../types";
import { StyledMuiTextField } from "../view/StyledMuiTextField";

export const SimpleTextField: React.FC<SimpleTextFieldProps> = ({
  multiline,
  type = "text",
  ...props
}) => {
  return (
    <StyledMuiTextField
      multiline={multiline}
      type={type}
      {...getCommonTextFieldProps(props, true)}
    />
  );
};
