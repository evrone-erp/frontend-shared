import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { Sx } from 'design-system';

import { FieldLabel } from './view/FieldLabel';
import { DropZone } from './view/DropZone';
import { FileLine } from './view/FileLine';
import { FieldRoot } from './view/FieldRoot';
import { AddButton } from './view/AddButton';
import { Loader } from './view/Loader';
import { useFilesCompressor } from './lib/use-files-compressor';

export type BaseFileFieldProps = {
  label?: string;
  value?: File[];
  onChange?: Dispatch<SetStateAction<File[]>>;
  sx?: Sx;
  className?: string;
};
export function BaseFileField({ label, onChange, value, sx, className }: BaseFileFieldProps) {
  const { isLoadingCompress, compress } = useFilesCompressor();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const compressedFiles = await compress(acceptedFiles);
      onChange?.((f) => [...f, ...compressedFiles]);
    },
    [onChange, compress],
  );

  const deleteFile = useCallback(
    (index: number) => {
      onChange?.((f) => {
        const res = [...f];
        res.splice(index);
        return res;
      });
    },
    [onChange],
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
  });

  return (
    <FieldRoot sx={sx} className={className}>
      <Loader isLoading={isLoadingCompress} />
      <FieldLabel label={label} button={<AddButton onClick={open} />} />
      <DropZone rootProps={getRootProps()} inputProps={getInputProps()} />
      {value?.map((file, index) => (
        <FileLine name={file.name} key={file.name} onDelete={() => deleteFile(index)} />
      ))}
    </FieldRoot>
  );
}
