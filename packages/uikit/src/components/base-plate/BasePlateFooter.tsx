import React from 'react';
import { Box } from '@mui/material';
import classNames from 'classnames';

import { BaseComponentProps } from 'design-system/types';

export type BasePlateFooterProps = {
  primaryAction: JSX.Element;
  secondaryAction?: JSX.Element;
  className?: string;
} & BaseComponentProps;

export const BasePlateFooter: React.FC<BasePlateFooterProps> = ({
  primaryAction,
  secondaryAction,
  className,
  ...restProps
}) => (
  <Box
    display="flex"
    justifyContent="space-between"
    className={classNames('BasePlateFooter__root', 'BasePlate__footer', className)}
    {...restProps}
  >
    <Box className="BasePlateFooter__action BasePlateFooter__action--primary">{primaryAction}</Box>
    <Box className="BasePlateFooter__action BasePlateFooter__action--secondary">{secondaryAction}</Box>
  </Box>
);
