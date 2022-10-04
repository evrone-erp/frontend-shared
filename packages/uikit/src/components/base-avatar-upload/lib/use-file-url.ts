import { noop } from 'lodash';
import { useEffect, useState } from 'react';

export function useFileUrl(file?: File) {
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setUrl(newUrl);
      return () => URL.revokeObjectURL(newUrl);
    }
    setUrl(undefined);
    return noop;
  }, [file]);

  return url;
}
