import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

const BASE_URL = 'https://arccoai.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Arcco — Plataforma de IA para Empresas Brasileiras | Automação com Inteligência Artificial',
    template: '%s | Arcco IA',
  },

  description:
    'Arcco é a plataforma de IA plug-and-play para PMEs brasileiras. Crie conteúdo, automatize redes sociais, gere textos e imagens para marketing, e delegue tarefas completas para agentes de inteligência artificial. A partir de R$ 99,90/mês.',

  keywords: [
    // Core product + modelo proprietário
    'Arcco Tera',
    'modelo de IA brasileiro',
    'modelo proprietário de inteligência artificial',
    'plataforma de IA para empresas',
    'inteligência artificial para negócios',
    'automação com IA',
    'IA plug and play',
    'agente de IA autônomo',
    // Informacional — conteúdo e features
    'ferramenta de criação de conteúdo com IA',
    'gerador de textos e imagens para marketing',
    'como criar posts automáticos com inteligência artificial',
    'IA para automação de redes sociais',
    'plataforma de criação de conteúdo com IA',
    'gerador de conteúdo automático',
    'criação de posts com IA',
    'gerador de carrossel com IA',
    'análise de PDFs com IA',
    'gerador de slides com inteligência artificial',
    'gerador de planilhas com IA',
    'geração de imagens para marketing com IA',
    'análise de documentos com IA',
    'IA para análise de contratos',
    // Comparação / concorrência
    'alternativa ao ChatGPT',
    'alternativa ao Jasper AI',
    'alternativa ao Copy.ai',
    'alternativa ao Jenni.ai',
    'melhor IA para marketing digital em 2026',
    'melhor IA para pequenas empresas em 2026',
    'melhor IA para PME Brasil 2026',
    // Nicho Brasil
    'IA para empresas brasileiras',
    'ferramenta de IA em português',
    'automação empresarial com IA',
    'RPA cognitivo',
    'IA para PME',
    'IA para marketing digital',
    'IA para e-commerce',
    'IA para contabilidade',
  ],

  authors: [{ name: 'Arcco', url: BASE_URL }],
  creator: 'Arcco',
  publisher: 'Arcco',

  alternates: {
    canonical: BASE_URL,
    languages: { 'pt-BR': BASE_URL },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'Arcco IA',
    title: 'Arcco — IA que executa tarefas reais pelo seu negócio',
    description:
      'Crie conteúdo, automatize redes sociais, gere textos e imagens para marketing com agentes de IA autônomos. Plug & Play, sem código, a partir de R$ 99,90/mês.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arcco — Plataforma de IA para empresas brasileiras',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@arccoai',
    creator: '@arccoai',
    title: 'Arcco — IA que executa tarefas reais pelo seu negócio',
    description:
      'Automatize redes sociais, crie conteúdo e delegue tarefas para agentes de IA. Plug & Play para PMEs brasileiras.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/icon.png?v=4',
    shortcut: '/icon.png?v=4',
    apple: '/icon.png?v=4',
  },

  category: 'technology',
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
