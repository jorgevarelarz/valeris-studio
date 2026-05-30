import { useEffect } from 'react'
import { Navigate, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SeoHead from './components/seo/SeoHead'
import About from './components/sections/About'
import Benefits from './components/sections/Benefits'
import FinalCta from './components/sections/FinalCta'
import Hero from './components/sections/Hero'
import IntroGate from './components/sections/IntroGate'
import Portfolio from './components/sections/Portfolio'
import Process from './components/sections/Process'
import Services from './components/sections/Services'
import Thanks from './components/sections/Thanks'
import Testimonials from './components/sections/Testimonials'
import ValerisRow from './components/sections/ValerisRow'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function Page({ children }) {
  return (
    <main className="relative z-10 min-h-[100svh] overflow-y-auto overflow-x-hidden pt-20 scrollbar-none lg:h-screen lg:overflow-hidden">
      {children}
    </main>
  )
}

function App() {
  const location = useLocation()

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto'
  }, [])

  return (
    <div className="relative min-h-[100svh] overflow-x-hidden bg-transparent text-ink lg:h-screen lg:overflow-hidden">
      <SeoHead />
      <ScrollToTop />
      {location.pathname === '/acceso' ? null : <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <Page>
              <Hero />
            </Page>
          }
        />
        <Route
          path="/acceso"
          element={<IntroGate />}
        />
        <Route
          path="/inicio"
          element={<Navigate to="/" replace />}
        />
        <Route
          path="/servicios"
          element={
            <Page>
              <Services />
            </Page>
          }
        />
        <Route
          path="/valeris-row"
          element={
            <Page>
              <ValerisRow />
            </Page>
          }
        />
        <Route
          path="/por-que-valeris"
          element={
            <Page>
              <Benefits />
            </Page>
          }
        />
        <Route
          path="/proceso"
          element={
            <Page>
              <Process />
            </Page>
          }
        />
        <Route
          path="/proyectos"
          element={
            <Page>
              <Portfolio />
            </Page>
          }
        />
        <Route
          path="/testimonios"
          element={
            <Page>
              <Testimonials />
            </Page>
          }
        />
        <Route
          path="/estudio"
          element={
            <Page>
              <About />
            </Page>
          }
        />
        <Route
          path="/contacto"
          element={
            <Page>
              <FinalCta />
            </Page>
          }
        />
        <Route
          path="/gracias"
          element={
            <Page>
              <Thanks />
            </Page>
          }
        />
      </Routes>
    </div>
  )
}

export default App
