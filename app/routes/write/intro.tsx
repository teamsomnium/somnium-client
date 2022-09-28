import { ActiveProgressBar, Button, Label, ProgressBar, Textarea } from '~/components'
import { css } from '@emotion/react'

export default function intro() {
  const pageNumber = 2
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
      <Textarea placeholder="ex) 꿈 내용, 꿈을 꾸고 난 후의 기분" />
      <div css={ButtonWrapper}>
        <Button background="#86A8FF" fontColor="white">
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
