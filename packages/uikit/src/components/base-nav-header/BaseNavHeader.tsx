import React, { ReactNode, useState } from 'react';
import { Box, Theme, useMediaQuery } from '@mui/material';
import { BaseComponentProps } from 'design-system/types';
import { MenuBar } from './view/MenuBar';
import { Delimiter } from './view/Delimiter';
import { EvroneLogo } from './view/EvroneLogo';
import { AccountButton } from './view/AccountButton';
import { Root } from './view/Root';
import { ToggleThemeIconButton } from './toggle-theme';
import { Menu } from './view/Menu';

export type BaseNavHeaderProps = {
  logo?: JSX.Element;
  mainMenu?: ReactNode;
  subMenu?: ReactNode;
  userName?: string;
  hideThemeToggle?: boolean;
} & BaseComponentProps;

export const BaseNavHeader: React.FC<BaseNavHeaderProps> = ({
  sx,
  className,
  logo,
  mainMenu,
  subMenu,
  userName,
  hideThemeToggle = false,
}) => {
  const isDesk = useMediaQuery((theme: Theme) => theme.breakpoints.up('desk'));
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const isUserAuthenticated = Boolean(userName);
  const hasDelimiter = Boolean((!hideThemeToggle || subMenu) && mainMenu);

  const handleClickAccountButton = () => setIsMenuOpened((prevVal) => !prevVal);
  const handleRootMouseLeave = () => setIsMenuOpened(false);

  const toggleThemeButton = hideThemeToggle ? null : <ToggleThemeIconButton />;

  return (
    <Root sx={sx} className={className} onMouseLeave={handleRootMouseLeave}>
      {logo || <EvroneLogo />}
      {isUserAuthenticated && (
        <Box sx={{ ml: 15, display: 'flex' }}>
          {isDesk && (
            <Menu isOpened={isMenuOpened}>
              <MenuBar>
                {subMenu}
                {toggleThemeButton}
              </MenuBar>
              {hasDelimiter && <Delimiter />}
              {mainMenu && <MenuBar>{mainMenu}</MenuBar>}
            </Menu>
          )}
          <AccountButton name={userName} onClick={handleClickAccountButton} />
        </Box>
      )}
      {!isUserAuthenticated && toggleThemeButton}
    </Root>
  );
};
