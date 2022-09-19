import { css } from '@emotion/react'
import { useNavigate } from '@remix-run/react'
import { WriteButton } from '~/components'

interface Props {
  name: string
}

export default function Banner({ name }: Props) {
  const navigate = useNavigate()
  return (
    <section css={Block}>
      <div css={StyledName}>
        {name}님, 오늘의 소중한
        <br /> 꿈을 기록해보아요
      </div>
      <WriteButton
        onClick={() => {
          navigate('/write')
        }}
      >
        꿈 기록하기
      </WriteButton>
    </section>
  )
}

const Block = css`
  height: 23rem;
  background: linear-gradient(
    120deg,
    rgba(255, 206, 230, 1) 0%,
    rgba(212, 242, 251, 1) 50%,
    rgba(254, 244, 233, 1) 100%
  );
  padding: 6rem 1.8rem 0;
`

const StyledName = css`
  color: #ffffff;
  text-shadow: 0px 0px 13px rgba(0, 0, 0, 50%);
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 3rem;
`
