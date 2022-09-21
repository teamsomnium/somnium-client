import { css } from '@emotion/react'
import * as I from '~/assets'

interface Props {
  pin: boolean
}

export default function DreamItem({ pin }: Props) {
  return <div css={Block}>{pin ? <I.ColoredPin /> : <I.Pin />}</div>
}

const Block = css`
  width: 21rem;
  height: 21rem;
  background: #d9d9d9;
  border-radius: 1.4rem;
  position: relative;

  svg {
    display: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
  &:hover {
    svg {
      display: block;
    }
  }
`
