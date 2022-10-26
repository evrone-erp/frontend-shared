import React from 'react';
import Image from 'next/image';
import { Sx, mergeSx } from 'design-system';

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
};

export function BaseAvatar({
  sx,
  className,
  value,
  isLoading,
  size = 120,
  placeholder = 'Change cover',
  onClick,
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
          padding: '20px',
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
      {value && <Image layout="fill" src={value} alt="avatar" />}
      {isLoading && <AvatarSkeleton />}
    </Box>
  );
}
