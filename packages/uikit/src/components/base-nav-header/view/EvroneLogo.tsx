import type { PropsWithChildren, ReactNode } from 'react';
import React, { memo } from 'react';
import Link from '@mui/material/Link';

import type { Sx } from 'design-system';
import { mergeSx } from 'design-system';

export type EvroneLogoProps = {
  href?: string;
  sx?: Sx;
  children?: ReactNode;
};

const rootSx = { typography: 'subtitle', color: 'element-2', gridArea: 'logo' };

export const EvroneLogo = memo(({ href, sx, children }: PropsWithChildren<EvroneLogoProps>) => (
  <Link className="BaseNavHeader__logo" href={href} sx={mergeSx(rootSx, sx)}>
    {children || 'evrone'}
  </Link>
));
