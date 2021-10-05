import React from 'react';

import styled from '@emotion/styled';
import { Col as ACol, Row as ARow, ColProps, RowProps } from 'antd';

export { Col, Row };
//* Col
interface TColParams extends ColProps {}

const StyledCol = styled(ACol)<ColProps>``;

const Col = ({ children, ...rest }: TColParams) => <StyledCol {...rest}>{children}</StyledCol>;

//* Row
interface TRowParams extends RowProps {}

const StyledRow = styled(ARow)<RowProps>``;

const Row = ({ children, ...rest }: TRowParams) => {
  <StyledRow {...rest}>{children}</StyledRow>;
};
