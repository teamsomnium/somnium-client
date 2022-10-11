import { css } from '@emotion/react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  background: string
  fontColor: string
}

export default function Button({ background, fontColor, ...rest }: Props) {
  return <button css={StyledButton(background, fontColor)} {...rest} />
}

const StyledButton = (background: string, fontColor: string) => css`
  background-color: ${background};
  color: ${fontColor};
  width: 100%;
  height: 5.3rem;
  border: none;
  border-radius: 1.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
