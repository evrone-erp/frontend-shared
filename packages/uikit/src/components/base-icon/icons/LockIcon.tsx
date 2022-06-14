import React from "react";

import { ConcreteIconProps } from "../types/concrete-icon-props";
import { IconRoot } from "../view/IconRoot";

export function LockIcon(props: ConcreteIconProps) {
  return (
    <IconRoot
      {...props}
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 0.25C3.92893 0.25 2.25 1.92893 2.25 4V6.25H2C1.0335 6.25 0.25 7.0335 0.25 8V11.5V15C0.25 15.9665 1.0335 16.75 2 16.75H12C12.9665 16.75 13.75 15.9665 13.75 15V8C13.75 7.0335 12.9665 6.25 12 6.25H11.75V4C11.75 1.92893 10.0711 0.25 8 0.25H6ZM10.25 6.25V4C10.25 2.75736 9.24264 1.75 8 1.75H6C4.75736 1.75 3.75 2.75736 3.75 4V6.25H7H10.25ZM3 7.75H2C1.86193 7.75 1.75 7.86193 1.75 8V11.5V15C1.75 15.1381 1.86193 15.25 2 15.25H12C12.1381 15.25 12.25 15.1381 12.25 15V8C12.25 7.86193 12.1381 7.75 12 7.75H11H7H3Z"
        fill="currentColor"
      />
    </IconRoot>
  );
}
