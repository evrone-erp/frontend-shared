import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { useBooleanState } from '@evrone-erp/react-std';
import { Typography } from '@mui/material';

import type { BaseDialogProps } from 'components/base-dialog';
import { BaseDialog } from 'components/base-dialog';
import { BaseButton } from 'components/base-button';

export default {
  title: 'UI/BaseDialog',
  component: BaseDialog,
} as Meta<typeof BaseDialog>;

function Template(props: BaseDialogProps) {
  const { open = false, children, ...restProps } = props;
  const { is, toggle } = useBooleanState(open);

  return (
    <>
      {!is && <BaseButton onClick={toggle}>Open!</BaseButton>}
      <BaseDialog {...restProps} open={is} onClose={toggle}>
        {children}
      </BaseDialog>
    </>
  );
}

export const Base: StoryFn<BaseDialogProps> = Template.bind({});
Base.args = {
  children: 'Base dialog!',
};

export const BaseWithHeader: StoryFn<BaseDialogProps> = Template.bind({});
BaseWithHeader.args = {
  children: 'Base dialog with header!',
  header: <Typography>Header</Typography>,
};
