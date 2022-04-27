import React from "react";
import { mergeSx } from "./merge-sx";
import { Sx } from "../types";

export const addSxProp = (elem: JSX.Element, sx: Sx): JSX.Element => {
  const newSx = sx || elem.props.sx ? mergeSx(elem.props.sx, sx) : undefined;
  const Elm = elem.type;
  return <Elm {...elem.props} sx={newSx} key={elem.key} />;
};
