import React, { ReactNode, useContext, useCallback, useMemo, useState, useEffect } from 'react';
import Popover, { PopoverOrigin } from '@mui/material/Popover';
import Box from '@mui/material/Box';
import { BaseIconButton } from 'components/base-icon-button';
import { SubmenuContext } from 'components/base-nav-header/model';
import { useElementMeasure } from '@evrone-erp/react-std';

import { SubmenuTransition } from './SubmenuTransition';

export type SubmenuProps = {
  submenuId?: symbol;
  children: ReactNode;
};

const contentSx = {
  display: {
    mob: 'grid',
    tab: 'flex',
  },
  justifyItems: 'start',
  alignItems: 'center',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: 'repeat(auto-fill, auto)',
  flexWrap: {
    mob: 'wrap',
    tab: 'nowrap',
  },
  bgcolor: 'bg-0',
  minHeight: 'inherit',
  width: '100%',
  py: 3,
  px: {
    mob: 1,
    tab: 4,
  },
  gap: {
    mob: 0,
    tab: 10,
  },
};

const backSx = {
  color: 'element-1',
  gridColumn: '1/4',
  '&:hover': {
    color: 'element-2',
  },
};

const origin: PopoverOrigin = {
  vertical: 'top',
  horizontal: 'center',
};

export const Submenu = ({ children, submenuId }: SubmenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { submenuId: currentSubmenuId, anchorEl, onCloseMenu, menuIsOpen, setSubmenuId } = useContext(SubmenuContext);
  const { height } = useElementMeasure(anchorEl as HTMLElement);
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  const handleSubmenuClose = useCallback(() => {
    setSubmenuId(undefined);
  }, [setSubmenuId]);

  const handleClose = useCallback(() => {
    handleSubmenuClose();
    onCloseMenu?.();
  }, [handleSubmenuClose, onCloseMenu]);

  useEffect(() => {
    setOpen(Boolean(currentSubmenuId && submenuId === currentSubmenuId));
  }, [setOpen, submenuId, currentSubmenuId]);

  const paperProps = useMemo(
    () => ({
      sx: {
        borderRadius: 0,
        width: '100vw',
        maxWidth: '100vw',
        maxHeight: 'unset',
        top: '0 !important',
        left: '0 !important',
        minHeight: height,
      },
    }),
    [height],
  );

  return (
    <Popover
      className="BaseNavHeader__submenu-popover"
      id={id}
      open={open && menuIsOpen}
      onClose={handleClose}
      anchorEl={anchorEl}
      TransitionComponent={SubmenuTransition}
      elevation={0}
      marginThreshold={0}
      PaperProps={paperProps}
      anchorOrigin={origin}
      transformOrigin={origin}
    >
      <Box className="BaseNavHeader__submenu-content" sx={contentSx}>
        <BaseIconButton
          onClick={handleSubmenuClose}
          type="arrow-left"
          className="BaseNavHeader__submenu-back"
          sx={backSx}
        />
        {children}
      </Box>
    </Popover>
  );
};
