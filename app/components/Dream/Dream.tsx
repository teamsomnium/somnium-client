import { css } from '@emotion/react'
import { DreamItem } from '~/components'

export default function Dream() {
  return (
    <div css={Block}>
      <DreamItem pin={true} />
    </div>
  )
}

const Block = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem 2.4rem;
  padding-top: 1rem;
`
