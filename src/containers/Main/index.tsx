import React, { ReactElement } from 'react';

import { Col, Content, Divider, Image, Row, Text, Title } from '@components/atoms';
import Hospital from '@images/pictures/hospital.jpeg';
import Inner from '@images/pictures/inner.jpeg';
const Main = (): ReactElement => {
  return (
    <Content>
      <Row style={{ height: 420 }}>
        <Image src={Hospital} />
      </Row>
      <Divider dividerType="none"></Divider>
      <Row justify="center">
        <Title>최선의 진료를 위해 노력하겠습니다.</Title>
      </Row>
      <Row justify="center" style={{ height: 500 }}>
        <Text>10년 맛집!</Text>
      </Row>
      <Divider></Divider>
      <Row animation="fadeInUp" justify="space-between">
        <Col>
          <Image src={Inner}></Image>
        </Col>
        <Col>
          <Image src={Inner}></Image>
        </Col>
      </Row>
      <Divider></Divider>
    </Content>
  );
};

export default Main;
