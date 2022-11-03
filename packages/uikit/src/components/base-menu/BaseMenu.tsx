import React, { memo, FC, ReactNode, NamedExoticComponent, MemoExoticComponent } from 'react';
import Select, { SelectProps, SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { mergeSx } from 'design-system';

import { Icon } from './ui/Icon';

import { styles } from './BaseMenu.styles';

type BaseMenuCompose = {
  Item: MemoExoticComponent<typeof MenuItem>;
};

interface BaseMenuProps extends SelectProps {
  children: ReactNode;
}

const inputProps = {
  sx: styles.input,
};

const menuProps = {
  sx: styles.menu,
};

const BaseMenu: FC<BaseMenuProps> = ({ value, onChange, children, sx }) => (
  <Select
    className="BaseMenu__root"
    value={value}
    onChange={onChange}
    sx={mergeSx(styles.root, sx)}
    IconComponent={Icon}
    inputProps={inputProps}
    MenuProps={menuProps}
  >
    {children}
  </Select>
);

const MemoizedMenu = memo(BaseMenu) as NamedExoticComponent<BaseMenuProps> & BaseMenuCompose;

MemoizedMenu.Item = memo(MenuItem);

export { MemoizedMenu as BaseMenu, SelectChangeEvent as BaseMenuChangeEvent, BaseMenuProps };
