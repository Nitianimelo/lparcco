# 🚀 Arcco - Landing Page

Landing page moderna e impactante para a plataforma de IA plug-and-play da Arcco.

## ✨ Características

- 🎨 **Design Dark & Clean** - Interface elegante com modo escuro nativo
- ✨ **Efeitos de Background** - Gradientes animados, partículas e glows
- 🎯 **Animações Fluidas** - Transições suaves com Framer Motion
- 📱 **100% Responsivo** - Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance Otimizada** - Next.js 14 com renderização eficiente
- 🎭 **Interatividade** - Cards com hover effects, scroll animations e mais

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animações**: Framer Motion
- **Linguagem**: TypeScript
- **Ícones**: Lucide React

## 📦 Instalação

1. Clone ou navegue até o diretório do projeto:
```bash
cd "C:\Users\User\Documents\Landing Page arcco"
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## 🚀 Execução

### Modo Desenvolvimento
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

### Build de Produção
```bash
npm run build
npm run start
# ou
yarn build
yarn start
# ou
pnpm build
pnpm start
```

## 📁 Estrutura do Projeto

```
arcco-landing/
├── app/
│   ├── globals.css          # Estilos globais e utilitários
│   ├── layout.tsx           # Layout raiz com metadados
│   └── page.tsx             # Página principal
├── components/
│   ├── Header.tsx           # Header com navegação e CTA
│   ├── Hero.tsx             # Seção hero com efeitos animados
│   ├── Beneficios.tsx       # Cards de benefícios interativos
│   ├── ComoFunciona.tsx     # Timeline de como funciona
│   ├── Plataforma.tsx       # Preview da plataforma interativo
│   ├── CTA.tsx              # Call-to-action final
│   └── Footer.tsx           # Footer completo com links
├── Logo e variações/        # Assets da marca Arcco
├── public/                  # Arquivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🎨 Seções da Landing Page

1. **Header** - Navegação fixa com efeito glassmorphism
2. **Hero** - Impactante com gradientes animados e CTA principal
3. **Benefícios** - 6 cards com ícones e efeitos hover
4. **Como Funciona** - Timeline de 4 passos com animações
5. **Plataforma** - Preview interativo com 3 telas diferentes
6. **CTA Final** - Call-to-action com benefits list
7. **Footer** - Links de navegação, redes sociais e contato

## 🎭 Animações e Efeitos

### Background Effects
- Gradientes animados com blur
- Partículas flutuantes
- Grid pattern overlay
- Glow effects em hover

### Component Animations
- **Scroll Reveal**: Elementos aparecem ao scroll
- **Hover Effects**: Scale, rotate, glow em cards
- **Float Animation**: Elementos flutuantes no hero
- **Pulse**: Indicadores de status
- **Gradient Text**: Texto com gradiente animado

### Custom Utilities
```css
.glass           /* Efeito glassmorphism */
.gradient-text   /* Texto com gradiente */
.glow            /* Shadow com cor do tema */
.glow-purple     /* Shadow roxo no hover */
```

## 🎨 Personalização

### Cores
As cores são definidas via CSS variables em `app/globals.css`:

```css
:root {
  --primary: 217.2 91.2% 59.8%;  /* Azul principal */
  --secondary: 217.2 32.6% 17.5%; /* Secundário */
  /* ... outras variáveis */
}
```

### Gradientes
Os gradientes são configurados em `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    // ...
  }
}
```

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Inicia servidor de produção
npm run lint     # Verifica código com ESLint
```

## 📝 Notas Importantes

- As imagens da pasta "Logo e variações" podem ser integradas
- O copy atual é placeholder e deve ser substituído
- A URL da plataforma deve ser configurada nos links
- Metadados SEO devem ser personalizados em `layout.tsx`

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da Arcco.

---

**Desenvolvido com ❤️ para a Arcco**
