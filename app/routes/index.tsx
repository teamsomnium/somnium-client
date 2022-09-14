import { css } from '@emotion/react'
import { Header, HeaderBurgerMenuButton, PageTemplate } from '~/components'

export default function Index() {
  return (
    <PageTemplate>
      <Header headerRight={<HeaderBurgerMenuButton />} />
    </PageTemplate>
  )
}
