import React from 'react';
import Image from 'next/image';
import { Sx, mergeSx } from 'design-system';

import { Box, Typography } from '@mui/material';
import { ImageLoaderProps } from 'next/dist/client/image';
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
      {value && <Image objectFit="cover" loader={imageLoader} src={value} alt="" width={size} height={size} />}
      {isLoading && <AvatarSkeleton />}
    </Box>
  );
}
