import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { BaseDialog, BaseDialogProps } from 'components/base-dialog/BaseDialog';
import { useBooleanState } from '@evrone-erp/react-std';
import { BaseButton } from 'components/base-button';
import { Typography } from '@mui/material';

export default {
  title: 'UI/BaseDialog',
  component: BaseDialog,
} as ComponentMeta<typeof BaseDialog>;

function Template(props: BaseDialogProps): JSX.Element {
  const { open, ...restProps } = props;
  const { is, toggle } = useBooleanState(open);

  return (
    <>
      {!is && <BaseButton onClick={toggle}>Open!</BaseButton>}
      <BaseDialog open={is} onClose={toggle} {...restProps} />
    </>
  );
}

export const Base: Story<BaseDialogProps> = Template.bind({});

Base.args = {
  children: 'Base dialog!',
};

export const BaseWithHeader: Story<BaseDialogProps> = Template.bind({});

BaseWithHeader.args = {
  children: 'Base dialog with header!',
  header: <Typography>Header</Typography>,
};
