import { css } from '@emotion/react'

interface Props {
  numberOfPages: number
  description: string
  username: string
}

export default function Label({ numberOfPages, description, username }: Props) {
  return (
    <div css={Block}>
      <div css={PageNumber}>
        <span css={Highlight}>{numberOfPages}</span>/2
      </div>
      <div css={Description}>
        <div css={Username}>{username}님,</div>
        {description}
      </div>
    </div>
  )
}

const Block = css`
  width: 100%;
  padding: 1.8rem 0;
`

const PageNumber = css`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const Highlight = css`
  color: #86a8ff;
  font-size: inherit;
  font-weight: inherit;
`

const Description = css`
  font-size: 1.6rem;
  font-weight: 600;
`

const Username = css`
  font-size: inherit;
  font-weight: inherit;
`
