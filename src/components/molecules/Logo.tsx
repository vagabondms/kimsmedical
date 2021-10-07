import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Title } from '@components/atoms';

//! Logo는 다른 방식으로 구현하는 방법을 생각해보는 것이 좋을듯

const Logo = (): ReactElement => {
  return (
    <Title>
      <Link to="/">김철우 내과 의원</Link>
    </Title>
  );
};
export default Logo;
