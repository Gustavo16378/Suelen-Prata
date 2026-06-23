import AnnouncementBar from './components/layout/AnnouncementBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingWhatsApp from './components/layout/FloatingWhatsApp'
import ScrollProgress from './components/layout/ScrollProgress'

import Hero from './components/sections/Hero'
import StatementBand from './components/sections/StatementBand'
import BestSellers from './components/sections/BestSellers'
import DoubleBanner from './components/sections/DoubleBanner'
import Story from './components/sections/Story'
import Benefits from './components/sections/Benefits'
import Perfumaria from './components/sections/Perfumaria'
import PerfumariaVitrine from './components/sections/PerfumariaVitrine'
import FAQ from './components/sections/FAQ'
import HowToBuy from './components/sections/HowToBuy'
import FinalCTA from './components/sections/FinalCTA'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <StatementBand />
        <BestSellers />
        <DoubleBanner />
        <Story />
        <Benefits />
        <Perfumaria />
        <PerfumariaVitrine />
        <FAQ />
        <HowToBuy />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollProgress />
    </>
  )
}
