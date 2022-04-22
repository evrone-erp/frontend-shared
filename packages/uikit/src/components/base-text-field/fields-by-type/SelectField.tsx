import React from "react";
import { SelectTextFieldProps } from "../types";
import { StyledMuiTextField } from "../view/StyledMuiTextField";
import { StyledMuiMenuItem } from "../view/StyledMuiMenuItem";
import { getCommonTextFieldProps } from "../lib/getCommonTextFieldProps";

export const SelectField: React.FC<SelectTextFieldProps> = ({
  options,
  ...props
}) => {
  const commonProps = getCommonTextFieldProps(props, true);

  return (
    <StyledMuiTextField {...commonProps} select>
      {options?.map((option: SelectTextFieldProps["options"][0]) =>
        typeof option === "object" ? (
          <StyledMuiMenuItem key={option.value} value={option.value}>
            {option.label}
          </StyledMuiMenuItem>
        ) : (
          <StyledMuiMenuItem key={option} value={option}>
            {option}
          </StyledMuiMenuItem>
        )
      )}
    </StyledMuiTextField>
  );
};
