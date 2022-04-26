import React from "react";

import { BaseTextFieldProps } from "./types";
import { PasswordField } from "./fields-by-type/PasswordField";
import { SelectField } from "./fields-by-type/SelectField";
import { SimpleTextField } from "./fields-by-type/SimpleTextField";
import { PhoneField } from "./fields-by-type/PhoneField";

export const BaseTextField: React.FC<BaseTextFieldProps> = (
  props: BaseTextFieldProps
) => {
  if (props.type === "select") {
    return <SelectField {...props} />;
  }

  if (props.type === "tel") {
    return <PhoneField {...props} />;
  }

  if (props.type === "password") {
    return <PasswordField {...props} />;
  }

  return <SimpleTextField {...props} />;
};
