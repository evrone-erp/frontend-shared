import React, { ChangeEvent, ComponentType } from "react";
import { TextFieldProps } from "@mui/material";
import NumberFormat from "react-number-format";

import { Sx } from "design-system";

import { StyledMuiTextField } from "./view/StyledMuiTextField";
import { StyledMuiMenuItem } from "./view/StyledMuiMenuItem";
import { TextFieldType, Option } from "./types";

export type BaseTextFieldProps = {
  label?: string;
  options?: (Option | string)[];
  multiline?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  type?: TextFieldType;
  sx?: Sx;
  className?: string;
};

export function BaseTextField({
  label,
  options,
  onChange,
  value,
  className,
  sx,
  error,
  multiline,
  type = "text",
}: BaseTextFieldProps) {
  const handleChange = (v: ChangeEvent<HTMLInputElement>) => {
    onChange?.(v.target.value);
  };

  const commonProps = {
    className,
    sx,
    error: Boolean(error),
    helperText: error,
    label,
    value,
    onChange: handleChange,
    variant: "standard" as const,
  };

  if (type === "select") {
    return (
      <StyledMuiTextField {...commonProps} select>
        {options?.map((option: Option | string) =>
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
  }

  if (type === "phone") {
    return (
      <NumberFormat
        customInput={StyledMuiTextField as ComponentType<TextFieldProps>}
        type="tel"
        format="+# ### ### ## ##"
        {...commonProps}
      />
    );
  }

  return (
    <StyledMuiTextField multiline={multiline} type={type} {...commonProps} />
  );
}
