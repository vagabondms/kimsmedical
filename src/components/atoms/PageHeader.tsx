import React, { ReactElement, ReactNode } from 'react';

import { PageHeader as APageHeader, PageHeaderProps as APageHeaderProps } from 'antd';

interface PageHeaderProps extends APageHeaderProps {
  children?: ReactNode;
}

const PageHeader = ({ children, ...props }: PageHeaderProps): ReactElement => {
  return <APageHeader {...props}>{children}</APageHeader>;
};

export { PageHeader };
