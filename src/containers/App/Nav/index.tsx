import React, { ReactElement } from 'react';

import { Item, Menu, Nav, SubMenu } from '@components/atoms';
import Logo from '@components/molecules/Logo';

const MenuItems = ['의원소개', '진료정보', '검사항목', '검사 예약/준비', '공지사항'];

const index = (): ReactElement => {
  return (
    <Nav>
      <Logo />
      <Menu>
        {MenuItems.map((item) => (
          <SubMenu key={item} title={item}></SubMenu>
        ))}
      </Menu>
    </Nav>
  );
};

export default index;
