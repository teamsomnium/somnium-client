import { css } from '@emotion/react'

interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({ ...rest }: Props) {
  return <textarea css={StyledTextarea} {...rest}></textarea>
}

const StyledTextarea = css`
  width: 100%;
  height: 44.4rem;
  border: 1px solid #cccccc;
  border-radius: 1.4rem;
  padding: 1rem;
  font-size: 1.2rem;
  resize: none;
  outline: none;
`
