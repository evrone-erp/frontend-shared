import React from 'react';
import { Box, Typography } from '@mui/material';
import classNames from 'classnames';

import { mergeSx } from 'design-system';
import type { BaseComponentProps } from 'design-system';

export type BasePlateHeaderProps = {
  title: string;
  subtitle?: string;
  inlineSubtitle?: boolean;
  action?: JSX.Element;
  link?: JSX.Element;
} & BaseComponentProps;

export function BasePlateHeader({
  sx,
  className,
  action,
  inlineSubtitle = false,
  link,
  subtitle,
  title,
}: BasePlateHeaderProps) {
  return (
    <Box
      display="flex"
      sx={mergeSx({ position: 'relative', mb: 'auto' }, sx)}
      className={classNames('BasePlateHeader__root', 'BasePlate__header', className)}
    >
      <Box
        mr="auto"
        sx={[inlineSubtitle && { display: 'flex', alignItems: 'flex-end' }]}
        className="BasePlateHeader__title-wrapper"
      >
        <Typography
          component="div"
          color="element-2"
          sx={mergeSx({ typography: 'subtitle' })}
          className="BasePlateHeader__title"
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            component="div"
            color="element-0"
            sx={mergeSx({ typography: 'text', mt: 2 }, inlineSubtitle && { mt: 0, ml: 3 })}
            className="BasePlateHeader__subtitle"
          >
            {subtitle}
          </Typography>
        )}
      </Box>
      {/* TODO: maybe need to combine link and action to one prop */}
      {link}
      {action && (
        <Box className="BasePlateHeader__action" sx={{ position: 'absolute', right: '-6px', top: '-6px' }}>
          {action}
        </Box>
      )}
    </Box>
  );
}
