import type { ReactNode } from 'react';
import React, { memo, useCallback, useContext, useRef } from 'react';
import { Typography } from '@mui/material';

import { mergeSx } from 'design-system';

import type { BaseComponentProps } from 'design-system/types';

import type { BaseTextButtonProps } from 'components/base-text-button';
import { BaseTextButton } from 'components/base-text-button';
import { SubmenuContext } from 'components/base-nav-header/model';

type SubmenuFnProps = {
  submenuId: symbol;
};

type NavButtonProps = {
  children: ReactNode;
  number?: string | number;
  onClick?: () => void;
  submenu?: (submenuArgs: SubmenuFnProps) => ReactNode;
} & BaseTextButtonProps &
  BaseComponentProps;

const rootSx = {
  whiteSpace: 'nowrap',
  color: 'element-1',
  '&:hover': {
    color: 'element-2',
    '& .BaseNavHeader__nav-button-number': {
      color: 'element-1',
    },
  },
};

const numberSx = {
  ml: 2,
  color: 'element-0',
};

export const NavButton = memo(({ children, number, submenu, sx, onClick }: NavButtonProps) => {
  const { setSubmenuId } = useContext(SubmenuContext);
  const idRef = useRef(Symbol('submenuId'));

  const handleClick = useCallback(() => {
    if (submenu) setSubmenuId(idRef.current);
    onClick?.();
  }, [onClick, submenu, setSubmenuId]);

  return (
    <>
      <BaseTextButton sx={mergeSx(rootSx, sx)} onClick={handleClick} className="BaseNavHeader__nav-button">
        {children}
        {number !== undefined && (
          <Typography className="BaseNavHeader__nav-button-number" sx={numberSx}>
            {number}
          </Typography>
        )}
      </BaseTextButton>
      {submenu?.({ submenuId: idRef.current })}
    </>
  );
});
