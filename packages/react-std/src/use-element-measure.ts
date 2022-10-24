import { useMemo, useState } from 'react';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';
import { isBrowser } from './utils';

export type UseMeasureRect = Pick<
  DOMRectReadOnly,
  'x' | 'y' | 'top' | 'left' | 'right' | 'bottom' | 'height' | 'width'
>;
export type UseMeasureResult = UseMeasureRect;

const defaultState: UseMeasureRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

function useElementMeasure(element: HTMLElement): UseMeasureResult {
  const [rect, setRect] = useState<UseMeasureRect>(defaultState);

  const observer = useMemo(
    () =>
      new (window as any).ResizeObserver((entries: ResizeObserverEntry[]) => {
        if (entries[0]) {
          const { x, y, width, height, top, left, bottom, right } = entries[0].contentRect;
          setRect({ x, y, width, height, top, left, bottom, right });
        }
      }),
    [],
  );

  useIsomorphicLayoutEffect(() => {
    if (!element) return;
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [element]);

  return rect;
}

const useElementMeasureExport =
  isBrowser && typeof (window as any).ResizeObserver !== 'undefined' ? useElementMeasure : () => defaultState;

export { useElementMeasureExport as useElementMeasure };
