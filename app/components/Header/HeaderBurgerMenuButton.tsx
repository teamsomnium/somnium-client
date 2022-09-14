import * as I from '~/assets';
import { css } from '@emotion/react';

interface Props {
  onClick?: () => void;
}

export default function HeaderBurgerMenuButton({ onClick }: Props) {
  return (
    <button css={Block} onClick={onClick}>
      <I.BurgerMenu />
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
  margin-right: -0.8rem;
`;
