import { ComponentMeta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { BaseAvatarUpload, BaseAvatarUploadProps } from './BaseAvatarUpload';

export default {
  title: 'UI/BaseAvatarUpload',
  component: BaseAvatarUpload,
} as ComponentMeta<typeof BaseAvatarUpload>;

function Template(props: Partial<BaseAvatarUploadProps>) {
  const [avatar, setAvatar] = useState<File>();
  return <BaseAvatarUpload {...props} value={avatar} onChange={setAvatar} />;
}

export const Main: Story = Template.bind({});
Main.args = {};

export const Loader: Story = Template.bind({});
Loader.args = {
  isLoading: true,
};
