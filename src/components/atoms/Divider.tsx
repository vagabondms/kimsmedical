import styled from '@emotion/styled';
import { Divider as ADivider, DividerProps } from 'antd';

interface TDividerProps extends DividerProps {}

const StyledDivider = styled(ADivider)<TDividerProps>``;
const Divider = ({ children, ...rest }: TDividerProps) => {
  return <StyledDivider {...rest}>{children}</StyledDivider>;
};

export { Divider };
