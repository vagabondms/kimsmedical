import React, { ReactElement } from 'react';

import styled from '@emotion/styled';
import { Layout, LayoutProps } from 'antd';

const { Content, Header: AHeader, Footer } = Layout;

//* Header
interface HeaderProps extends LayoutProps {}

const StyledHeader = styled(AHeader)<LayoutProps>`
  display: flex;

  /* border-bottom: 1px solid grey; */
  width: 100%;
  justify-content: right;
  background-color: #fff;
  height: 20px;
`;

const Header = ({ children, ...rest }: HeaderProps): ReactElement => {
  return <StyledHeader {...rest}>{children}</StyledHeader>;
};

//* Nav
interface NavProps extends LayoutProps {}

const StyledNav = styled(AHeader)<LayoutProps>`
  background-color: #fff;
  display: flex;
`;

const Nav = ({ children, ...rest }: NavProps): ReactElement => {
  return <StyledNav {...rest}>{children}</StyledNav>;
};

export { Layout, Content, Header, Footer, Nav };
export type { HeaderProps };
