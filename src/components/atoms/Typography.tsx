import React, { ReactElement, ReactNode } from 'react';

import styled from '@emotion/styled';
import { animationType, TWithAnimation } from '@styles/css';
import { Typography as ATypography } from 'antd';
import { TextProps } from 'antd/lib/typography/Text';
const { Text: AText, Paragraph: AParagraph } = ATypography;

interface TTextProps extends TextProps, TWithAnimation {}

const StyledText = styled(AText)<TTextProps>`
  ${animationType}
`;

const Text = ({ children, ...rest }: TTextProps): ReactElement => {
  return <StyledText {...rest}>{children}</StyledText>;
};

const StyledTitle = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = ({ children }: { children: ReactNode }): ReactElement => {
  return <StyledTitle>{children}</StyledTitle>;
};

const Paragraph = ({}): ReactElement => {
  return <AParagraph></AParagraph>;
};

export { Text, Title, Paragraph };
