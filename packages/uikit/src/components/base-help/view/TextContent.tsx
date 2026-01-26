import { Typography } from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';
import { useBooleanState } from '@evrone-erp/react-std';

import { useElementLineHeight } from 'components/base-help/lib/use-element-line-height';
import { useOverflow } from 'components/base-help/lib/use-overflow';

import { ExpandButton } from './ExpandButton';

type TextContentProps = { children?: ReactNode; maxLines: number };

export function TextContent({ children, maxLines }: TextContentProps) {
  const textExpanded = useBooleanState(false);
  const [lineHeight, ref] = useElementLineHeight();
  const isOverflow = useOverflow(ref);

  if (!children) return null;
  return (
    <Typography
      sx={{
        typography: 'text',
        color: 'element-1',
        overflow: 'hidden',
        maxHeight: lineHeight && !textExpanded.is ? lineHeight * maxLines : undefined,
        position: 'relative',
      }}
      className="BaseHelp__text"
      ref={ref}
      component="p"
    >
      {children}
      {isOverflow && textExpanded.not && <ExpandButton onClick={textExpanded.setTrue} />}
    </Typography>
  );
}
