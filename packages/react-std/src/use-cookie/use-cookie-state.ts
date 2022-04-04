import { useCallback, useMemo, useState } from "react";

const getCookie = (serverCookie?: string) => {
  if (typeof window !== "undefined") {
    return document.cookie;
  }
  return serverCookie ?? "";
};

const createCookie = (key: string, value: string, numberOfDays: number) => {
  const now = new Date();
  now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);
  return `${key}=${value}; expires=${now.toUTCString()}; path=/`;
};

export type CookiesState = {
  getByKey<T extends string>(key: string): T | undefined;
  update(key: string, value: string, numberOfDays: number): void;
};

export function useCookieState(serverCookie?: string) {
  const [cookie, setCookie] = useState(() => getCookie(serverCookie));

  const update = useCallback(
    (key: string, value: string, numberOfDays: number) => {
      if (typeof window === "undefined") {
        throw new Error("You can not update cookie on server");
      }
      document.cookie = createCookie(key, value, numberOfDays);
      setCookie(document.cookie);
    },
    []
  );

  const getByKey = useCallback(
    <T extends string>(key: string): T | undefined =>
      cookie.split("; ").reduce((total: T | undefined, currentCookie) => {
        const item = currentCookie.split("=");
        const storedKey = item[0];
        const storedValue = item[1];
        return key === storedKey
          ? (decodeURIComponent(storedValue) as T)
          : total;
      }, undefined),
    [cookie]
  );

  return useMemo(() => ({ getByKey, update }), [getByKey, update]);
}
