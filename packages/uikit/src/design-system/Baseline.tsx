import { styled, CssBaseline } from '@mui/material';

import { fontFaces } from './font-faces';

export const Baseline = styled(CssBaseline)`
  ${fontFaces}

  body {
    font-family: SuisseIntl, sans-serif;
  }
`;
