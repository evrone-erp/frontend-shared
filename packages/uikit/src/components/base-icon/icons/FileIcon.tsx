import React from "react";

import { IconRoot } from "../view/IconRoot";
import { ConcreteIconProps } from "../types/concrete-icon-props";

export function FileIcon(props: ConcreteIconProps) {
  return (
    <IconRoot
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 5C6 4.44772 6.44772 4 7 4H13.5858C13.851 4 14.1054 4.10536 14.2929 4.29289L17.7071 7.70711C17.8946 7.89464 18 8.149 18 8.41421V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconRoot>
  );
}
