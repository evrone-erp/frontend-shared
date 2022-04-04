import React, { useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

import { Sx } from "design-system";

import { useFileUrl } from "./lib/use-file-url";
import { AvatarContainer } from "./view/AvatarContainer";
import { AvatarSkeleton } from "./view/AvatarSkeleton";

export type BaseAvatarUploadProps = {
  sx?: Sx;
  className?: string;
  value?: File;
  onChange?: (file?: File) => void;
  isLoading?: boolean;
};

export function BaseAvatarUpload({
  sx,
  className,
  onChange,
  value,
  isLoading,
}: BaseAvatarUploadProps) {
  const onDrop = useCallback(
    (files: File[]) => onChange?.(files[0]),
    [onChange]
  );
  const { getInputProps, getRootProps } = useDropzone({ onDrop });
  const src = useFileUrl(value);

  return (
    <AvatarContainer rootProps={getRootProps()} sx={sx} className={className}>
      <input accept="image/*" {...getInputProps()} />
      {src && <Image layout="fill" src={src} alt="avatar" />}
      {isLoading && <AvatarSkeleton />}
    </AvatarContainer>
  );
}
