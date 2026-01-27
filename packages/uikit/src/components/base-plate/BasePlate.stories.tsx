// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Box } from '@mui/material';

import { BaseTextButton } from 'components/base-text-button';
import { BaseCheckBox } from 'components/base-check-box';
import { BaseButton } from 'components/base-button';
import { BaseLink } from 'components/base-link';

import type { BasePlateProps } from './BasePlate';
import { BasePlate } from './BasePlate';
import { BasePlateHeader } from './BasePlateHeader';
import { BasePlateFooter } from './BasePlateFooter';

export default {
  title: 'UI/BasePlate',
  component: BasePlate,
  subcomponents: { BasePlateHeader },
  parameters: {
    controls: {
      exclude: ['className', 'sx'],
    },
  },
} as Meta<typeof BasePlate>;

function Template(props: BasePlateProps) {
  return <BasePlate {...props} />;
}

export const Main: StoryFn<BasePlateProps> = Template.bind({});
Main.args = {
  sx: {
    with: '100px',
    height: '100px',
  },
};

export const Pressable: StoryFn<BasePlateProps> = Template.bind({});
Pressable.args = {
  pressable: true,
  sx: {
    with: '100px',
    height: '100px',
  },
};

export const WithHeader1: StoryFn<BasePlateProps> = Template.bind({});
WithHeader1.args = {
  children: (
    <BasePlateHeader
      title="Payout"
      subtitle="2022 August"
      inlineSubtitle
      action={<BaseButton icon="plus">Add expense</BaseButton>}
    />
  ),
};

export const WithHeader2: StoryFn<BasePlateProps> = Template.bind({});
WithHeader2.args = {
  children: (
    <BasePlateHeader title="Account manager" subtitle="Middle+" link={<BaseLink href="#">How to lvlup</BaseLink>} />
  ),
};

export const WithHeaderAndFooter: StoryFn<BasePlateProps> = Template.bind({});
WithHeaderAndFooter.args = {
  children: (
    <>
      <BasePlateHeader title="Account manager" subtitle="Middle+" link={<BaseLink href="#">How to lvlup</BaseLink>} />
      <Box component="p" typography="title-2">
        Important information. Absolutly.
      </Box>
      <BasePlateFooter
        primaryAction={<BaseTextButton>Click here!</BaseTextButton>}
        primaryActionComment="Comment for action"
        secondaryAction={<BaseCheckBox label="Is true?" sx={{ marginRight: 0 }} />}
      />
    </>
  ),
};

export const WithLoading: StoryFn<BasePlateProps> = Template.bind({});
WithLoading.args = {
  children: (
    <BasePlateHeader title="Account manager" subtitle="Middle+" link={<BaseLink href="#">How to lvlup</BaseLink>} />
  ),
  loading: true,
};
