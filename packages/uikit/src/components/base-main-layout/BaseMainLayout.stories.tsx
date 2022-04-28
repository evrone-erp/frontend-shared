import { ComponentMeta, Story } from "@storybook/react";
import React, { PropsWithChildren } from "react";
import { BaseNavHeader } from "../base-nav-header";
import { BaseMainLayout, BaseMainLayoutProps } from "./BaseMainLayout";
import { BasePlate, BasePlateHeader } from "components/base-plate";
import { BaseGrid } from "components/base-grid/BaseGrid";

export default {
  title: "UI/BaseMainLayout",
  component: BaseMainLayout,
} as ComponentMeta<typeof BaseMainLayout>;

function Template({
  children,
  ...props
}: PropsWithChildren<BaseMainLayoutProps>): JSX.Element {
  return <BaseMainLayout {...props}>{children}</BaseMainLayout>;
}

export const Main: Story<PropsWithChildren<BaseMainLayoutProps>> =
  Template.bind({});
Main.args = {
  header: <BaseNavHeader hideThemeToggle />,
  children: (
    <BaseGrid container>
      <BaseGrid item tab={6}>
        <BasePlate>
          <BasePlateHeader title="Plate title" />
          <span>some content</span>
        </BasePlate>
      </BaseGrid>
      <BaseGrid item tab={6}>
        <BasePlate>
          <BasePlateHeader title="Plate title" />
          <span>some content</span>
        </BasePlate>
      </BaseGrid>
      <BaseGrid item tab={6}>
        <BasePlate>
          <BasePlateHeader title="Plate title" />
          <span>some content</span>
        </BasePlate>
      </BaseGrid>
      <BaseGrid item tab={6}>
        <BasePlate>
          <BasePlateHeader title="Plate title" />
          <span>some content</span>
        </BasePlate>
      </BaseGrid>
    </BaseGrid>
  ),
};
