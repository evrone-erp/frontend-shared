import AvatarEdit from 'react-avatar-editor';
import React, { useCallback, useRef, useState } from 'react';
import { BaseButton } from 'components/base-button';
import { styled } from '@mui/material';

export type TAvatarEditorProps = {
  size: number;
  setPreview: (src: string) => void;
  src: string;
};

const StyledContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLabel = styled('label')`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 7px;
`;

export const AvatarEditor = ({ size, setPreview, src }: TAvatarEditorProps) => {
  const editor = useRef<AvatarEdit | null>(null);
  const setAvatarPreview = () => setPreview(editor.current?.getImageScaledToCanvas()?.toDataURL() || '');

  const [rotateDegree, setRotateDegree] = useState(0);
  const onRotate = useCallback(() => setRotateDegree((currentDegree) => currentDegree + 90), []);

  const [scale, setScale] = useState(1);
  const onScale = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => setScale(() => Number(evt.target.value)),
    [],
  );

  return (
    <StyledContainer>
      <AvatarEdit
        onImageReady={setAvatarPreview}
        onImageChange={setAvatarPreview}
        onLoadSuccess={setAvatarPreview}
        borderRadius={200}
        ref={editor}
        scale={scale}
        rotate={rotateDegree}
        image={src}
        width={size}
        height={size}
        backgroundColor="transparent"
        disableHiDPIScaling
        disableBoundaryChecks
      />
      <BaseButton sx={{ marginTop: '10px' }} variant="text" icon="arrow-right" onClick={onRotate}>
        Rotate
      </BaseButton>
      <StyledLabel>
        Scale
        <input type="range" id="scale" name="scale" min="0.1" max="1.5" step={0.1} value={scale} onChange={onScale} />
      </StyledLabel>
    </StyledContainer>
  );
};
