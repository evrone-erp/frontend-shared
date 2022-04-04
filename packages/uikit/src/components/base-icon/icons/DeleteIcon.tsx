import React from "react";

import { IconRoot } from "../view/IconRoot";
import { ConcreteIconProps } from "../types/concrete-icon-props";

export function DeleteIcon(props: ConcreteIconProps) {
  return (
    <IconRoot
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 8H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C16.5523 8 17 8.44772 17 9V18C17 18.5523 16.5523 19 16 19H8C7.44772 19 7 18.5523 7 18V13.5V9C7 8.44772 7.44772 8 8 8H12H16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8V8.75C15.4142 8.75 15.75 8.41421 15.75 8H15ZM9 8H8.25C8.25 8.41421 8.58579 8.75 9 8.75V8ZM15 7.25H9V8.75H15V7.25ZM14.25 6V8H15.75V6H14.25ZM9.75 8V6.5H8.25V8H9.75ZM9.75 6.5V6H8.25V6.5H9.75ZM10 5.75H12V4.25H10V5.75ZM12 5.75H14V4.25H12V5.75ZM9.75 6C9.75 5.86193 9.86193 5.75 10 5.75V4.25C9.0335 4.25 8.25 5.0335 8.25 6H9.75ZM15.75 6C15.75 5.0335 14.9665 4.25 14 4.25V5.75C14.1381 5.75 14.25 5.86193 14.25 6H15.75Z"
        fill="currentColor"
      />
    </IconRoot>
  );
}
