import { Outlet } from '@remix-run/react'
import { Header, HeaderBackButton, PageTemplate } from '~/components'
import useGoBack from '~/hooks/useGoBack'

export default function Write() {
  const goBack = useGoBack()
  return (
    <PageTemplate>
      <Header title="꿈 기록하기" headerLeft={<HeaderBackButton onClick={goBack} />} />
      <Outlet />
    </PageTemplate>
  )
}
