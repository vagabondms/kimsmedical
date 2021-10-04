import React, { ReactElement } from 'react';

import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';
const GlobalStyles = (): ReactElement => (
  <Global
    styles={css`
      ${emotionReset}
      html,
      body {
        /* font */
        font-family: Spoqa Han Sans Neo, sans-serif !important;
      }
    `}
  ></Global>
);

export default GlobalStyles;
