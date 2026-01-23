import React from 'react';
import type { ImageLoaderProps } from 'next/image';
import Image from 'next/image';
import type { Sx } from 'design-system';
import { mergeSx } from 'design-system';

import { Box, Typography } from '@mui/material';
import { AvatarSkeleton } from './view/AvatarSkeleton';

export type BaseAvatarProps = {
  sx?: Sx;
  className?: string;
  value?: string;
  isLoading?: boolean;
  size?: number;
  placeholder?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  imageLoader?: (props: ImageLoaderProps) => string;
};

export function BaseAvatar({
  sx,
  className,
  value,
  isLoading,
  size = 120,
  placeholder = 'Change cover',
  onClick,
  imageLoader,
}: BaseAvatarProps) {
  return (
    <Box
      sx={mergeSx(
        {
          backgroundColor: 'bg-0',
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          overflow: 'hidden',
          position: 'relative',
        },
        sx,
      )}
      className={className}
      onClick={onClick}
    >
      {!value && (
        <Typography component="span" color="element-1" align="center">
          {placeholder}
        </Typography>
      )}
      {value && <Image loader={imageLoader} src={value} alt="" width={size} height={size} />}
      {isLoading && <AvatarSkeleton />}
    </Box>
  );
}
