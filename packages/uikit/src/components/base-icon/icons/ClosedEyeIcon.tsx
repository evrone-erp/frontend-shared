import React from "react";

import { ConcreteIconProps } from "../types/concrete-icon-props";
import { IconRoot } from "../view/IconRoot";

export function ClosedEyeIcon(props: ConcreteIconProps) {
  return (
    <IconRoot
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="m20.485 12-.59.452a13 13 0 0 1-15.79 0L3.516 12M12 16v2M17.5 14.134l1 1.732M6.5 14.134l-1 1.732"
        stroke="#64656A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </IconRoot>
  );
}
