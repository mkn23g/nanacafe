import { createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { MenuSection } from './components/MenuSection'
import { SpaceAndTeam } from './components/SpaceAndTeam'
import { VisitContact } from './components/VisitContact'
import { Footer } from './components/Footer'
import { useScrollReveal, useSmoothScroll } from './hooks'

import { useTranslation } from 'react-i18next'

function RootLayout() {
  const { t } = useTranslation()
  return (
    <>
      <a href="#main-content" className="skip-link">{t('skip')}</a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function HomePage() {
  useScrollReveal()
  useSmoothScroll()

  return (
    <>
      <Hero />
      <Story />
      <MenuSection />
      <SpaceAndTeam />
      <VisitContact />
    </>
  )
}

const rootRoute = createRootRoute({ component: RootLayout })

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const routeTree = rootRoute.addChildren([indexRoute])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
