import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '@/global-styles';
import { Footer, Layout } from '@components/atoms';
import Header from '@containers/App/Header';
import Routes from '@system/routes';
import 'antd/dist/antd.css';
import '../../App.less';
function App(): ReactElement {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <BrowserRouter>
          <Header />
          <Routes />
          <Footer>
            <div>designed by vagabondms</div>
            <div>Admin</div>
          </Footer>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
