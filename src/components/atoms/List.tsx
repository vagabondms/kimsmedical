import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { List as AList, ListProps } from 'antd';

interface TListProps extends ListProps<any> {}

const StyledList = styled(AList)<TListProps>``;

const List = ({ ...rest }: TListProps) => {
  return <StyledList {...rest} />;
};

export { List };
