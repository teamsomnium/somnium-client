import { css } from '@emotion/react'
import { DreamItem } from '~/components'

export default function Dream() {
  return (
    <div css={Block}>
      <DreamItem pin={true} />
      <DreamItem pin={false} />
      <DreamItem pin={false} />
      <DreamItem pin={false} />
    </div>
  )
}

const Block = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  row-gap: 2rem;
  margin-top: 1rem;
`
