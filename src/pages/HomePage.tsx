import { useState, useEffect } from 'react'
import Topbar from '../components/Topbar'
import Menu from '../components/Menu'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Blueprint from '../components/Blueprint'
import Services from '../components/Services'
import FAQ from '../components/FAQ'
import About from '../components/About'
import Footer from '../components/Footer'
import ServiceModal from '../components/ServiceModal'
import FormModal from '../components/FormModal'

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [serviceKey, setServiceKey] = useState<string | null>(null)

  // Lock body scroll when any overlay is open
  useEffect(() => {
    document.body.style.overflow = (menuOpen || formOpen || serviceKey !== null) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, formOpen, serviceKey])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFormOpen(false)
        setServiceKey(null)
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const openForm = () => {
    setServiceKey(null)
    setMenuOpen(false)
    setFormOpen(true)
  }

  return (
    <div id="top">
      <Topbar onOpenMenu={() => setMenuOpen(true)} />

      <Menu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenForm={openForm}
      />

      <main>
        <Hero onOpenForm={openForm} />
        <Stats />
        <Blueprint onOpenForm={openForm} />
        <Services onOpenService={(key) => setServiceKey(key)} />
        <FAQ />
        <About onOpenForm={openForm} />
      </main>

      <Footer />

      <ServiceModal
        serviceKey={serviceKey}
        onClose={() => setServiceKey(null)}
        onOpenForm={openForm}
      />
      <FormModal
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
      />
    </div>
  )
}
