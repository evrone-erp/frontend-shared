import React from "react";
import { ConcreteIconProps } from "../types/concrete-icon-props";
import { IconRoot } from "../view/IconRoot";

export function ArrowRightIcon(props: ConcreteIconProps) {
  return (
    <IconRoot
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "rotate(180deg)" }}
    >
      <path d="M13 20L5 12.5L13 5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 12.5H22" stroke="currentColor" strokeWidth="1.5" />
    </IconRoot>
  );
}
