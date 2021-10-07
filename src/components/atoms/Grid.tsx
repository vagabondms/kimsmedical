import styled from '@emotion/styled';
import { Col as ACol, Row as ARow, ColProps, RowProps } from 'antd';

// * ROW
interface TRowProps extends RowProps {}

const StyledRow = styled(ARow)<TRowProps>``;

const Row = ({ children, ...rest }: TRowProps) => {
  return <StyledRow {...rest}>{children}</StyledRow>;
};
// * COL
interface TColProps extends ColProps {}

const StyledCol = styled(ACol)<TColProps>``;

const Col = ({ children, ...rest }: TColProps) => {
  return <StyledCol {...rest}>{children}</StyledCol>;
};

export { Row, Col };
