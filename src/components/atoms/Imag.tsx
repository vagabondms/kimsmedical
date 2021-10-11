import styled from '@emotion/styled';
import { Image as AImage, ImageProps } from 'antd';
interface TImageProps extends ImageProps {}

const StyledImage = styled(AImage)<TImageProps>``;

const Image = ({ children, ...rest }: TImageProps) => {
  return (
    <StyledImage preview={false} {...rest}>
      {children}
    </StyledImage>
  );
};

export { Image };
