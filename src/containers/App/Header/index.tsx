import React, { ReactElement } from 'react';

import { Header, Item, Menu } from '@components/atoms';
import Logo from '@components/molecules/Logo';
import path from '@system/constants/paths';
const index = (): ReactElement => {
  return (
    <Header>
      <Logo />
      <Menu>
        <Item key={path.introduce.title} to={path.introduce.path}>
          의원 소개
        </Item>
        <Item key={path.information.title} to={path.information.path}>
          진료정보
        </Item>
        <Item key={path.reservation.title} to={path.reservation.path}>
          검사 예약/준비
        </Item>
        <Item key={path.notice.title} to={path.notice.path}>
          공지사항
        </Item>
        <Item key={path.tour.title} to={path.tour.path}>
          둘러보기
        </Item>
        <Item key={path.map.title} to={path.map.path}>
          오시는길
        </Item>
      </Menu>
    </Header>
  );
};

export default index;
