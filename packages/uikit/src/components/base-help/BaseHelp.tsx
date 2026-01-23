import type { MouseEvent } from 'react';
import React from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';

import type { Sx } from 'design-system';
import { mergeSx } from 'design-system';
import { BaseCloseButton } from 'components/base-close-button';

import { HelpContainer } from './view/HelpContainer';
import { TextContent } from './view/TextContent';
import { TitleContent } from './view/TitleContent';

export type BaseHelpProps = {
  sx?: Sx;
  className?: string;
  title?: React.ReactNode;
  text?: string;
  maxLines?: number;
  withClose?: boolean;
  onClose?: (event?: MouseEvent<HTMLElement>) => void;
};

const rootSx = { bgcolor: 'bg-0' };

const titleWrapperSx = { display: 'flex', justifyContent: 'space-between', gap: 16 };

export function BaseHelp({ sx, className, title, onClose, text, withClose, maxLines = 2 }: BaseHelpProps) {
  return (
    <HelpContainer sx={mergeSx(rootSx, sx)} className={classNames('BaseHelp__root', className)}>
      <Box className="BaseHelp__titleWrapper" sx={titleWrapperSx}>
        <TitleContent withClose={withClose}>{title}</TitleContent>
        {withClose && <BaseCloseButton className="BaseHelp__close" onClick={onClose} size={16} />}
      </Box>
      <TextContent maxLines={maxLines}>{text}</TextContent>
    </HelpContainer>
  );
}
