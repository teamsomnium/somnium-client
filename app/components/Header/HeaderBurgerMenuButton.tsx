import * as I from '~/assets'
import { css } from '@emotion/react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

export default function HeaderBurgerMenuButton({ ...rest }: Props) {
  return (
    <button css={Block} {...rest}>
      <I.BurgerMenu />
    </button>
  )
}

const Block = css`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  margin-right: -0.8rem;
  cursor: pointer;
`
