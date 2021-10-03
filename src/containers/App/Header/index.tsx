import React, { ReactElement } from 'react';

import { Header } from '@components/atoms';
import { LayoutProps } from 'antd';

const index = ({ children }: LayoutProps): ReactElement => {
  return <Header style={{ borderBottom: '1px solid grey', justifyContent: 'right', display: 'flex' }}>{children}</Header>;
};

export default index;
