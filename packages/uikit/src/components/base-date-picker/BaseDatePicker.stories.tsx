import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { DateTime } from 'luxon';
import type { BaseDatePickerProps } from './BaseDatePicker';
import { BaseDatePicker } from './BaseDatePicker';

export default {
  title: 'UI/BaseDatePicker',
  component: BaseDatePicker,
} as Meta<typeof BaseDatePicker>;

function Template({ onChange, ...props }: BaseDatePickerProps): JSX.Element {
  const [state, setState] = useState<DateTime | null>(null);
  return (
    <BaseDatePicker
      {...props}
      value={state}
      onChange={(v) => {
        onChange?.(v);
        setState(v);
      }}
    />
  );
}

export const Base: StoryFn = Template.bind({});
Base.args = {
  label: 'Label',
};
