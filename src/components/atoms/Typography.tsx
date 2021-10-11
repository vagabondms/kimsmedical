import React, { ReactElement, ReactNode } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { animationType, TWithAnimation } from '@styles/css';
import { Typography as ATypography } from 'antd';
import { TextProps } from 'antd/lib/typography/Text';
import { TitleProps } from 'antd/lib/typography/Title';
const { Text: AText, Paragraph: AParagraph, Title: ATitle } = ATypography;

interface TTextProps extends TextProps, TWithAnimation {
  textType?: string;
}

const textTypeToCss = ({ textType }: TTextProps) => {
  switch (textType) {
    case 'main': {
      return css`
        font-size: 20px;
      `;
    }

    default:
      return null;
  }
};

const StyledText = styled(AText)<TTextProps>`
  ${animationType}
  ${textTypeToCss}
`;

const Text = ({ children, ...rest }: TTextProps): ReactElement => {
  return <StyledText {...rest}>{children}</StyledText>;
};

interface TTitleProps extends TitleProps, TWithAnimation {
  textType?: string;
}

const StyledTitle = styled(ATitle)<TTitleProps>`
  ${animationType}

  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = ({ children, ...rest }: TTitleProps): ReactElement => {
  return <StyledTitle {...rest}>{children}</StyledTitle>;
};

const Paragraph = ({}): ReactElement => {
  return <AParagraph></AParagraph>;
};

export { Text, Title, Paragraph };
