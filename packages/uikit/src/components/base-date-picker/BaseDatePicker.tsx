import React from 'react';
import type { DateTime } from 'luxon';
import { DatePicker } from '@mui/x-date-pickers';
import { noop } from 'lodash';

import type { Sx } from 'design-system';
import { bindPropsSxMerge } from 'design-system';
import { StyledMuiTextField } from 'components/base-text-field';
import { BaseIcon } from 'components/base-icon';
import type { TextFieldProps } from '@mui/material/TextField/TextField';

const DateIcon = bindPropsSxMerge(BaseIcon, { type: 'date', size: 24 });

export type BaseDatePickerProps = {
  sx?: Sx;
  className?: string;
  label?: string;
  value?: DateTime | null;
  onChange?: (d: DateTime | null) => void;
};
export function BaseDatePicker({ label, onChange, value, className, sx }: BaseDatePickerProps) {
  return (
    <DatePicker
      className={className}
      label={label}
      value={value}
      onChange={onChange ?? noop}
      components={{
        OpenPickerIcon: DateIcon,
      }}
      mask="__.__.____"
      renderInput={(props: TextFieldProps) => <StyledMuiTextField sx={sx} variant="standard" {...props} />}
    />
  );
}
