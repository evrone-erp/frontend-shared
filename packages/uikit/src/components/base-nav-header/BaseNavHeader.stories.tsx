import type { Meta, StoryFn } from '@storybook/react';
import { BaseTextButton } from 'components/base-text-button';
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import type { BaseNavHeaderProps } from './BaseNavHeader';
import { BaseNavHeader } from './BaseNavHeader';
import { AccountButton } from './view/AccountButton';

export default {
  title: 'UI/BaseNavHeader',
  component: BaseNavHeader,
} as Meta<typeof BaseNavHeader>;

const Template = (props: BaseNavHeaderProps) => <BaseNavHeader {...props} />;

export const UnauthorizedMode: StoryFn<BaseNavHeaderProps> = Template.bind({});

export const AuthorizedMode: StoryFn<BaseNavHeaderProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <BaseNavHeader
      open={open}
      logo={<Typography>Logo</Typography>}
      accountButton={<AccountButton onClick={() => setOpen((state) => !state)} name="alexander" />}
    >
      <BaseTextButton key="Account">Account</BaseTextButton>
      <BaseTextButton>Logout</BaseTextButton>
    </BaseNavHeader>
  );
};
