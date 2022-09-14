import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

interface Props {
  position: 'left' | 'right';
}

export default function HeaderSide({
  children,
  position,
}: PropsWithChildren<Props>) {
  return <div css={Block(position)}>{children}</div>;
}

const Block = (position: 'left' | 'right') => css`
  position: absolute;
  ${position}: 1.8rem;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;
