import { css } from '@emotion/react'

interface Props extends React.HTMLAttributes<HTMLInputElement> {}

export default function ColorPicker({ ...rest }: Props) {
  return <input type="color" css={StyledColorPicker} {...rest} />
}

const StyledColorPicker = css`
  position: absolute;
  left: 1rem;
  bottom: 1.3rem;
  appearance: none;
  width: 5.3rem;
  height: 2.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &::-webkit-color-swatch {
    border-radius: 0.5rem;
    height: 2.5rem;
    border: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`
