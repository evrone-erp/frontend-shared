import React from 'react';
import { Box, Typography } from '@mui/material';
import classNames from 'classnames';

import { BaseComponentProps } from 'design-system/types';

export type BasePlateFooterProps = {
  primaryAction: JSX.Element;
  secondaryAction?: JSX.Element;
  className?: string;
  primaryActionComment?: string;
} & BaseComponentProps;

export const BasePlateFooter: React.FC<BasePlateFooterProps> = ({
  primaryAction,
  secondaryAction,
  className,
  primaryActionComment,
  ...restProps
}) => (
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
