import type { PropsWithChildren } from 'react';
import React, { useCallback } from 'react';

import type { ThemeKey } from 'design-system';
import { useTheme, mergeSx } from 'design-system';

import type { BaseComponentProps } from 'design-system/types';

import { BaseIconButton } from 'components/base-icon-button';

const rootSx = {
  color: 'element-1',
  '&:hover': {
    color: 'element-2',
  },
};

export const BaseThemeToggle = ({ sx, ...props }: PropsWithChildren<BaseComponentProps>) => {
  const [, setTheme] = useTheme();

  const handleClick = useCallback(() => {
    setTheme((state: ThemeKey) => (state === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  return (
    <BaseIconButton
      type="theme"
      sx={mergeSx(rootSx, sx)}
      size={18}
      visibleIndent={6}
      onClick={handleClick}
      {...props}
    />
  );
};
