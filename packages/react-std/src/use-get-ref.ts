import { createRef, RefObject, useCallback, useRef } from "react";

type Key = string | number;

export function useGetRef<T>() {
  type RefsObject = Record<Key, RefObject<T | null>>;

  const refsObject = useRef<RefsObject>({}).current;

  return useCallback(
    (key: Key) => {
      const ref = refsObject[key];
      if (ref) {
        return ref;
      }

      const newRef = createRef<T | null>();
      refsObject[key] = newRef;
      return newRef;
    },
    [refsObject]
  );
}
