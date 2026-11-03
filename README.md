# Comunidade Maker · Mariana Xisto — Landing Page

Implementação em React da landing page desenhada no Penpot (página `07 — Landing Page Final`).

## Scripts

```bash
npm install
npm run dev      # servidor local
npm run build    # build de produção em dist/
npm run lint
```

## Stack

- React 19 + Vite
- Tailwind CSS v4 (tokens em `src/index.css`, bloco `@theme`)
- Motion (`motion/react`) para animações e microinterações
- Lenis para rolagem suave, sincronizada com o loop de frames do Motion

## Estrutura

```
src/
├── assets/        imagens (WebP) e index.js com os imports
├── components/    peças reutilizáveis: Button, Ribbon, Seal, Stamp, FaqItem, PrintColumn, Navbar, MobileMenu…
├── constants/     todo o conteúdo da página (textos, FAQ, links, prints)
├── hooks/         useSmoothScroll, useMediaQuery
├── sections/      uma seção da página por arquivo, na ordem do design
├── utils/         geometria das fitas (bézier) e do selo
├── style.js       classes compartilhadas (container, títulos, textos)
└── App.jsx
```

## Notas

- Todos os CTAs levam ao WhatsApp da equipe (`WHATSAPP_URL` em `src/constants`).
- As perguntas do FAQ foram copiadas da seção "Dúvidas" de marianaxisto.com.br.
- As composições do hero e da linha do tempo usam as coordenadas dos artboards do Penpot convertidas
  em unidades de container (`cqw`), para escalar com a largura.
- `prefers-reduced-motion` é respeitado: sem rolagem suave, sem fitas em movimento, sem rolagem automática dos prints.
