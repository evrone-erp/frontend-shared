import { useTheme } from '@mui/material';
import { useCallback } from 'react';

import type { TabId, Tab } from 'components/base-tabs/types';

import { useTabsWidths } from './use-tabs-widths';

export function useTabCenterOffset(tabs: Tab[], gap: number) {
  const { getTabRef, tabSizes } = useTabsWidths(tabs);
  const theme = useTheme();

  const getTabCenterOffset = useCallback(
    (id?: TabId) => {
      if (!id) return 0;
      let offset = 0;
      for (const tab of tabs) {
        const tabId = tab.id;

        if (id === tabId) {
          offset += (tabSizes[tabId] ?? 0) / 2;
          break;
        }

        offset += gap * parseInt(theme.spacing(), 10) + (tabSizes[tabId] ?? 0);
      }
      return offset;
    },
    [tabSizes, tabs, gap, theme],
  );

  return {
    getTabRef,
    getTabCenterOffset,
  };
}
