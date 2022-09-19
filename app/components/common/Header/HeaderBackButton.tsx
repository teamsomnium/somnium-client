import * as I from '~/assets';
import { css } from '@emotion/react';

interface Props {
  onClick?: () => void;
}

export default function HeaderBackButton({ onClick }: Props) {
  return (
    <button css={Block} onClick={onClick}>
      <I.LeftArrow />
    </button>
  );
}

const Block = css`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  margin-left: -0.8rem;
  cursor: pointer;
`;
