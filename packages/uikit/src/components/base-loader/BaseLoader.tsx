import { memo } from 'react';
import type { CircularProgressProps } from '@mui/material/CircularProgress';
import CircularProgress from '@mui/material/CircularProgress';

export type BaseLoaderProps = CircularProgressProps;

export const BaseLoader = memo(CircularProgress);
