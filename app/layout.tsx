import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arcco - IA Plug-and-Play para PMEs',
  description: 'Automatize seu negócio com inteligência artificial pronta para uso. Soluções de IA simples, poderosas e acessíveis para pequenas e médias empresas.',
  openGraph: {
    title: 'Arcco - IA Plug-and-Play para PMEs',
    description: 'Automatize seu negócio com inteligência artificial pronta para uso.',
    url: 'https://arcco.com.br',
    siteName: 'Arcco',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arcco - IA Plug-and-Play para PMEs',
    description: 'Automatize seu negócio com inteligência artificial pronta para uso.',
  },
  keywords: ['IA', 'Inteligência Artificial', 'PME', 'Automação', 'Negócios', 'SaaS'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${jakarta.className} antialiased selection:bg-purple-500/30 selection:text-white`}>
        {children}
      </body>
    </html>
  )
}
