import React from "react";
import { Sx } from "design-system";

import { StyledMuiCheckbox } from "./view/StyledMuiCheckbox";
import { StyledMuiFormControlLabel } from "./view/StyledMuiFormControlLabel";

export type BaseCheckBoxProps = {
  sx?: Sx;
  name?: string;
  className?: string;
  label?: string;
  value?: boolean;
  onChange?: (newValue?: boolean) => void;
};
export function BaseCheckBox({
  className,
  name,
  sx,
  label = "",
  onChange,
  value,
}: BaseCheckBoxProps) {
  return (
    <StyledMuiFormControlLabel
      label={label}
      checked={value}
      name={name}
      sx={sx}
      className={className}
      onChange={(_: unknown, checked: boolean) => onChange?.(!checked)}
      control={<StyledMuiCheckbox size="small" />}
    />
  );
}
