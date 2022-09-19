import { Global, css } from '@emotion/react'

const style = css`
  * {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    box-sizing: border-box;
    letter-spacing: -0.1px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 400;
  }
  *::selection {
    background-color: #86a8ff;
    color: #ffffff;
  }
  html {
    background-color: #ededed;
  }
`

export default function GlobalStyle() {
  return <Global styles={style} />
}
