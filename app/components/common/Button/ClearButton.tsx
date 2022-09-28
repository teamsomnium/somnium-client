import { css } from '@emotion/react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

export default function ClearButton({ ...rest }: Props) {
  return <button css={StyledClearButton} {...rest} />
}

const StyledClearButton = css`
  width: 5.3rem;
  height: 2.5rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #86a8ff;
  color: #ffffff;
  font-size: 1.2rem;
`
