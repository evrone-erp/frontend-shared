import React from 'react';

import type { Sx } from 'design-system';

import type { Tab, TabId } from './types';
import { useTabCenterOffset } from './lib/use-tab-center-offset';
import { TabItem } from './view/TabItem';
import { TabsContainer } from './view/TabsContainer';
import { TabsRow } from './view/TabsRow';

export type BaseTabsProps = {
  sx?: Sx;
  className?: string;
  tabs: Tab[];
  gap?: number;
  activeTabId?: TabId;
  onChangeActiveTabId?: (tabId?: TabId) => void;
};

export function BaseTabs({ sx, className, tabs, gap = 5, onChangeActiveTabId, activeTabId }: BaseTabsProps) {
  const { getTabCenterOffset, getTabRef } = useTabCenterOffset(tabs, gap);

  const renderTab = (tab: Tab) => (
    <TabItem
      active={activeTabId === tab.id}
      onClick={() => onChangeActiveTabId?.(tab.id)}
      tabRef={getTabRef(tab.id)}
      key={tab.id}
      {...tab}
    />
  );

  return (
    <TabsContainer className={className} sx={sx}>
      <TabsRow gap={gap} currentTabOffset={getTabCenterOffset(activeTabId)}>
        {tabs.map(renderTab)}
      </TabsRow>
    </TabsContainer>
  );
}
