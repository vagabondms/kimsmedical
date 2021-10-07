import React, { ReactElement } from 'react';

import { Content, Divider, Image, Row, Text } from '@components/atoms';
import Hospital from '@images/pictures/hospital.jpeg';
const Main = (): ReactElement => {
  return (
    <Content>
      <Row>
        <Image src={Hospital} />
      </Row>
      <Divider></Divider>
      <Row justify="center">
        <Text animation="fadeInUp">최선의 진료를 위해 노력하겠습니다.</Text>
      </Row>
    </Content>
  );
};

export default Main;
