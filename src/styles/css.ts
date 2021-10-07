import { css } from '@emotion/react';

export const fadeInUp = css`
  animation: fadeIn 3s;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(0, 50px);
    }

    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

const animations = ['fadeInUp'] as const;

type animationTypesTuple = typeof animations[number];

export interface TWithAnimation {
  animation?: animationTypesTuple;
}

export const animationType = ({ animation }: TWithAnimation) => {
  switch (animation) {
    case 'fadeInUp':
      return fadeInUp;

    default:
      return null;
  }
};
