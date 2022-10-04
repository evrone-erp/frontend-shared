import { useLayoutEffect, useState } from 'react';

import { useGetRef } from '@evrone-erp/react-std';

import type { TabId, Tab } from 'components/base-tabs/types';

type TabWidths = Record<TabId, number>;

export function useTabsWidths(tabs: Tab[]) {
  const [tabWidths, setTabWidths] = useState<TabWidths>({});

  const getTabRef = useGetRef<HTMLButtonElement>();

  useLayoutEffect(() => {
    const newWidths: TabWidths = {};

    tabs.forEach((tab) => {
      const tabElement = getTabRef(tab.id).current;
      const width = tabElement?.offsetWidth ?? undefined;
      if (width) {
        newWidths[tab.id] = width;
      }
    });

    setTabWidths(newWidths);
  }, [tabs, getTabRef, setTabWidths]);

  return {
    getTabRef,
    tabSizes: tabWidths,
  };
}
