import React, { ReactElement } from 'react';

import GlobalStyles from '@/global-styles';
import { Content, Footer, Layout } from '@components/atoms';
import Header from '@containers/App/Header';
import Nav from '@containers/App/Nav';
import { Button, Menu, PageHeader } from 'antd';
import './App.less';

function App(): ReactElement {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header>
          <Button type="primary">Admin</Button>
          <div>Sitemap</div>
          <div>Sitemap</div>
          <div>Sitemap</div>
          <div>Sitemap</div>
        </Header>
        <Content>content outside PageHeader</Content>
        <Footer>hee</Footer>
      </Layout>
      <div>test</div>
    </>
  );
}

export default App;
