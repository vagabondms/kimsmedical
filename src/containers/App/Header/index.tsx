import React, { ReactElement } from 'react';

import { Header, Item, Menu } from '@components/atoms';
import Logo from '@components/molecules/Logo';
import path from '@system/constants/paths';

const paths: string[] = Object.keys(path);

const index = (): ReactElement => {
  return (
    <Header>
      <Logo />
      <Menu>
        {paths.map((page: string) => {
          if (path[page].path === '/') {
            return null;
          }
          return (
            <Item key={path[page].title} to={path[page].path}>
              {path[page].title}
            </Item>
          );
        })}
      </Menu>
    </Header>
  );
};

export default index;
