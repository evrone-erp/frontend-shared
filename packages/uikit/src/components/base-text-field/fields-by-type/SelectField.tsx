import React from "react";
import { SelectFieldProps } from "../types";
import { StyledMuiTextField } from "../view/StyledMuiTextField";
import { StyledMuiMenuItem } from "../view/StyledMuiMenuItem";

export const SelectField: React.FC<SelectFieldProps> = ({
  options,
  ...commonProps
}) => {
  return (
    <StyledMuiTextField {...commonProps} select>
      {options?.map((option: SelectFieldProps["options"][0]) =>
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
