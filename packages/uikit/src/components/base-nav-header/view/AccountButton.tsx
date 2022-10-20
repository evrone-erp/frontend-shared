import React from 'react';

import { mergeSx, Sx } from 'design-system';
import { BaseTextButton } from 'components/base-text-button';

type AccountButtonProps = {
  name?: string;
  onClick?: () => void;
  sx?: Sx;
};

const rootSx = { typography: 'subtitle', color: 'element-1', gridArea: 'avatar', justifyContent: 'flex-end' };

// TODO: add avatar
export const AccountButton: React.FC<AccountButtonProps> = ({ name, onClick, sx }) => {
  if (!name) return null;

  return (
    <BaseTextButton className="BaseNavHeader__account-button" sx={mergeSx(rootSx, sx)} onClick={onClick}>
      {name}
    </BaseTextButton>
  );
};
