import { TextFieldProps } from "@mui/material";
import { BaseComponentProps } from "../../design-system/types";
import { NumberFormatProps } from "react-number-format";

export type BaseTextFieldProps =
  | CustomizedPasswordFieldProps
  | CustomizedPhoneFieldProps
  | CustomizedSelectFieldProps
  | CustomizedCommonFieldProps;

export type LocalTextFieldProps =
  | PasswordFieldProps
  | PhoneFieldProps
  | SelectFieldProps
  | CommonFieldProps;

// text field props by type
export type PasswordFieldProps = BasePasswordField & MuiProps;
type CustomizedPasswordFieldProps = BasePasswordField & CustomMuiProps;
type BasePasswordField = {
  type: "password";
  multiline: never;
};

export type PhoneFieldProps = BasePhoneField & Omit<MuiProps, "ref">;
type CustomizedPhoneFieldProps = Omit<BasePhoneField, "onChange"> &
  CustomMuiProps;
type BasePhoneField = Omit<NumberFormatProps, "onChange"> & {
  type: "tel";
};

export type SelectFieldProps = BaseSelectTextField & MuiProps;
type CustomizedSelectFieldProps = BaseSelectTextField & CustomMuiProps;
type BaseSelectTextField = {
  type: "select";
  options: (Option | string)[];
};
type Option = {
  value: string;
  label: string;
};

export type CommonFieldProps = BaseCommonTextField & MuiProps;
type CustomizedCommonFieldProps = BaseCommonTextField & CustomMuiProps;
type BaseCommonTextField = {
  type: Extract<TextFieldType, "email" | "text">;
};

// utils
type TextFieldType = "select" | "tel" | "email" | "text" | "password";

type MuiProps = TextFieldProps & BaseComponentProps;
type CustomMuiProps = OverridedMuiProps &
  Omit<MuiProps, keyof OverridedMuiProps> &
  BaseComponentProps;
type OverridedMuiProps = {
  type?: TextFieldType;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
};
