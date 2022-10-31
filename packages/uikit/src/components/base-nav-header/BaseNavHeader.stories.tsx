import { ComponentMeta, Story } from '@storybook/react';
import { BaseTextButton } from 'components/base-text-button';
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { BaseNavHeader, BaseNavHeaderProps } from './BaseNavHeader';
import { AccountButton } from './view/AccountButton';

export default {
  title: 'UI/BaseNavHeader',
  component: BaseNavHeader,
} as ComponentMeta<typeof BaseNavHeader>;

const Template = (props: BaseNavHeaderProps): JSX.Element => <BaseNavHeader {...props} />;

export const UnauthorizedMode: Story<BaseNavHeaderProps> = Template.bind({});

export const AuthorizedMode: Story<BaseNavHeaderProps> = () => {
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
