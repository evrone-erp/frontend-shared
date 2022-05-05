import React from "react";
import { CommonFieldProps } from "../types";
import { StyledMuiTextField } from "../view/StyledMuiTextField";

export const CommonTextField: React.FC<CommonFieldProps> = (props) => {
  return <StyledMuiTextField {...props} />;
};
