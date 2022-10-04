import { useIsomorphicLayoutEffect } from '@evrone-erp/react-std';
import { useState, useRef } from 'react';

export function useElementLineHeight() {
  const [lineHeight, setLineHeight] = useState<number>();

  const ref = useRef<HTMLParagraphElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const lineHeightNumber = parseInt(getComputedStyle(element).lineHeight, 10);
    setLineHeight(lineHeightNumber);
  }, [ref]);
  return [lineHeight, ref] as const;
}
