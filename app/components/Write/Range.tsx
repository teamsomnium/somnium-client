import { css } from '@emotion/react'

interface Props extends React.HtmlHTMLAttributes<HTMLInputElement> {}

export default function Range({ ...rest }: Props) {
  return <input type="range" css={StyledRange} min={1} max={10} step={0.1} {...rest} />
}

const StyledRange = css`
  position: absolute;
  left: 8rem;
  bottom: 1.6rem;
  appearance: none;
  width: 9.5rem;
  height: 1rem;
  background-color: #cccccc;
  border-radius: 1.5rem;

  &::-webkit-slider-thumb {
    appearance: none;
    background-color: #86a8ff;
    width: 1rem;
    height: 1rem;
    border-radius: 1.5rem;
    cursor: pointer;
  }
`
