import type { PropsWithChildren } from 'react'
import { css } from '@emotion/react'

const Template = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 48rem;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
`

export default function PageTemplate({ children }: PropsWithChildren) {
  return <main css={Template}>{children}</main>
}
