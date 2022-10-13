import { Button } from '@mui/material';
import cn from 'classnames';
import React, { RefObject } from 'react';
import { Tab } from 'components/base-tabs/types';

type TabItemProps = {
  tabRef: RefObject<HTMLButtonElement | null>;
  active?: boolean;
  onClick: () => void;
} & Tab;

export function TabItem({ tabRef, label, active = false, onClick }: TabItemProps) {
  return (
    <Button
      component="button"
      className={cn('BaseTabs-item', { 'BaseTabs-item--active': active })}
      sx={{
        color: active ? 'element-2' : 'element-1',
        typography: 'title-1',
        p: 0,
        textTransform: 'none',
        minWidth: 0,
        '&:hover': {
          background: 'transparent',
        },
        '& .MuiTouchRipple-root': {
          left: '-8px',
          right: '-8px',
        },
      }}
      ref={tabRef as RefObject<HTMLButtonElement>}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
