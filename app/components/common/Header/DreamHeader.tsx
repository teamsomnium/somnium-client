import { css } from '@emotion/react'
import { type ChangeEvent, useRef, useState } from 'react'
import getFormatDate from '~/libs/util/getFormatDate'

export default function DreamHeader() {
  const dateRef = useRef<HTMLInputElement>(null)
  const [date, setDate] = useState<string>(getFormatDate(new Date()))

  function handleDatePicker() {
    dateRef.current?.showPicker()
  }

  function handlePickDate(e: ChangeEvent<HTMLInputElement>) {
    setDate(getFormatDate(new Date(e.target.value)))
  }

  return (
    <div css={Block}>
      <span css={StyledHeading}>나의 꿈</span>
      <span css={StyledDate} onClick={handleDatePicker}>
        {date}
      </span>
      <input type="date" css={StyledDatePicker} ref={dateRef} onChange={handlePickDate} />
    </div>
  )
}

const Block = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.8rem;
`
const StyledHeading = css`
  font-size: 1.6rem;
`

const StyledDate = css`
  font-size: 1.6rem;
  text-decoration: underline;
`

const StyledDatePicker = css`
  display: none;
`
