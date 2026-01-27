import React from 'react';
import { Box } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';

import type { BaseIconButtonProps } from './BaseIconButton';
import { BaseIconButton } from './BaseIconButton';

export default {
  title: 'UI/BaseIconButton',
  component: BaseIconButton,
  decorators: [
    (StoryComponent) => (
      <Box border="1px solid lightskyblue">
        <StoryComponent />
      </Box>
    ),
  ],
} as Meta<typeof BaseIconButton>;

function Template(props: Partial<BaseIconButtonProps>) {
  return <BaseIconButton {...props} />;
}

export const Primary: StoryFn<BaseIconButtonProps> = Template.bind({});
Primary.args = {
  type: 'delete',
  size: 60,
};

export const WithVisibleIndent: StoryFn<BaseIconButtonProps> = Template.bind({});
WithVisibleIndent.args = {
  type: 'delete',
  size: 60,
  visibleIndent: 20,
};

export const CustomContent: StoryFn<BaseIconButtonProps> = Template.bind({});
CustomContent.args = {
  children: (
    <Box
      sx={{
        typography: 'caption',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'good-2',
        color: 'bg-0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      3
    </Box>
  ),
  size: 24,
  visibleIndent: 5,
};
