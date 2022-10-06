import { Button, PageTemplate } from '~/components'
import * as I from '~/assets'
import { css } from '@emotion/react'
import { CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE } from '~/libs/constants/auth'

export default function Login() {
  function goKakaoLogin() {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
  }

  return (
    <PageTemplate>
      <div css={Block}>
        <I.Logo />
        <Button background="#FAE100" fontColor="#3B1E1E" onClick={goKakaoLogin}>
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
  padding: 10rem 0;
`

const StyledText = css`
  font-size: inherit;
  font-weight: inherit;
  padding-left: 1rem;
`
