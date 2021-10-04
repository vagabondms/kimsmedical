import React, { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

//! Menu

const StyledMenu = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

interface MenuProps {
  children: ReactNode;
}

const Menu = ({ children }: MenuProps): ReactElement => {
  return <StyledMenu>{children}</StyledMenu>;
};

//! Item

const StyledSubMenu = styled.li`
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 42px;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  position: relative;

  ::after {
    content: '';
    background-color: green;
    position: absolute;
    top: 30px;
    left: 50%;
    width: 0;
    height: 3px;
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }

  :hover {
    ::after {
      width: 100%;
      display: inline-block;
      opacity: 1;
      margin-left: -50%;
    }
  }
`;

interface TItemProps {
  children: ReactNode;
  to: string;
}
const Item = ({ children, to }: TItemProps) => {
  return (
    <StyledSubMenu>
      <StyledLink to={to}>{children}</StyledLink>
    </StyledSubMenu>
  );
};

export { Item, Menu };
