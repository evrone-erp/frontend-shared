import React from 'react';
import { fill } from 'lodash';
import { Button, Typography } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';

import { useBooleanState } from '@evrone-erp/react-std';

import type { BaseDrawerProps } from './BaseDrawer';
import { BaseDrawer } from './BaseDrawer';

export default {
  title: 'UI/BaseDrawer',
  component: BaseDrawer,
} as Meta<typeof BaseDrawer>;

function Template({ open, ...props }: BaseDrawerProps) {
  const drawerOpen = useBooleanState(open ?? false);
  return (
    <>
      <Button onClick={drawerOpen.setTrue}>Open</Button>
      <BaseDrawer
        {...props}
        title="Title"
        open={drawerOpen.is}
        onClose={drawerOpen.setFalse}
        onOpen={drawerOpen.setTrue}
      >
        <Typography>
          {fill(
            Array(10),
            <>
              Pellentesque mauris ligula, placerat ut dui quis, maximus pellentesque velit. Quisque sed risus facilisis,
              dignissim ipsum vel, venenatis ante. Donec risus quam, aliquam id lacus vel, tempor aliquam mi. Integer
              mattis fringilla magna, vitae faucibus urna euismod iaculis.
              <br />
            </>,
          )}
        </Typography>
      </BaseDrawer>
    </>
  );
}

export const Main: StoryFn<BaseDrawerProps> = Template.bind({});
Main.args = {
  open: true,
};

export const WithFooter: StoryFn<BaseDrawerProps> = Template.bind({});
WithFooter.args = {
  footer: <Button>Footer Button</Button>,
};

export const CustomizeInnerComponents: StoryFn<BaseDrawerProps> = Template.bind({});
CustomizeInnerComponents.args = {
  footer: <Button>Footer Button</Button>,
  sx: {
    '& .BaseDrawer-body': {
      background: 'red',
    },
    '& .BaseDrawer-footer': {
      background: 'green',
    },
    '& .BaseDrawer-header': {
      background: 'lightskyblue',
    },
  },
};

export const HideScrollShadows: StoryFn<BaseDrawerProps> = Template.bind({});
HideScrollShadows.args = {
  footer: <Button>Footer Button</Button>,
  hideTopShadow: true,
  hideBottomShadow: true,
  sx: {
    '& .BaseDrawer-body': {
      background: 'red',
    },
    '& .BaseDrawer-footer': {
      background: 'green',
    },
    '& .BaseDrawer-header': {
      background: 'lightskyblue',
    },
  },
};
