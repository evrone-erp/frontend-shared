import type { MutableRefObject } from 'react';
import { useBooleanState, useIsomorphicLayoutEffect } from '@evrone-erp/react-std';

export function useOverflow(ref: MutableRefObject<HTMLParagraphElement | null>) {
  const overflow = useBooleanState(false);
  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    const isOverflow = element ? element.scrollHeight > element.offsetHeight : false;
    overflow.set(isOverflow);
  }, [ref.current]);

  return overflow.is;
}
