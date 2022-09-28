import { css } from '@emotion/react'
import { useNavigate } from '@remix-run/react'
import { Button } from '~/components'

interface Props {
  name: string
}

export default function Banner({ name }: Props) {
  const navigate = useNavigate()
  return (
    <section css={Block}>
      <div css={StyledBackground} />
      <div css={LayoutBackground}>
        <div css={StyledName}>
          {name}님, 오늘의 소중한
          <br /> 꿈을 기록해보아요
        </div>
        <Button
          background="#86A8FF"
          fontColor="#ffffff"
          onClick={() => {
            navigate('/write')
          }}
        >
          꿈 기록하기
        </Button>
      </div>
    </section>
  )
}

const Block = css`
  position: relative;
  height: 23rem;
  margin: 0 -1.8rem;
  padding: 5.2rem 1.8rem 2.4rem;
`
const StyledBackground = css`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 206, 230, 1) 0%,
      rgba(212, 242, 251, 1) 50%,
      rgba(254, 244, 233, 1) 100%
    );
  }
`

const StyledName = css`
  color: #ffffff;
  text-shadow: 0px 0px 13px rgba(0, 0, 0, 50%);
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 4.5rem;
  z-index: 2;
`

const LayoutBackground = css`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 23rem;
  padding: 5.2rem 1.8rem 2.4rem;
  z-index: 2;
`
