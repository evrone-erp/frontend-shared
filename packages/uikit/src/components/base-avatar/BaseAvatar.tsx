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
};

export function BaseAvatar({ sx, className, value, isLoading, size = 120 }: BaseAvatarProps) {
  return (
    <Box
      sx={mergeSx(sx, {
        backgroundColor: 'bg-1',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
      })}
      className={className}
    >
      {!value && (
        <Typography component="span" color="element-2" align="center">
          Change <br /> cover
        </Typography>
      )}
      {value && <Image layout="fill" src={value} alt="avatar" />}
      {isLoading && <AvatarSkeleton />}
    </Box>
  );
}
