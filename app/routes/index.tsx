import { Banner, Header, HeaderBurgerMenuButton, PageTemplate } from '~/components'

export default function Index() {
  return (
    <PageTemplate>
      <Header headerRight={<HeaderBurgerMenuButton />} />
      <Banner name="임창규" />
    </PageTemplate>
  )
}
