import React, { ReactElement } from 'react';

import { css, Global } from '@emotion/react';

const GlobalStyles = (): ReactElement => (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;

        /* font */
        font-family: Spoqa Han Sans Neo, sans-serif !important;
      }
    `}
  ></Global>
);

export default GlobalStyles;
