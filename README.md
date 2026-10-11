# Magnifique seu Chamado

PWA (aplicativo web progressivo) que ajuda qualquer membro de uma
Ala d'A Igreja de Jesus Cristo dos Santos dos Últimos Dias a entender e magnificar
seu chamado, com base no **Manual Geral** e em fontes oficiais da Igreja.

## Características

- **Sem build nem dependências externas** — HTML/CSS/JS puros, servidos como arquivos estáticos.
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

O app cobre **todos os chamados possíveis de uma Ala** (135 no total), organizados por
organização. O conteúdo doutrinário é preenchido organização por organização.

Status atual do conteúdo: **conteúdo completo das 11 organizações (135 chamados).**

Conteúdo atualizado para a **nova programação das reuniões de domingo (a partir de setembro de 2026)**:
aulas semanais de 25 minutos, conselho de professores mensal, currículo *Para a Força dos Jovens*
para os jovens, e a nova classe opcional da Escola Dominical **"Alicerces do Evangelho"** (novos
membros e amigos), fundamentado nas fontes oficiais da Igreja.

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

## Estrutura dos arquivos

```
index.html              → shell (cabeçalho, busca, áreas; referencia css/ e js/)
css/estilos.css         → estilos ("estilo Liahona", claro/escuro, impressão)
js/app.js               → lógica (navegação por hash, render, preferências, busca, SW)
js/dados/
  _builders.js          → helpers t() e full()
  <organização>.js      → conteúdo de cada organização (um arquivo por organização)
  _registro.js          → monta o array ORGS a partir dos dados
sw.js  manifest.webmanifest  _headers
```

Os arquivos de `js/` são `<script>` clássicos carregados em ordem (sem módulos, sem bundler):
`_builders` → organizações → `_registro` → `app.js`. Cada um declara suas constantes globais.

## Como usar / desenvolver

Sirva a pasta por HTTP (ex.: `python -m http.server`) e abra no navegador — necessário
para o Service Worker, o PWA e o carregamento dos scripts.

## Deploy (Netlify)

Faça um ZIP com `index.html`, `manifest.webmanifest`, `sw.js`, `_headers` e as pastas
`css/` e `js/` (na raiz, sem uma subpasta envolvendo tudo), e arraste-o no Netlify.

O arquivo `_headers` define `Cache-Control: no-cache` para o shell e para `css/` e `js/`.
A cada release, suba a versão em `js/app.js` (`VERSAO`) e em `sw.js` (`CACHE`).

---

© 2026 Léo Lucas · Todos os direitos reservados
