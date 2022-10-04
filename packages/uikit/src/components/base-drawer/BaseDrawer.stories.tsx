import React from 'react';
import { fill } from 'lodash';
import { Button, Typography } from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';

import { useBooleanState } from '@evrone-erp/react-std';

import { BaseDrawer, BaseDrawerProps } from './BaseDrawer';

export default {
  title: 'UI/BaseDrawer',
  component: BaseDrawer,
} as ComponentMeta<typeof BaseDrawer>;

function Template({ open, ...props }: Partial<BaseDrawerProps>) {
  const drawerOpen = useBooleanState(open ?? false);
  return (
    <>
      <Button onClick={drawerOpen.setTrue}>Open</Button>
      <BaseDrawer
        title="Title"
        {...props}
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

export const Main: Story = Template.bind({});
Main.args = {
  open: true,
};

export const WithFooter: Story = Template.bind({});
WithFooter.args = {
  footer: <Button>Footer Button</Button>,
};

export const CustomizeInnerComponents: Story = Template.bind({});
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

export const HideScrollShadows: Story = Template.bind({});
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
