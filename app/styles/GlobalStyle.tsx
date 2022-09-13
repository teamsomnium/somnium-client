import { Global, css } from '@emotion/react';

const style = css`
  * {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    box-sizing: border-box;
  }
  html {
    background-color: #ededed;
  }
`;

export default function GlobalStyle() {
  return <Global styles={style} />;
}
