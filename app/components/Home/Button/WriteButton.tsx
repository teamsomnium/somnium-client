import { css } from '@emotion/react'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

export default function WriteButton({ ...rest }: Props) {
  return <button css={StyledButton} {...rest} />
}

const StyledButton = css`
  background-color: #86a8ff;
  color: #ffffff;
  width: 100%;
  height: 5.3rem;
  border: none;
  border-radius: 1.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
`
