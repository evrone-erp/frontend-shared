import React from "react";

import { ConcreteIconProps } from "../types/concrete-icon-props";
import { IconRoot } from "../view/IconRoot";

export function ChoiceIcon(props: ConcreteIconProps) {
  return (
    <IconRoot
      {...props}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 8.23077L6 11L12 5" stroke="currentColor" strokeWidth="1.2" />
    </IconRoot>
  );
}
