import { useEffect, useRef, useState } from 'react'

interface Props {
  pickedColor: string
  rangeValue: number
}

export default function useCanvas({ pickedColor, rangeValue }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D>()
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.offsetWidth
    const height = canvas.offsetHeight

    ctx.clearRect(0, 0, width, height)
    ctx.strokeStyle = pickedColor
    ctx.lineWidth = rangeValue

    contextRef.current = ctx

    setContext(ctx)
  }, [])

  useEffect(() => {
    if (!context) return
    context.strokeStyle = pickedColor
  }, [context, pickedColor])

  useEffect(() => {
    if (!context) return
    context.lineWidth = rangeValue
  }, [context, rangeValue])

  function startDraw(e: React.MouseEvent<HTMLCanvasElement>) {
    if (!context) return

    setIsDrawing(true)
  }

  function draw(e: React.MouseEvent<HTMLCanvasElement>) {
    const { offsetX, offsetY } = e.nativeEvent
    if (!context) return

    if (!isDrawing) {
      context.beginPath()
      context.moveTo(offsetX, offsetY)
    } else {
      context.lineTo(offsetX, offsetY)
      context.stroke()
    }
  }

  function endDraw() {
    if (!context) return

    context.closePath()
    setIsDrawing(false)
  }

  function clearCanvas() {
    if (!context) return

    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  }

  return { canvasRef, startDraw, draw, endDraw, clearCanvas }
}
