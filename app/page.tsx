import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AILogos from '@/components/AILogos'
import EraExecucao from '@/components/EraExecucao'
import Economia from '@/components/Economia'
import CloudComputerAgent from '@/components/CloudComputerAgent'
import Planos from '@/components/Planos'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
      <Header />
      <Hero />
      <EraExecucao />
      <AILogos />
      <Economia />
      <CloudComputerAgent />
      <Planos />
      <CTA />
      <Footer />
    </main>
  )
}
