import { css } from '@emotion/react'
import { type PropsWithChildren } from 'react'

export default function ProgressBar({ children }: PropsWithChildren) {
  return <div css={Block}>{children}</div>
}

const Block = css`
  width: 100%;
  height: 0.5rem;
  margin: 1rem 0;
  background: #d9d9d9;
  border-radius: 0.5rem;
`
