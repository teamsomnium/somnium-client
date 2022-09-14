import { Global, css } from '@emotion/react'

const style = css`
  * {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    box-sizing: border-box;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
  html {
    background-color: #ededed;
  }
`

export default function GlobalStyle() {
  return <Global styles={style} />
}
