# Magnifique seu Chamado

PWA (aplicativo web progressivo) de arquivo único que ajuda qualquer membro de uma
Ala d'A Igreja de Jesus Cristo dos Santos dos Últimos Dias a entender e magnificar
seu chamado, com base no **Manual Geral** e em fontes oficiais da Igreja.

## Características

- **Single-file** (`index.html`) — HTML, CSS e JS embutidos, sem build nem dependências externas.
- **PWA instalável** e com funcionamento offline (`manifest.webmanifest` + `sw.js`).
- **Mobile-first** e responsivo (coluna de leitura emoldurada em telas grandes).
- **Modo claro/escuro** (segue o tema do sistema no 1º acesso) e **tamanho de fonte ajustável**
  (preferências salvas localmente).
- Navegação em 3 níveis: **Organizações → Chamados → Detalhe**, com **busca global**
  (termo destacado nos resultados).
- **Deep links** por hash (`#/c/<chamado>`) e suporte ao **botão voltar** do navegador/celular.
- **Favoritos** fixados no topo da Home, **compartilhar** (Web Share/copiar link) e **imprimir** o chamado.
- **Aviso de nova versão** ("Atualizar") quando o Service Worker detecta uma atualização.
- Design "estilo Liahona": fundo off-white quente, tipografia serifada, acento dourado.
- **Citações clicáveis**: cada referência ao Manual Geral e cada escritura abre a
  página oficial correspondente em churchofjesuschrist.org (PT-BR).

## Estrutura de navegação

1. **Home** — as 11 organizações da Ala, na ordem do LCR.
2. **Submenu** — os chamados de cada organização (com subgrupos quando aplicável).
3. **Detalhe** — Propósito → Responsabilidades → Como magnificar (5 áreas) → Fechamento,
   fundamentado no Manual Geral.

## Conteúdo

O app cobre **todos os chamados possíveis de uma Ala** (134 no total), organizados por
organização. O conteúdo doutrinário é preenchido organização por organização.

Status atual do conteúdo: **conteúdo completo das 11 organizações (134 chamados).**

- [x] Bispado
- [x] Quórum de Élderes
- [x] Sociedade de Socorro
- [x] Quóruns do Sacerdócio Aarônico
- [x] Moças
- [x] Escola Dominical
- [x] Primária
- [x] Missionários de Ala
- [x] Templo e História da Família
- [x] Jovens Adultos Solteiros
- [x] Outros Chamados

## Como usar / desenvolver

Basta abrir o `index.html` num navegador. Para testar o Service Worker e o PWA,
sirva a pasta por HTTP (ex.: `python -m http.server`).

## Deploy (Netlify)

Faça um ZIP **flat** (arquivos na raiz, sem subpasta) contendo
`index.html`, `manifest.webmanifest`, `sw.js` e `_headers`, e arraste-o no Netlify.

O arquivo `_headers` define `Cache-Control: no-cache` para `index.html` e `sw.js`.

---

© 2026 Léo Lucas · Todos os direitos reservados
