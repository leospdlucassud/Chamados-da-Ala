"use strict";

const ORGS = [
  { id:"bispado", nome:"Bispado", icone:"⛪", cor:"#8B6B3D", chamados: BISPADO },

  { id:"quorum-elderes", nome:"Quórum de Élderes", icone:"🤝", cor:"#5F6B47", chamados: QUORUM_ELDERES },

  { id:"sociedade-socorro", nome:"Sociedade de Socorro", icone:"💐", cor:"#8A5B6B", chamados: SOCIEDADE_SOCORRO },

  { id:"sacerdocio-aaronico", nome:"Quóruns do Sacerdócio Aarônico", icone:"🕊️", cor:"#4C6070", grupos:[
    { nome:"Quórum de Sacerdotes", chamados: SA_SACERDOTES },
    { nome:"Quórum de Mestres", chamados: SA_MESTRES },
    { nome:"Quórum de Diáconos", chamados: SA_DIACONOS },
    { nome:"Gerais", chamados: SA_GERAIS },
  ]},

  { id:"mocas", nome:"Moças", icone:"🌷", cor:"#9A6480", grupos:[
    { nome:"Presidência", chamados: MOCAS_PRESIDENCIA },
    { nome:"Guardiãs da Luz (16+)", chamados: classeMocas("Guardiãs da Luz","16 anos ou mais") },
    { nome:"Mensageiras da Esperança (14–15)", chamados: classeMocas("Mensageiras da Esperança","14 e 15 anos") },
    { nome:"Edificadoras da Fé (12–13)", chamados: classeMocas("Edificadoras da Fé","12 e 13 anos") },
    { nome:"Gerais", chamados: MOCAS_GERAIS },
  ]},

  { id:"escola-dominical", nome:"Escola Dominical", icone:"📖", cor:"#6B5B43", chamados: ESCOLA_DOMINICAL },

  { id:"primaria", nome:"Primária", icone:"🧸", cor:"#8B7B3D", chamados: PRIMARIA },

  { id:"missionarios-ala", nome:"Missionários de Ala", icone:"✉️", cor:"#46685A", chamados: MISSIONARIOS },

  { id:"templo-historia", nome:"Templo e História da Família", icone:"🌳", cor:"#57755F", chamados: TEMPLO_HF },

  { id:"jas", nome:"Jovens Adultos Solteiros", icone:"🌟", cor:"#7B5B8B", chamados: JAS },

  { id:"outros", nome:"Outros Chamados", icone:"🗂️", cor:"#6B6456", grupos:[
    { nome:"Bem-Estar e Autossuficiência", chamados: OUTROS_BEMESTAR },
    { nome:"Música da Ala", chamados: OUTROS_MUSICA },
    { nome:"Instalações / Patrimônio", chamados: OUTROS_INSTALACOES },
    { nome:"Comunicação / Tecnologia", chamados: OUTROS_COMUNICACAO },
    { nome:"Diversos", chamados: OUTROS_DIVERSOS },
  ]},
];

/* ---- Pós-processamento: ids estáveis + índice de busca ----------------- */
const INDEX = [];
ORGS.forEach(org=>{
  let n = 0;
  const reg = (c, grupo)=>{
    c.id = org.id + "-" + (n++);
    c.orgId = org.id; c.orgNome = org.nome; c.orgIcone = org.icone; c.grupo = grupo || null;
    INDEX.push(c);
  };
  if(org.chamados) org.chamados.forEach(c=>reg(c,null));
  if(org.grupos) org.grupos.forEach(g=>g.chamados.forEach(c=>reg(c,g.nome)));
});
const findOrg = id => ORGS.find(o=>o.id===id);
const findChamado = id => INDEX.find(c=>c.id===id);
// Rótulo de contexto do chamado: "Organização" ou "Organização · Subgrupo".
const subChamado = c => c.orgNome + (c.grupo ? " · " + c.grupo : "");
