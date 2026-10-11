"use strict";

const MISSIONARIOS = [
  full("Líder da Missão da Ala", {
    escritura:{ t:"E se acontecer que trabalheis todos os vossos dias… e trouxerdes uma só alma a mim, quão grande será a vossa alegria!", r:"Doutrina e Convênios 18:15" },
    proposito:"Lidera a obra missionária na ala sob a direção do bispado. Coordena o trabalho dos missionários de tempo integral com os membros, ajudando a encontrar, ensinar e integrar pessoas, e apoiando os novos conversos e os que retornam à atividade.",
    ref:"Manual Geral, 23.5",
    resp:[
      "Coordenar a obra missionária da ala no conselho da ala.",
      "Trabalhar com os missionários de tempo integral e os missionários da ala.",
      "Ajudar os membros a compartilhar o evangelho com naturalidade.",
      "Apoiar a integração dos novos membros e o retorno dos menos ativos.",
      "Coordenar o trabalho dos missionários da ala.",
      "Ajudar a preparar as pessoas para o batismo e a confirmação.",
    ],
    areas:[
      { t:"Unir membros e missionários", i:[
        "Reúna-se com os missionários de tempo integral regularmente.",
        "Ajude os membros a apresentarem amigos aos missionários.",
        "Reúna e acompanhe as referências dos membros.",
        "Convide os membros a participar das lições.",
      ]},
      { t:"Coordenar pelo conselho da ala", i:[
        "Leve a obra missionária ao conselho da ala.",
        "Trabalhe com o quórum de élderes e a Sociedade de Socorro.",
        "Defina metas simples e acompanhe-as.",
        "Delegue tarefas aos missionários da ala.",
      ]},
      { t:"Cuidar dos novos membros", i:[
        "Ajude cada novo converso a ter um amigo, um chamado e a palavra de Deus.",
        "Acompanhe seu progresso rumo ao templo.",
        "Ajude-os a receber as ordenanças no tempo certo.",
        "Apresente-os a membros que os apoiarão.",
      ]},
      { t:"Encontrar com amor", i:[
        "Incentive convites naturais e sem pressão.",
        "Ajude a identificar pessoas preparadas.",
        "Ore com os missionários por quem procurar.",
        "Aproveite o serviço e a amizade para abrir portas.",
      ]},
      { t:"Inspirar pelo exemplo", i:[
        "Compartilhe o evangelho você mesmo.",
        "Ajude a ala a amar a obra missionária.",
        "Conte experiências que edifiquem os membros.",
        "Reconheça quem participa da obra.",
      ]},
    ],
    fecho:{ t:"Não há alegria maior do que ajudar uma alma a achegar-se a Cristo. Ao unir membros e missionários, você abre portas para milagres na ala.", f:"Manual Geral, cap. 23" },
  }),
  full("Assistente do Líder da Missão da Ala", {
    proposito:"Apoia o líder da missão da ala na coordenação da obra missionária, assumindo as designações que receber e substituindo-o quando necessário.",
    ref:"Manual Geral, 23.5",
    resp:["Ajudar a coordenar a obra missionária da ala.","Apoiar o trabalho com os missionários de tempo integral.","Ajudar a acompanhar novos membros e menos ativos.","Substituir o líder da missão quando necessário.","Ajudar a mobilizar os missionários da ala.","Reunir e organizar as referências dos membros."],
    areas:[
      { t:"Apoiar o líder", i:["Combine a divisão das tarefas.","Esteja pronto para assumir quando necessário.","Alinhe as prioridades da obra.","Aja com iniciativa."]},
      { t:"Trabalhar com os missionários", i:["Ajude a agendar e apoiar as visitas.","Reúna referências dos membros.","Acompanhe o andamento das lições.","Convide membros a participar."]},
      { t:"Cuidar dos novos membros", i:["Ajude a integrar os recém-batizados.","Acompanhe seu progresso.","Ajude cada um a ter um amigo e um chamado.","Acompanhe-os rumo ao templo."]},
      { t:"Incentivar os membros", i:["Ajude a criar oportunidades naturais.","Dê o exemplo de compartilhar o evangelho.","Reconheça quem participa da obra.","Compartilhe boas experiências."]},
      { t:"Servir com fé", i:["Ore pelas pessoas que a ala procura ajudar.","Sirva com entusiasmo e amor.","Confie que o Senhor prepara corações.","Seja paciente e constante."]},
    ],
    fecho:{ t:"O apoio fiel de um assistente amplia o alcance da obra missionária. Sua dedicação ajuda a levar o evangelho a mais corações.", f:"Manual Geral, cap. 23" },
  }),
  full("Missionário da Ala", {
    proposito:"Membro chamado para ajudar na obra missionária da ala: encontra, ensina e integra pessoas junto com os missionários de tempo integral, e apoia os novos membros e os que retornam à atividade.",
    ref:"Manual Geral, 23.5",
    resp:["Ajudar a encontrar e ensinar pessoas interessadas.","Acompanhar os missionários de tempo integral nas visitas.","Ajudar a integrar e a apoiar os novos membros.","Ser um amigo para quem está aprendendo o evangelho.","Convidar amigos e vizinhos a conhecer o evangelho.","Apoiar os novos membros rumo ao templo."],
    areas:[
      { t:"Encontrar com amor", i:["Convide amigos e vizinhos com naturalidade.","Ore por oportunidades de servir e testemunhar.","Sirva o próximo e cultive amizades.","Fale do evangelho quando o momento for natural."]},
      { t:"Ensinar e testificar", i:["Acompanhe as lições dos missionários.","Compartilhe seu testemunho com sinceridade.","Responda a dúvidas com amor e paciência.","Convide as pessoas a agir."]},
      { t:"Fazer amizade", i:["Seja um amigo verdadeiro para os pesquisadores.","Acolha-os na ala.","Sente-se com eles nas reuniões.","Apresente-os a outros membros."]},
      { t:"Integrar novos membros", i:["Ajude cada novo converso a sentir-se em casa.","Acompanhe seu progresso rumo ao templo.","Ajude-os a fazer amizades na ala.","Incentive-os a servir."]},
      { t:"Servir com fé", i:["Confie no Senhor para preparar corações.","Sirva com paciência e amor.","Ore por quem você ajuda.","Persevere mesmo diante de recusas."]},
    ],
    fecho:{ t:"Cada pessoa ajudada a achegar-se a Cristo traz alegria ao céu e à ala. Seu serviço como missionário abençoa vidas para a eternidade.", f:"Manual Geral, cap. 23" },
  }),
];

/* ---- CONTEÚDO COMPLETO: TEMPLO E HISTÓRIA DA FAMÍLIA -------------------- */
