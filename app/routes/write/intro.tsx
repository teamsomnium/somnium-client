import { ActiveProgressBar, Button, Label, ProgressBar, Textarea } from '~/components'
import { css } from '@emotion/react'
import { useNavigate } from '@remix-run/react'
import { useState } from 'react'

export default function Intro() {
  const pageNumber = 2
  const navigate = useNavigate()
  const [textareaValue, setTextareaValue] = useState<string>('')

  function handleInputValue(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextareaValue(e.target.value)
  }

  return (
    <>
      <ProgressBar>
        <ActiveProgressBar step={pageNumber} />
      </ProgressBar>
      <Label
        numberOfPages={pageNumber}
        description={'꿈에 대해 더 자세히 설명해주세요!'}
        username={'임창규'}
      />
      <Textarea placeholder="ex) 꿈 내용, 꿈을 꾸고 난 후의 기분" onChange={handleInputValue} />
      <div css={ButtonWrapper}>
        <Button
          background="#86A8FF"
          fontColor="white"
          onClick={() => {
            navigate('/')
          }}
        >
          꿈 기록하기
        </Button>
      </div>
    </>
  )
}

const ButtonWrapper = css`
  position: sticky;
  width: 100%;
  bottom: 1.8rem;
  margin-top: auto;
`
