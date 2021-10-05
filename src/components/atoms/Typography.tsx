import React, { ReactElement, ReactNode } from 'react';

import styled from '@emotion/styled';
import { Typography as ATypography } from 'antd';

const { Text: AText, Paragraph: AParagraph } = ATypography;

const Text = ({ children }: { children: ReactNode }): ReactElement => {
  return <AText>{children}</AText>;
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
