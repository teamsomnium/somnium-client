import {
  ActiveProgressBar,
  Button,
  Label,
  ProgressBar,
  Canvas,
  ColorPicker,
  Range,
  ClearButton,
} from '~/components'
import { css } from '@emotion/react'
import { useNavigate } from '@remix-run/react'
import { useState } from 'react'
import useCanvas from '~/hooks/useCanvas'

export default function Index() {
  const [pickedColor, setPickedColor] = useState<string>('#000000')
  const [rangeValue, setRangeValue] = useState<number>(5)
  const { canvasRef, startDraw, endDraw, draw, clearCanvas } = useCanvas({
    pickedColor,
    rangeValue,
  })
  const navigate = useNavigate()
  const pageNumber = 1

  function handleColor(e: React.ChangeEvent<HTMLInputElement>) {
    setPickedColor(e.target.value)
  }

  function handleRangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setRangeValue(Number(e.target.value))
  }

  return (
    <>
      <ProgressBar>
        <ActiveProgressBar step={pageNumber} />
      </ProgressBar>
      <Label
        numberOfPages={pageNumber}
        description={'어떤 꿈을 꿨는지 그림을 통해 간략하게 표현해주세요'}
        username={'임창규'}
      />
      <Canvas
        width={444}
        height={444}
        canvasRef={canvasRef}
        css={StyledCanvas}
        onMouseDown={startDraw}
        onMouseUp={endDraw}
        onMouseMove={draw}
        onMouseLeave={endDraw}
      >
        <ColorPicker onChange={handleColor} />
        <Range onChange={handleRangeValue} />
        <ClearButton onClick={clearCanvas}>clear</ClearButton>
      </Canvas>
      <div css={ButtonWrapper}>
        <Button
          background="#86A8FF"
          fontColor="white"
          onClick={() => {
            navigate('/write/intro')
          }}
        >
          다음
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

const StyledCanvas = css`
  width: 100%;
  height: 100%;
  border: 1px solid #cccccc;
  border-radius: 1.4rem;
`
