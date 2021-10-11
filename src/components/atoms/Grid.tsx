import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useIsInViewPort } from '@hooks/index';
import { animationType, fadeInUp, TWithAnimation } from '@styles/css';
import { Col as ACol, Row as ARow, ColProps, RowProps } from 'antd';
// * ROW
interface TRowProps extends RowProps, TWithAnimation {}

interface TStyledRowProps extends TRowProps {
  isIn?: boolean;
}
const StyledRow = styled(ARow)<TStyledRowProps>`
  ${({ isIn, animation }) => {
    if (!isIn) {
      return css`
        opacity: 0;
      `;
    }
    return isIn && animationType({ animation });
  }}
`;
const Row = ({ children, ...rest }: TRowProps): ReactElement => {
  const row = useRef(null);

  const [isIn] = useIsInViewPort(row);

  return (
    <StyledRow isIn={isIn} ref={row} {...rest}>
      {children}
    </StyledRow>
  );
};

// * COL
interface TColProps extends ColProps {}

const StyledCol = styled(ACol)<TColProps>``;

const Col = ({ children, ...rest }: TColProps) => {
  return <StyledCol {...rest}>{children}</StyledCol>;
};

export { Row, Col };
