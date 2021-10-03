import React, { ReactElement } from 'react';

import styled from '@emotion/styled';
import { Space as ASpace, SpaceProps } from 'antd';

interface TSpaceProps extends SpaceProps {}

const StyledSpace = styled(ASpace)<SpaceProps>``;

const Space = ({ children, ...rest }: TSpaceProps): ReactElement => {
  return <StyledSpace {...rest}>{children}</StyledSpace>;
};

export { Space };
export type { TSpaceProps };
