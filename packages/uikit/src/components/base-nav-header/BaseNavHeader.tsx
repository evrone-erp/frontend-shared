import type { ReactNode, NamedExoticComponent, FC } from 'react';
import React, { memo, useRef } from 'react';
import type { AppBarProps } from '@mui/material';

import type { BaseComponentProps } from 'design-system/types';

import { SubmenuProvider } from './model/submenuContext';
import { MenuBar } from './view/MenuBar';
import type { EvroneLogoProps } from './view/EvroneLogo';
import { EvroneLogo } from './view/EvroneLogo';
import { AccountButton } from './view/AccountButton';
import { Root } from './view/Root';
import { Menu } from './view/Menu';
import { Group } from './view/Group';
import { Submenu } from './view/Submenu';
import { NavButton } from './view/NavButton';

export type BaseNavHeaderProps = {
  logo?: JSX.Element;
  children?: ReactNode;
  accountButton?: ReactNode;
  position?: AppBarProps['position'];
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  logoProps?: EvroneLogoProps;
} & BaseComponentProps;

type BaseNavHeaderCompose = {
  Group: typeof Group;
  NavButton: typeof NavButton;
  AccountButton: typeof AccountButton;
  Submenu: typeof Submenu;
};

const BaseNavHeader: FC<BaseNavHeaderProps> = ({
  open = true,
  sx,
  className,
  logo,
  accountButton,
  children,
  logoProps,
  onClose,
  position = 'fixed',
}) => {
  const anchorRef = useRef(null);

  return (
    <SubmenuProvider onCloseMenu={onClose} menuIsOpen={open} anchorEl={anchorRef.current}>
      <Root ref={anchorRef} position={position} sx={sx} className={className} open={open}>
        {logo || <EvroneLogo {...logoProps} />}
        <Menu open={open}>
          <MenuBar>{children}</MenuBar>
        </Menu>
        {accountButton}
      </Root>
    </SubmenuProvider>
  );
};

const MemoizedBaseNavHeader = memo(BaseNavHeader) as NamedExoticComponent<BaseNavHeaderProps> & BaseNavHeaderCompose;

MemoizedBaseNavHeader.Group = Group;

MemoizedBaseNavHeader.NavButton = NavButton;

MemoizedBaseNavHeader.AccountButton = AccountButton;

MemoizedBaseNavHeader.Submenu = Submenu;

export { MemoizedBaseNavHeader as BaseNavHeader };
