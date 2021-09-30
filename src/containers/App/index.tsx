import React, { ReactElement } from 'react';

import { Content, Footer, Header, Layout } from '@components/atoms';

function App(): ReactElement {
  return (
    <>
      <Layout>
        <Header>hi</Header>
        <Content>ho</Content>
        <Footer>hee</Footer>
      </Layout>
      <div>test</div>
    </>
  );
}

export default App;
