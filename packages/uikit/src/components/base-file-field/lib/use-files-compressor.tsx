import imageCompression from "browser-image-compression";
import { useCallback, useState } from "react";

const compressImage = async (file: File): Promise<File> =>
  imageCompression(file, {
    maxSizeMB: 1,
    useWebWorker: true,
  });

const isImage = (file: File): boolean =>
  file.type.includes("jpeg") || file.type.includes("png");

const compressFile = async (file: File): Promise<File> => {
  if (isImage(file)) return compressImage(file);
  return file;
};

function isFulfilledResult<T>(
  res: PromiseSettledResult<T>
): res is PromiseFulfilledResult<T> {
  return res.status === "fulfilled";
}

export function useFilesCompressor() {
  const [isLoading, setIsLoading] = useState(false);

  const compress = useCallback(async (files: File[]) => {
    setIsLoading(true);
    const converted = await Promise.allSettled(files.map(compressFile));
    setIsLoading(false);

    return converted.filter(isFulfilledResult).map((v) => v.value);
  }, []);

  return {
    compress,
    isLoadingCompress: isLoading,
  };
}
