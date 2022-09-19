import { Button, PageTemplate } from '~/components'
import * as I from '~/assets'
import { css } from '@emotion/react'

export default function login() {
  return (
    <PageTemplate>
      <div css={Block}>
        <I.Logo />
        <Button background="#FAE100" fontColor="#3B1E1E">
          <I.Kakao />
          <span css={StyledText}>카카오톡으로 로그인하기</span>
        </Button>
      </div>
    </PageTemplate>
  )
}

const Block = css`
  width: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 1.8rem;
`

const StyledText = css`
  font-size: inherit;
  font-weight: inherit;
  padding-left: 1rem;
`
