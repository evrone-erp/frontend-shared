import React, { memo, FC, ReactNode } from 'react';
import Link from '@mui/material/Link';

import { mergeSx, Sx } from 'design-system';

export type EvroneLogoProps = {
  href?: string;
  sx?: Sx;
  children?: ReactNode;
};

const rootSx = { typography: 'subtitle', color: 'element-2', gridArea: 'logo' };

export const EvroneLogo: FC<EvroneLogoProps> = memo(({ href, sx, children }) => (
  <Link className="BaseNavHeader__logo" href={href} sx={mergeSx(rootSx, sx)}>
    {children || 'evrone'}
  </Link>
));
