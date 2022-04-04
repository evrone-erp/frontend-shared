import React, {
  createContext,
  ReactNode,
  useMemo,
  useContext,
  useCallback,
} from "react";
import { CookiesState, useCookieState } from "./use-cookie-state";

const CookiesContext = createContext<CookiesState | null>(null);

type CookiesProviderProps = {
  serverCookies: string | undefined;
  children?: ReactNode;
};

export function CookiesProvider({
  serverCookies,
  children,
}: CookiesProviderProps) {
  return (
    <CookiesContext.Provider value={useCookieState(serverCookies)}>
      {children}
    </CookiesContext.Provider>
  );
}

export function useCookie<T extends string = string>(key: string) {
  const cookiesContext = useContext(CookiesContext);

  if (!cookiesContext)
    throw new Error("You should provide cookiesContext before use");

  const { getByKey, update } = cookiesContext;

  const cookie = useMemo(() => getByKey(key), [key, getByKey]) as T;

  const setCookie = useCallback(
    (value: T, numberOfDays = 30) => {
      update(key, value, numberOfDays);
    },
    [key, update]
  );

  return [cookie, setCookie] as const;
}
