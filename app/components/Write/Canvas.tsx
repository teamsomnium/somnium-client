import React, { type PropsWithChildren } from 'react'
import { css } from '@emotion/react'

interface Props extends React.HTMLAttributes<HTMLCanvasElement> {
  width: number
  height: number
  canvasRef: React.RefObject<HTMLCanvasElement>
}

export default function Canvas({
  children,
  width,
  height,
  canvasRef,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <div css={LayoutCanvas}>
      <canvas width={width} height={height} ref={canvasRef} {...rest} />
      {children}
    </div>
  )
}

const LayoutCanvas = css`
  position: relative;
`
