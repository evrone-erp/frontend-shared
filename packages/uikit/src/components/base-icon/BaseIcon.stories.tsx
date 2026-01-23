import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { IconType } from 'components/base-icon/icons';
import { icons } from 'components/base-icon/icons';
import type { BaseIconProps } from './BaseIcon';
import { BaseIcon } from './BaseIcon';

export default {
  title: 'UI/BaseIcon',
  component: BaseIcon,
} as Meta<typeof BaseIcon>;

function Template(props: BaseIconProps) {
  return <BaseIcon {...props} type="plus" />;
}

export const InText: StoryFn<BaseIconProps> = Template.bind({});
InText.args = {
  type: 'plus',
};

InText.decorators = [
  (StoryComponent) => (
    <div style={{ color: 'lightskyblue', fontSize: '24px' }}>
      Hello icon <StoryComponent />
    </div>
  ),
];

export const Plus: StoryFn<BaseIconProps> = Template.bind({});
Plus.args = {
  type: 'plus',
  size: 60,
  color: 'element-2',
};

export const Choice: StoryFn<BaseIconProps> = Template.bind({});
Choice.args = {
  type: 'choice',
  size: 60,
  color: 'element-2',
};
export const Date: StoryFn<BaseIconProps> = Template.bind({});
Date.args = {
  type: 'date',
  size: 60,
  color: 'element-2',
};

function AllIconsTemplate(props: BaseIconProps) {
  return (
    <div>
      {Object.keys(icons).map((type) => (
        <span key={type} style={{ padding: '10px', border: '1px solid' }}>
          <BaseIcon {...props} type={type as IconType} />
        </span>
      ))}
    </div>
  );
}
export const Icons: StoryFn<BaseIconProps> = AllIconsTemplate.bind({});
Icons.args = {
  color: 'element-2',
};
