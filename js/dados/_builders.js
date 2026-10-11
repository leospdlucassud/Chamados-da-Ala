"use strict";

/* Helpers de construção -------------------------------------------------- */
// chamado só com título (estrutura pronta p/ receber conteúdo depois)
const t = titulo => ({ titulo });
// chamado com conteúdo completo
const full = (titulo, c) => ({ titulo, c });
