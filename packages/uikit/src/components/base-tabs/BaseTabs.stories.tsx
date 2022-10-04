import { Theme } from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { BaseTabs, BaseTabsProps } from './BaseTabs';

export default {
  title: 'UI/BaseTabs',
  component: BaseTabs,
} as ComponentMeta<typeof BaseTabs>;

function Template({ activeTabId, ...props }: Partial<BaseTabsProps>) {
  const [activeTabState, setActiveTabState] = useState(activeTabId);
  return <BaseTabs tabs={[]} {...props} onChangeActiveTabId={setActiveTabState} activeTabId={activeTabState} />;
}

export const Main: Story = Template.bind({});
Main.args = {
  tabs: [
    { id: '1', label: 'Tab1' },
    { id: '2', label: 'Tabbbb2' },
    { id: '3', label: 'Tabbbbbbbbb3' },
    { id: '4', label: 'Tab4' },
    { id: '5', label: 'Tabbbb5' },
    { id: '6', label: 'Tabbbbbbbbb6' },
  ],
};

export const Customization: Story = Template.bind({});
Customization.args = {
  tabs: [
    { id: '2020', label: '2020' },
    { id: '2021', label: '2021' },
    { id: '2022', label: '2022' },
  ],
  gap: 40,
  sx: {
    '& .BaseTabs-item': {
      fontWeight: 600,
      fontSize: '100px',
      lineHeight: '100%',
      letterSpacing: '-0.01em',
      color: (theme: Theme) => theme.palette['element-0'],
    },
    '& .BaseTabs-item.BaseTabs-item--active': {
      color: (theme: Theme) => theme.palette['element-2'],
    },
  },
  activeTabId: '2021',
};
