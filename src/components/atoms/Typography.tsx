import React, { ReactElement, ReactNode } from 'react';

import styled from '@emotion/styled';
import { Typography as ATypography, TypographyProps } from 'antd';

const { Text: AText, Title: ATitle, Paragraph: AParagraph } = ATypography;

interface TTypographyProps extends TypographyProps {}

const Typography = ({}: TTypographyProps): ReactElement => {
  return <ATypography></ATypography>;
};
const Text = ({ children }: { children: ReactNode }): ReactElement => {
  return <AText>{children}</AText>;
};

const StyledTitle = styled.div`
  font-size: 30px;
`;

const Title = ({ children }: { children: ReactNode }): ReactElement => {
  return <StyledTitle>{children}</StyledTitle>;
};

const Paragraph = ({}): ReactElement => {
  return <AParagraph></AParagraph>;
};

export { Typography, Text, Title, Paragraph };
