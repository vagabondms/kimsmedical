import isPropValid from '@emotion/is-prop-valid';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Divider as ADivider, DividerProps } from 'antd';

interface TDividerProps extends DividerProps {
  dividerType?: string;
}

const dividerTypeCss = ({ dividerType }: TDividerProps) => {
  switch (dividerType) {
    case 'none': {
      return css`
        border-top: none;
        border-left: none;
      `;
    }
    default:
      break;
  }
};

const StyledDivider = styled(ADivider, { shouldForwardProp: isPropValid })<TDividerProps>`
  ${dividerTypeCss}
`;
const Divider = ({ children, ...rest }: TDividerProps) => {
  return <StyledDivider {...rest}>{children}</StyledDivider>;
};

export { Divider };
