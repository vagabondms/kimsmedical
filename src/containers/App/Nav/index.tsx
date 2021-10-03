import React, { ReactElement } from 'react';

import { Header, PageHeader } from '@components/atoms';
import { LayoutProps } from 'antd';

const Nav = ({ children }: LayoutProps): ReactElement => {
  return <Header>{children}</Header>;
};

export default Nav;
