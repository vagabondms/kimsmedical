import React, { ReactElement } from 'react';

import GlobalStyles from '@/global-styles';
import { Content, Footer, Layout } from '@components/atoms';
import Header from '@containers/App/Header';
import Nav from '@containers/App/Nav';
import 'antd/dist/antd.css';
import '../../App.less';

function App(): ReactElement {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header />
        <Nav />
        <Content>content outside PageHeader</Content>
        <Footer>designed by vagabondms</Footer>
      </Layout>
    </>
  );
}

export default App;
