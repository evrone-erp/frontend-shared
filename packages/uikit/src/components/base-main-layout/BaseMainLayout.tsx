import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';

import { mergeSx } from 'design-system';
import type { BaseComponentProps } from 'design-system';

import { LayoutContent } from './view/LayoutContent';

export type BaseMainLayoutProps = BaseComponentProps & {
  header?: React.ReactElement;
  children?: ReactNode | undefined;
};

export const BaseMainLayout = ({ header, children, sx }: BaseMainLayoutProps) => (
  <Box
    sx={mergeSx(sx, {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      bgcolor: 'bg-0',
    })}
    className="BaseMainLayout__root"
  >
    {header && (
      <Box className="BaseMainLayout__header" sx={{ flexShrink: 0 }}>
        {header}
      </Box>
    )}
    <LayoutContent className="BaseMainLayout__content" sx={{ flexGrow: 1 }}>
      {children}
    </LayoutContent>
  </Box>
);
