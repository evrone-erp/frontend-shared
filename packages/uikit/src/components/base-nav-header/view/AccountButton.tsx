import { BaseTextButton } from "components/base-text-button";
import React from "react";

type AccountButtonProps = {
  name?: string;
  onClick?: () => void;
};

// TODO: add avatar
export const AccountButton: React.FC<AccountButtonProps> = ({
  name,
  onClick,
}) => (
  <BaseTextButton sx={{ typography: "subtitle" }} color="6" onClick={onClick}>
    {name}
  </BaseTextButton>
);
