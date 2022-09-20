import { Banner, Header, HeaderBurgerMenuButton, PageTemplate, DreamHeader } from '~/components'

export default function Index() {
  return (
    <PageTemplate>
      <Header headerRight={<HeaderBurgerMenuButton />} />
      <Banner name="임창규" />
      <DreamHeader />
    </PageTemplate>
  )
}
