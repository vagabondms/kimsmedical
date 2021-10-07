import React, { ReactElement } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Layout, LayoutProps } from 'antd';

const { Content: AContent, Header: AHeader, Footer: AFooter } = Layout;

//* Common
// Header, Content, Footer에 기본적으로 1200px width를 맞춰주는 wrapper
const LayoutInner = styled.div`
  max-width: 1200px;
  margin: auto;
  height: 100%;
  display: flex;
`;
// Layout 요소들의 공통 스타일
const LayoutCommonStyle = css`
  background-color: #fff;
  width: 100%;
  padding: 0;
  line-height: normal;
`;

//* Header
interface HeaderProps extends LayoutProps {}

const StyledHeader = styled(AHeader)<LayoutProps>`
  ${LayoutCommonStyle}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  height: 100px;
`;

const HeaderLayoutInner = styled(LayoutInner)`
  justify-content: space-between;
  flex-direction: row;

  ul {
    float: right;
  }
`;

const Header = ({ children, ...rest }: HeaderProps): ReactElement => {
  return (
    <StyledHeader {...rest}>
      <HeaderLayoutInner>{children}</HeaderLayoutInner>
    </StyledHeader>
  );
};

//* content

interface ContentProps extends LayoutProps {}

const StyledContent = styled(AContent)<LayoutProps>`
  ${LayoutCommonStyle}

  /* 페이지 만들어지면 빼기. */
  height: 1000px;
  padding-top: 100px;
`;

const ContentLayoutInner = styled(LayoutInner)`
  flex-direction: column;
`;

const Content = ({ children, ...rest }: ContentProps): ReactElement => {
  return (
    <StyledContent {...rest}>
      <ContentLayoutInner>{children}</ContentLayoutInner>
    </StyledContent>
  );
};

//* footer

interface FooterProps extends LayoutProps {}

const StyledFooter = styled(AFooter)<LayoutProps>`
  ${LayoutCommonStyle}
`;

const FooterLayoutInner = styled(LayoutInner)``;

const Footer = ({ children, ...rest }: FooterProps): ReactElement => {
  return (
    <StyledFooter {...rest}>
      <FooterLayoutInner>{children}</FooterLayoutInner>
    </StyledFooter>
  );
};
export { Layout, Content, Footer, Header };
export type { HeaderProps };
