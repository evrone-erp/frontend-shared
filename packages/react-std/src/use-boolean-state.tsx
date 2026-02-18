import { useCallback, useState } from 'react';

export function useBooleanState(initial: boolean) {
  const [state, setState] = useState(initial);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);

  const setFalse = useCallback(() => {
    setState(false);
  }, []);

  const toggle = useCallback(() => {
    setState((v) => !v);
  }, []);

  return {
    is: state,
    not: !state,
    set: setState,
    setTrue,
    setFalse,
    toggle,
  };
}
