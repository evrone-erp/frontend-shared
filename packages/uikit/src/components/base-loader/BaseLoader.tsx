import { memo } from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';

export type BaseLoaderProps = CircularProgressProps;

export const BaseLoader = memo(CircularProgress);
