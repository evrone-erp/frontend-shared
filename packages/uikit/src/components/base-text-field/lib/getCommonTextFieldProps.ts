import { TextFieldProps } from "@mui/material";
import { ChangeEvent } from "react";
import { CommonTextFieldProps } from "../types";

export const getCommonTextFieldProps = (
  props: CommonTextFieldProps,
  isMuiComponent = false
) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(event.target.value);
  };

  let commonProps: Omit<CommonTextFieldProps, "onChange" | "error"> &
    Pick<
      TextFieldProps,
      "variant" | "sx" | "error" | "helperText" | "onChange"
    > = {
    className: props.className,
    label: props.label,
    value: props.value,
    onChange: handleChange,
  };

  if (isMuiComponent) {
    commonProps = {
      ...commonProps,
      sx: props.sx,
      error: Boolean(props.error),
      helperText: props.error,
      variant: "standard" as const,
    };
  }

  return commonProps;
};
