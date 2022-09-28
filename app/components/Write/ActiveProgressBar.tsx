import { css } from '@emotion/react'

interface Props {
  step: number
}

export default function ActiveProgressBar({ step }: Props) {
  return <div css={Block(step)}></div>
}

const Block = (step: number) => css`
  width: calc(50% * ${step});
  height: 0.5rem;
  background: #86a8ff;
  border-radius: 0.5rem;
`
