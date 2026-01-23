import type { ReactNode } from 'react';
import React, { createContext, useState, useMemo } from 'react';

type SubmenuId = symbol | undefined;

type SubmenuContextProps = {
  anchorEl: HTMLElement | null;
  menuIsOpen: boolean;
  onCloseMenu?: () => void;
  children: ReactNode;
};

type SubmenuContextValue = {
  anchorEl: HTMLElement | null;
  menuIsOpen: boolean;
  submenuId: SubmenuId;
  onCloseMenu?: () => void;
  setSubmenuId: (id: SubmenuId) => void;
};

const defaultValue = {
  anchorEl: null,
  menuIsOpen: false,
  submenuId: undefined,
  onCloseMenu: undefined,
  setSubmenuId: () => {},
};

export const SubmenuContext = createContext<SubmenuContextValue>(defaultValue);

export function SubmenuProvider({ onCloseMenu, menuIsOpen, anchorEl, children }: SubmenuContextProps) {
  const [submenuId, setSubmenuId] = useState<SubmenuId>(undefined);

  const contextValue = useMemo(
    () => ({
      onCloseMenu,
      menuIsOpen,
      anchorEl,
      submenuId,
      setSubmenuId,
    }),
    [onCloseMenu, menuIsOpen, anchorEl, submenuId, setSubmenuId],
  );

  return <SubmenuContext.Provider value={contextValue}>{children}</SubmenuContext.Provider>;
}
