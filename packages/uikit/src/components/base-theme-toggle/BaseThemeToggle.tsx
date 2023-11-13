import React, { PropsWithChildren, useCallback } from 'react';
import { BaseIconButton } from 'components/base-icon-button';
import { BaseComponentProps } from 'design-system/types';
import { useTheme, mergeSx, ThemeKey } from 'design-system';

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
