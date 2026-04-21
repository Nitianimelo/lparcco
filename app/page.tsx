import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AILogos from '@/components/AILogos'
import EraExecucao from '@/components/EraExecucao'
import Economia from '@/components/Economia'
import CloudComputerAgent from '@/components/CloudComputerAgent'
import Depoimentos from '@/components/Depoimentos'
import ArccoDesignShowcase from '@/components/ArccoDesignShowcase'
import Planos from '@/components/Planos'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

const BASE_URL = 'https://arccoai.com.br'

// JSON-LD: SoftwareApplication schema
const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Arcco',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: BASE_URL,
  description:
    'Arcco é uma plataforma de IA movida pelo Arcco Tera, modelo proprietário treinado para o mercado brasileiro. Analise até 50 PDFs, gere slides, planilhas, imagens para marketing e delegue tarefas completas para agentes autônomos. Plug & play, sem código.',
  offers: {
    '@type': 'Offer',
    price: '99.90',
    priceCurrency: 'BRL',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '300',
    bestRating: '5',
    worstRating: '1',
  },
  author: {
    '@type': 'Organization',
    name: 'Arcco',
    url: BASE_URL,
  },
  inLanguage: 'pt-BR',
  featureList: [
    'Arcco Tera — modelo proprietário de IA para o mercado brasileiro',
    'Análise de até 50 PDFs simultaneamente',
    'Geração de slides e apresentações profissionais',
    'Gerador de planilhas Excel e CSV com fórmulas',
    'Gerador de imagens para marketing e redes sociais',
    'Cloud Computer Agent — navegação autônoma na web',
    'Memória Infinita via RAG',
    'Integração com APIs brasileiras (Receita Federal, ViaCEP, NF-e, Open Finance)',
    'Arcco Drive — armazenamento incluso',
  ],
}

// JSON-LD: FAQPage schema — targeting informational + comparison keywords
const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'A Arcco é uma ferramenta de criação de conteúdo com IA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A Arcco inclui um Estúdio de Design que gera posts, carrosséis e peças visuais profissionais a partir de um texto simples. Diferente de ferramentas que só geram texto, a Arcco entrega o arquivo final pronto para publicar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como usar IA para criar posts automáticos nas redes sociais?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Com a Arcco, você descreve o que quer e o agente planeja, escreve a legenda, gera a arte e entrega tudo no formato certo. É possível criar sequências de conteúdo para a semana inteira em minutos.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que diferencia a Arcco do ChatGPT e do Claude?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT e Claude são modelos de linguagem que respondem com texto. A Arcco é uma plataforma de execução: usa esses mesmos modelos por baixo, mas entrega resultados concretos — gera arquivos, navega em sites, preenche formulários e se integra com APIs brasileiras como Receita Federal, ViaCEP, Open Finance e NF-e. Para empresas no Brasil, isso faz toda a diferença.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a melhor plataforma de IA para pequenas e médias empresas no Brasil em 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Arcco foi criada especificamente para PMEs brasileiras. É plug-and-play, opera em português e não exige equipe técnica. A partir de R$ 99,90/mês substitui ChatGPT, Gemini, Grok e ferramentas de design com agentes que executam tarefas completas.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é um agente de IA autônomo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Um agente de IA autônomo recebe um objetivo, planeja os passos e os executa de forma independente. A Arcco disponibiliza um Cloud Computer Agent: um computador virtual na nuvem que navega em sites, extrai dados, gera arquivos e organiza informações por você.',
      },
    },
    {
      '@type': 'Question',
      name: 'A Arcco gera textos e imagens para marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A plataforma combina mais de 50 modelos de linguagem (GPT-4, Claude, Gemini, Deepseek) com geração visual. O gerador de conteúdo para marketing mais completo disponível em português do Brasil.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso saber programar para usar a Arcco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A Arcco é 100% plug-and-play. Você descreve o que precisa em português e a IA cuida do restante. Sem instalação, código ou configuração técnica.',
      },
    },
  ],
}

// JSON-LD: Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Arcco',
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  sameAs: [
    'https://www.linkedin.com/company/arccoai',
    'https://www.instagram.com/arccoai',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: 'Portuguese',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
      {/* Structured Data — JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Header />
      <Hero />
      <EraExecucao />
      <AILogos />
      <Economia />
      <CloudComputerAgent />
      <Depoimentos />
      <ArccoDesignShowcase />
      <Planos />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
