import type { PropsWithChildren } from 'react';
import React from 'react';
import { Box, Typography } from '@mui/material';
import classNames from 'classnames';

import type { BaseComponentProps } from 'design-system';

export type BasePlateFooterProps = {
  primaryAction: JSX.Element;
  secondaryAction?: JSX.Element;
  className?: string;
  primaryActionComment?: string;
} & BaseComponentProps;

export const BasePlateFooter = ({
  primaryAction,
  secondaryAction,
  className,
  primaryActionComment,
  ...restProps
}: PropsWithChildren<BasePlateFooterProps>) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    className={classNames('BasePlateFooter__root', 'BasePlate__footer', className)}
    {...restProps}
  >
    <Box display="flex" alignItems="center" className="BasePlateFooter__action BasePlateFooter__action--primary">
      {primaryAction}
      {primaryActionComment && <Typography sx={{ marginLeft: '10px' }}>{primaryActionComment}</Typography>}
    </Box>
    <Box className="BasePlateFooter__action BasePlateFooter__action--secondary">{secondaryAction}</Box>
  </Box>
);
