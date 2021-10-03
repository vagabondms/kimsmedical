import React, { ReactElement } from 'react';

import styled from '@emotion/styled';
import { Menu as AMenu, MenuItemProps, MenuProps, SubMenuProps } from 'antd';

const { Item: AItem, SubMenu: ASubMenu } = AMenu;

//! Menu
interface TMenuProps extends MenuProps {}

const StyledMenu = styled(AMenu)<TMenuProps>`
  justify-content: right;
  width: calc(100% - 200px);
`;

const Menu = ({ children, ...rest }: MenuProps): ReactElement => {
  return (
    <StyledMenu {...rest} mode="horizontal">
      {children}
    </StyledMenu>
  );
};

//! Item
interface TItemProps extends MenuItemProps {}

const StyledItem = styled(AItem)<MenuItemProps>``;

const Item = ({ children, ...rest }: TItemProps): ReactElement => {
  return <StyledItem {...rest}>{children}</StyledItem>;
};

//! SubMenu
interface TSubMenuProps extends SubMenuProps {}

const StyledSubMenu = styled(ASubMenu)<SubMenuProps>`
  font-size: 20px;
`;

const SubMenu = ({ children, ...rest }: TSubMenuProps): ReactElement => {
  return <StyledSubMenu {...rest}>{children}</StyledSubMenu>;
};

export { SubMenu, Menu, Item };
