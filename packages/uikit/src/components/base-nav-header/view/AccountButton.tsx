import type { PropsWithChildren } from 'react';
import React from 'react';

import type { Sx } from 'design-system';
import { mergeSx } from 'design-system';
import { BaseTextButton } from 'components/base-text-button';

type AccountButtonProps = {
  name?: string;
  onClick?: () => void;
  sx?: Sx;
};

const rootSx = { typography: 'subtitle', color: 'element-1', gridArea: 'avatar', justifyContent: 'flex-end' };

// TODO: add avatar
export const AccountButton = ({ name, onClick, sx }: PropsWithChildren<AccountButtonProps>) => {
  if (!name) return null;

  return (
    <BaseTextButton className="BaseNavHeader__account-button" sx={mergeSx(rootSx, sx)} onClick={onClick}>
      {name}
    </BaseTextButton>
  );
};
