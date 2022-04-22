import { BaseComponentProps } from "design-system/types";

export type TextFieldType = "select" | "tel" | "email" | "text" | "password";

export type BaseTextFieldProps =
  | SimpleTextFieldProps
  | SelectTextFieldProps
  | NumberFieldProps
  | PasswordFieldProps;

export type CommonTextFieldProps = BaseComponentProps & {
  type?: TextFieldType;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
};

export type SimpleTextFieldProps = CommonTextFieldProps & {
  type: Extract<TextFieldType, "email" | "text">;
  multiline?: boolean;
};

export type PasswordFieldProps = CommonTextFieldProps & {
  type: "password";
};

export type NumberFieldProps = CommonTextFieldProps & {
  type: "tel";
};

export type SelectTextFieldProps = CommonTextFieldProps & {
  type: "select";
  options: (Option | string)[];
};

type Option = {
  value: string;
  label: string;
};
