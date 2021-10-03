import React, { ReactElement } from 'react';

import { Header, Item, Menu, Nav, Space, Text } from '@components/atoms';
const index = (): ReactElement => {
  return (
    <Header>
      <Space style={{ marginRight: '20px' }}>
        <Text>Admin</Text>
        <Text>Sitemap</Text>
      </Space>
    </Header>
  );
};

export default index;
