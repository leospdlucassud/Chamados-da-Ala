"use strict";

const MOCAS_PRESIDENCIA = [
  full("Presidente das Moças", {
    escritura:{ t:"Levantai-vos e resplandecei, para que a vossa luz seja um estandarte às nações.", r:"Doutrina e Convênios 115:5" },
    proposito:"Chamada pelo bispo, a presidente das Moças lidera as jovens de 12 a 18 anos sob a direção dele. Ministra a cada moça, orienta as presidências de classe e lidera o trabalho de salvação e exaltação, ajudando cada jovem a fazer e guardar convênios e a achegar-se a Jesus Cristo.",
    ref:"Manual Geral, 11.3.2",
    resp:[
      "Liderar as Moças e servir como membro do conselho da ala (11.3.2).",
      "Ministrar individualmente a cada moça e orientar as presidências de classe (11.3.4).",
      "Liderar o trabalho de salvação e exaltação por meio do programa Crianças e Jovens.",
      "Supervisionar registros, orçamento e atividades, inclusive acampamento e FSY.",
      "Assegurar a norma dos dois adultos responsáveis em toda interação com as jovens (11.6.1).",
      "Reunir-se com cada moça e conhecer suas circunstâncias.",
      "Recomendar ao bispo novas líderes e apoiá-las.",
    ],
    areas:[
      { t:"Deixar as jovens liderarem", i:[
        "Oriente as presidências de classe e deixe-as planejar e dirigir.",
        "Ensine princípios e confie responsabilidades às jovens.",
        "Confie responsabilidades reais às presidências de classe.",
        "Reconheça e comemore suas iniciativas.",
      ]},
      { t:"Ministrar a cada moça", i:[
        "Conheça cada jovem pelo nome e por suas circunstâncias.",
        "Alcance com amor as menos ativas e as recém-chegadas.",
        "Reúna-se individualmente com as jovens.",
        "Lembre-se delas em momentos importantes.",
      ]},
      { t:"Liderar por revelação e conselhos", i:[
        "Reúna a presidência com regularidade e busque inspiração.",
        "Delegue as áreas da obra às conselheiras.",
        "Concentre as reuniões nas jovens, não só nos programas.",
        "Escolha poucas prioridades por vez.",
      ]},
      { t:"Guiar pelo programa Crianças e Jovens", i:[
        "Ajude cada moça a definir metas e a ter experiências espirituais.",
        "Planeje atividades que fortaleçam a fé e a amizade.",
        "Comemore o progresso de cada jovem.",
        "Incentive experiências espirituais no lar.",
      ]},
      { t:"Proteger sempre", i:[
        "Cumpra a norma dos dois adultos responsáveis em tudo.",
        "Zele por um ambiente seguro física e espiritualmente.",
        "Assegure que toda consultora faça o treinamento de proteção.",
        "Ensine as jovens a se protegerem e a buscar ajuda.",
      ]},
    ],
    fecho:{ t:"As Moças são luzes que resplandecem no mundo. Ao ministrar com amor e deixá-las liderar, a presidente ajuda cada jovem a firmar-se em seus convênios com o Salvador.", f:"Manual Geral, cap. 11" },
  }),
  full("Primeira Conselheira das Moças", {
    proposito:"Serve sob a direção da presidente das Moças, auxiliando-a a liderar a organização e orientando as presidências de classe que lhe forem designadas.",
    ref:"Manual Geral, 11.3.2",
    resp:[
      "Auxiliar a presidente e representá-la quando designada.",
      "Orientar as presidências de classe atribuídas.",
      "Participar da presidência e ajudar na ministração às jovens.",
      "Observar a norma dos dois adultos responsáveis.",
      "Ajudar a coordenar a ministração às jovens.",
      "Ministrar às moças e ajudar a cuidar das famílias.",
    ],
    areas:[
      { t:"Apoiar a presidente", i:["Assuma as designações e alivie a carga da presidente.","Prepare-se para presidir quando necessário.","Aja com iniciativa.","Mantenha a presidente informada da sua área."]},
      { t:"Orientar as classes designadas", i:["Ajude as jovens líderes a planejar e dirigir.","Deixe-as liderar; oriente nos bastidores.","Reúna-se com as presidências de classe.","Reconheça e agradeça as jovens líderes."]},
      { t:"Ministrar às jovens", i:["Conheça as moças e alcance as que faltam.","Incentive experiências espirituais.","Conheça cada jovem pelo nome.","Alcance com amor as menos ativas."]},
      { t:"Preparar-se", i:["Estude o cap. 11 e o programa Crianças e Jovens.","Participe dos treinamentos.","Busque inspiração para orientar.","Compartilhe boas práticas com a presidência."]},
      { t:"Proteger e unir", i:["Cumpra a norma dos dois adultos.","Apoie as decisões da presidência e guarde confidências.","Assegure um ambiente seguro nas atividades.","Fale a uma só voz com a presidência."]},
    ],
    fecho:{ t:"A conselheira fiel amplia o cuidado com as jovens. Ao servir com dedicação, torna-se um exemplo do discipulado que ensina.", f:"Manual Geral, cap. 11" },
  }),
  full("Segunda Conselheira das Moças", {
    proposito:"Serve sob a direção da presidente das Moças, auxiliando-a e orientando as presidências de classe designadas, frequentemente as jovens mais novas.",
    ref:"Manual Geral, 11.3.2",
    resp:[
      "Auxiliar a presidente e representá-la quando designada.",
      "Orientar as presidências de classe atribuídas.",
      "Participar da presidência e ajudar na ministração.",
      "Observar a norma dos dois adultos responsáveis.",
      "Ajudar a coordenar a ministração às jovens.",
      "Cuidar especialmente da transição das que chegam da Primária.",
    ],
    areas:[
      { t:"Apoiar a presidente", i:["Cumpra prontamente suas designações.","Esteja pronta para servir.","Aja com iniciativa.","Comunique o andamento à presidente."]},
      { t:"Cuidar das mais novas", i:["Acolha as que estão chegando à organização.","Ajude na transição vinda da Primária.","Conheça cada nova jovem pelo nome.","Ajude-as a fazer amizades na organização."]},
      { t:"Orientar as classes", i:["Deixe as jovens líderes dirigirem.","Oriente com paciência.","Reúna-se com as presidências de classe.","Reconheça as jovens líderes."]},
      { t:"Preparar-se", i:["Estude o programa Crianças e Jovens.","Participe dos treinamentos.","Busque inspiração para orientar.","Compartilhe boas práticas com a presidência."]},
      { t:"Proteger e unir", i:["Cumpra a norma dos dois adultos.","Sustente as decisões da presidência.","Assegure um ambiente seguro nas atividades.","Guarde as confidências."]},
    ],
    fecho:{ t:"Ao acolher as jovens mais novas, a segunda conselheira ajuda cada uma a sentir-se em casa e amada na organização das Moças.", f:"Manual Geral, cap. 11" },
  }),
  full("Secretária das Moças", {
    proposito:"Ajuda a presidência das Moças a manter a ordem: prepara pautas, mantém registros de frequência e ajuda com o orçamento e a comunicação.",
    ref:"Manual Geral, 11.3.3",
    resp:[
      "Preparar pautas e anotações das reuniões da presidência.",
      "Manter os registros de frequência das jovens.",
      "Ajudar com o orçamento e o controle de despesas.",
      "Apoiar a comunicação de atividades e reuniões.",
      "Ajudar a acompanhar o progresso das jovens no programa Crianças e Jovens.",
      "Treinar a próxima secretária quando necessário.",
    ],
    areas:[
      { t:"Organizar as reuniões", i:["Prepare a pauta e registre as designações.","Dê seguimento às atribuições.","Ajude a começar e a terminar no horário.","Distribua as decisões às responsáveis."]},
      { t:"Cuidar dos registros", i:["Mantenha a frequência atualizada.","Ajude a identificar as jovens que faltam.","Registre as participações e designações.","Confira os dados periodicamente."]},
      { t:"Apoiar o orçamento", i:["Ajude a planejar e controlar as despesas.","Guarde os comprovantes organizados.","Ajude a preparar o orçamento anual.","Confira as despesas antes de registrar."]},
      { t:"Comunicar", i:["Ajude a avisar sobre atividades e acampamentos.","Colabore com a secretária da ala.","Confirme presença nas atividades.","Avise as famílias com antecedência."]},
      { t:"Servir com fidelidade", i:["Seja pontual e confiável.","Trate os dados com discrição.","Seja organizada em tudo.","Cumpra suas tarefas sem ser lembrada."]},
    ],
    fecho:{ t:"A fidelidade da secretária ajuda a presidência a não perder nenhuma jovem de vista. Todo serviço conta na obra do Senhor.", f:"Manual Geral, cap. 11" },
  }),
];

// Fábrica das presidências de classe por faixa etária (4 jovens + 1 consultora adulta)
function classeMocas(faixa, idade){
  return [
    full("Presidente da classe", {
      escritura:{ t:"Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis.", r:"1 Timóteo 4:12" },
      proposito:"Jovem chamada pelo bispado para presidir a classe "+faixa+" ("+idade+"). Lidera o trabalho de salvação e exaltação entre as jovens da classe: preside, planeja as reuniões dominicais e as atividades, e ajuda cada moça a achegar-se a Cristo. Recebe autoridade delegada para presidir.",
      ref:"Manual Geral, 11.3.4",
      resp:[
        "Presidir a classe com suas conselheiras e secretária.",
        "Planejar as reuniões dominicais e as atividades da classe.",
        "Conhecer e cuidar de cada moça, inclusive as menos ativas.",
        "Aconselhar-se com a consultora e representar a classe no comitê de jovens.",
        "Ajudar cada moça a definir e a alcançar metas no programa Crianças e Jovens.",
        "Trabalhar com a consultora e prestar contas à presidência das Moças.",
      ],
      areas:[
        { t:"Presidir por revelação", i:["Busque a orientação do Senhor sobre a classe.","Reúna a presidência e delegue.","Deixe cada conselheira liderar sua área.","Ore por inspiração antes das decisões."]},
        { t:"Cuidar de cada moça", i:["Conheça as jovens e alcance as que faltam.","Ministre e convide com amor.","Convide pessoalmente as que faltam.","Interesse-se pela vida de cada uma."]},
        { t:"Dar o exemplo", i:["Seja exemplo dos fiéis na palavra e no trato.","Conduza com fé e reverência.","Cumpra seus convênios com fidelidade.","Trate cada jovem com bondade."]},
        { t:"Planejar com propósito", i:["Use o programa Crianças e Jovens.","Planeje reuniões e atividades que edifiquem.","Inclua momentos espirituais nas atividades.","Envolva as jovens no planejamento."]},
        { t:"Trabalhar com a consultora", i:["Aceite orientação e aprenda a liderar.","Prepare-se para servir a vida toda.","Ouça a orientação com humildade.","Peça ajuda quando precisar."]},
      ],
      fecho:{ t:"Ao presidir sua classe, a jovem aprende que liderar é servir. Ela guia suas amigas a fazerem e guardarem convênios com o Salvador.", f:"Manual Geral, cap. 11" },
    }),
    full("Primeira Conselheira", {
      proposito:"Jovem chamada para servir na presidência da classe "+faixa+", auxiliando a presidente e assumindo as designações que receber.",
      ref:"Manual Geral, 11.3.4",
      resp:["Auxiliar a presidente e presidir na sua ausência.","Assumir as áreas designadas.","Ajudar a cuidar de cada moça da classe.","Participar da presidência da classe.","Ajudar a planejar as reuniões e atividades da classe.","Dar o exemplo de dignidade e disposição."],
      areas:[
        { t:"Apoiar a presidente", i:["Cumpra suas designações.","Prepare-se para presidir quando necessário.","Aja com iniciativa nas suas responsabilidades.","Mantenha a presidente informada."]},
        { t:"Cuidar das moças", i:["Conheça as jovens e alcance as que faltam.","Incentive a amizade.","Convide as menos ativas pessoalmente.","Acolha as novas na classe."]},
        { t:"Servir e ministrar", i:["Ajude a organizar reuniões e atividades.","Dê o exemplo de disposição.","Cumpra suas designações de ministração.","Leve à presidência as necessidades que perceber."]},
        { t:"Preparar-se", i:["Aprenda a liderar servindo.","Busque experiências espirituais.","Estude o programa Crianças e Jovens.","Participe dos treinamentos."]},
        { t:"Ser exemplo", i:["Viva o evangelho com sinceridade.","Convide as amigas a participarem.","Guarde seus convênios.","Ajude as amigas pelo seu exemplo."]},
      ],
      fecho:{ t:"A conselheira fiel fortalece a presidente e a classe. Servir agora prepara para servir sempre.", f:"Manual Geral, cap. 11" },
    }),
    full("Segunda Conselheira", {
      proposito:"Jovem chamada para servir na presidência da classe "+faixa+", auxiliando a presidente e a primeira conselheira nas designações que receber.",
      ref:"Manual Geral, 11.3.4",
      resp:["Auxiliar a presidência conforme designada.","Ajudar a cuidar de cada moça da classe.","Apoiar as reuniões e atividades.","Substituir a primeira conselheira quando necessário.","Ajudar a acolher e a integrar as novas moças.","Apoiar a organização das reuniões e do serviço."],
      areas:[
        { t:"Apoiar a presidência", i:["Cumpra bem as designações.","Esteja pronta para servir.","Assuma áreas específicas para ajudar.","Comunique o andamento à presidente."]},
        { t:"Cuidar das moças", i:["Ajude a alcançar as que faltam.","Incentive a amizade na classe.","Conheça cada jovem pelo nome.","Convide as que faltam."]},
        { t:"Servir", i:["Participe das atividades e do serviço.","Dê o exemplo de bom ânimo.","Ajude nos projetos de serviço.","Ofereça-se para ajudar sem ser pedido."]},
        { t:"Preparar-se", i:["Aprenda a liderar observando e servindo.","Busque dignidade pessoal.","Estude as escrituras.","Busque experiências espirituais."]},
        { t:"Ser exemplo", i:["Viva com integridade.","Convide amigas a se achegarem a Cristo.","Guarde os mandamentos.","Ajude as mais novas pelo seu exemplo."]},
      ],
      fecho:{ t:"Toda jovem que serve com fidelidade cresce em fé. O Senhor honra os corações dispostos.", f:"Manual Geral, cap. 11" },
    }),
    full("Secretária", {
      proposito:"Jovem chamada dentre as moças da classe "+faixa+" para ajudar a presidência: registra a frequência e ajuda a acompanhar cada moça e as designações.",
      ref:"Manual Geral, 11.3.4",
      resp:["Registrar a frequência da classe.","Anotar as designações e ajudar a acompanhá-las.","Ajudar a identificar as moças que faltam.","Apoiar a presidência nas reuniões e atividades.","Ajudar a comunicar as atividades e reuniões às jovens.","Apoiar o acompanhamento das metas do programa Crianças e Jovens."],
      areas:[
        { t:"Manter os registros", i:["Anote presença e designações com cuidado.","Mantenha tudo organizado.","Registre as participações e designações.","Ajude a manter a lista da classe atualizada."]},
        { t:"Acompanhar as ausentes", i:["Ajude a notar quem faltou.","Comunique a presidência.","Ajude a organizar convites às que faltam.","Acompanhe se foram contatadas."]},
        { t:"Ajudar nas reuniões", i:["Prepare o que a presidência precisar.","Ajude a manter o horário.","Prepare os materiais necessários.","Registre as designações feitas."]},
        { t:"Comunicar", i:["Ajude a avisar sobre atividades.","Colabore com os líderes.","Confirme presença nas atividades.","Avise sobre mudanças com antecedência."]},
        { t:"Servir com fidelidade", i:["Seja pontual e confiável.","Dê o exemplo de responsabilidade.","Guarde as informações com cuidado.","Cumpra suas tarefas sem ser lembrada."]},
      ],
      fecho:{ t:"A fidelidade da secretária ajuda a presidência a cuidar de cada jovem. Nenhum serviço é pequeno demais.", f:"Manual Geral, cap. 11" },
    }),
    full("Consultora", {
      proposito:"Adulta chamada para apoiar e orientar a presidência e as moças da classe "+faixa+" ("+idade+"), sob a direção da presidência das Moças. Ensina, ministra e caminha ao lado das jovens — sempre sob as normas de proteção de menores.",
      ref:"Manual Geral, 11.3.5",
      resp:[
        "Apoiar e orientar a presidência de classe sem tomar o lugar das jovens.",
        "Ensinar as reuniões dominicais da classe quando designada, com o guia “Para a Força dos Jovens” (novo currículo dos jovens a partir de setembro de 2026).",
        "Participar das reuniões e atividades e ministrar às moças.",
        "Cumprir a norma dos dois adultos responsáveis e as diretrizes de Proteção da Criança e do Jovem (11.6.1).",
        "Ajudar as jovens a se prepararem para as ordenanças do templo e para o futuro.",
        "Ministrar às moças e apoiar suas famílias.",
      ],
      areas:[
        { t:"Deixar as jovens liderarem", i:["Oriente nos bastidores; não assuma a liderança.","Ajude-as a preparar e dirigir as reuniões.","Faça perguntas em vez de dar respostas prontas.","Elogie e incentive suas iniciativas."]},
        { t:"Ensinar e testificar", i:["Ministre aulas centradas em Jesus Cristo.","Seja um exemplo de discipulado.","Prepare aulas simples e envolventes.","Convide o Espírito com sua atitude."]},
        { t:"Ministrar a cada moça", i:["Conheça-as e interesse-se por sua vida.","Alcance as menos ativas com amor.","Vá a apresentações e marcos importantes.","Esteja disponível para conversar."]},
        { t:"Proteger sempre", i:["Nunca fique a sós com uma menor — dois adultos.","Faça o treinamento e siga as normas de proteção.","Comunique imediatamente qualquer preocupação de segurança.","Nunca transporte uma menor sozinha."]},
        { t:"Ajudar a crescer", i:["Apoie as metas do programa Crianças e Jovens.","Ajude cada jovem a firmar-se na fé.","Incentive o estudo diário das escrituras.","Ajude cada jovem a estabelecer metas espirituais."]},
      ],
      fecho:{ t:"A consultora que ama e protege as jovens torna-se mentora e amiga para toda a vida. Seu exemplo as aproxima do Salvador.", f:"Manual Geral, cap. 11" },
    }),
  ];
}

const MOCAS_GERAIS = [
  full("Especialista das Moças", {
    proposito:"Chamada para ajudar em necessidades específicas das Moças — atividades, projetos ou habilidades particulares — sob a direção da presidência, observando a proteção de menores.",
    ref:"Manual Geral, 11.3.6",
    resp:["Apoiar tarefas e atividades específicas conforme designada.","Trabalhar com a presidência das Moças e as consultoras.","Observar as normas de proteção de menores.","Ajudar a preparar atividades e acampamentos quando designada.","Apoiar a presidência na logística e na segurança.","Compartilhar habilidades que edifiquem as jovens."],
    areas:[
      { t:"Servir conforme designada", i:["Cumpra bem a tarefa confiada.","Combine expectativas com a presidência.","Alinhe-se com a presidência sobre a tarefa.","Cumpra sua parte com pontualidade."]},
      { t:"Usar seus talentos", i:["Compartilhe habilidades que abençoem as jovens.","Ensine com paciência.","Adapte o que ensina à idade das jovens.","Incentive-as a desenvolver seus próprios dons."]},
      { t:"Trabalhar em equipe", i:["Coordene com a presidência e consultoras.","Comunique-se com clareza.","Combine antecipadamente os detalhes.","Apoie sem assumir o lugar das líderes."]},
      { t:"Proteger as jovens", i:["Mantenha a norma dos dois adultos.","Siga as diretrizes de proteção de menores.","Nunca fique a sós com uma menor.","Faça o treinamento de proteção de menores."]},
      { t:"Servir com dedicação", i:["Seja confiável e pontual.","Dê o exemplo de bom ânimo.","Chegue preparada e no horário.","Ajude com alegria, mesmo nas tarefas simples."]},
    ],
    fecho:{ t:"Talentos a serviço das jovens edificam a próxima geração. Sua ajuda faz diferença real.", f:"Manual Geral, cap. 11" },
  }),
  full("Especialista das Moças — Atividades", {
    proposito:"Ajuda a planejar e realizar as atividades das Moças que fortalecem a fé, os convênios e a amizade, sob a direção da presidência e observando a proteção de menores.",
    ref:"Manual Geral, 11.3.6",
    resp:["Planejar atividades sob a direção da presidência.","Cuidar de local, recursos, orçamento e segurança.","Incluir todas as jovens.","Assegurar a norma dos dois adultos responsáveis.","Envolver as jovens no planejamento e na realização.","Avaliar cada atividade e ajustar as próximas."],
    areas:[
      { t:"Planejar com propósito", i:["Escolha atividades que fortaleçam os convênios.","Planeje com antecedência.","Defina um objetivo claro para cada atividade.","Equilibre convívio, serviço e aprendizado."]},
      { t:"Incluir a todas", i:["Convide também as menos ativas.","Crie um ambiente acolhedor.","Convide pessoalmente as que costumam faltar.","Pense em quem tem necessidades especiais."]},
      { t:"Cuidar da logística", i:["Providencie local, recursos e orçamento aprovado.","Prepare os detalhes com cuidado.","Confirme local, transporte e recursos com antecedência.","Tenha um plano para imprevistos."]},
      { t:"Proteger as jovens", i:["Mantenha dois adultos responsáveis.","Siga as diretrizes de segurança.","Faça o treinamento de proteção de menores.","Nunca deixe uma jovem sozinha com um adulto."]},
      { t:"Avaliar e melhorar", i:["Peça sugestões às jovens.","Ajuste as próximas atividades.","Registre o que deu certo para repetir.","Ouça o que as jovens gostaram e o que faltou."]},
    ],
    fecho:{ t:"Boas atividades fortalecem a fé e a amizade. Ao reunir as jovens com propósito, você ajuda cada uma a permanecer firme.", f:"Manual Geral, cap. 11" },
  }),
  full("Especialista das Moças — Esportes", {
    proposito:"Ajuda a organizar atividades esportivas saudáveis e seguras para as moças, promovendo boa esportividade, inclusão e amizade, sob a direção da presidência e observando a proteção de menores.",
    ref:"Manual Geral, 11.3.6",
    resp:["Planejar e conduzir atividades esportivas seguras.","Promover a boa esportividade e a inclusão.","Cuidar da segurança das jovens.","Assegurar a norma dos dois adultos responsáveis.","Cuidar dos equipamentos e do espaço.","Integrar o esporte ao propósito espiritual."],
    areas:[
      { t:"Planejar com segurança", i:["Escolha atividades adequadas à idade.","Verifique local, equipamentos e primeiros socorros.","Tenha um plano para lesões e emergências.","Adapte as regras para incluir todas."]},
      { t:"Ensinar esportividade", i:["Valorize o esforço e o respeito.","Seja exemplo de bom espírito.","Corrija com bondade e incentive o respeito.","Ensine a ganhar e a perder com dignidade."]},
      { t:"Incluir a todas", i:["Convide também as menos habilidosas.","Forme equipes acolhedoras.","Convide pessoalmente as que costumam faltar.","Garanta que todas joguem."]},
      { t:"Proteger as jovens", i:["Mantenha dois adultos responsáveis.","Siga as diretrizes de proteção.","Faça o treinamento de proteção de menores.","Nunca deixe uma jovem sozinha com um adulto."]},
      { t:"Coordenar", i:["Alinhe as atividades com a presidência.","Integre o esporte ao propósito espiritual.","Combine datas e locais com antecedência.","Comunique-se com os pais quando necessário."]},
    ],
    fecho:{ t:"O esporte saudável constrói amizade e caráter. Ao servir com cuidado, você ajuda cada jovem a sentir-se incluída.", f:"Manual Geral, cap. 11" },
  }),
  full("Especialista das Moças — Diretora de Acampamento", {
    escritura:{ t:"Aprende em tua juventude a guardar os mandamentos de Deus.", r:"Alma 37:35" },
    proposito:"Planeja e realiza os acampamentos das Moças, criando experiências que fortaleçam a fé e a fraternidade, com total atenção à segurança e à proteção das jovens.",
    ref:"Manual Geral, 11.3.6 (ver cap. 20)",
    resp:[
      "Planejar o acampamento: local, logística, alimentação e programa espiritual.",
      "Garantir a segurança e obter as autorizações necessárias.",
      "Coordenar com a presidência das Moças e os pais.",
      "Assegurar a norma dos dois adultos responsáveis em todo o acampamento.",
      "Envolver as jovens e as presidências de classe no planejamento.",
      "Preparar um programa espiritual com devocionais e testemunhos.",
    ],
    areas:[
      { t:"Planejar com propósito espiritual", i:["Inclua devocionais, oração e testemunho.","Ligue as atividades ao programa Crianças e Jovens.","Reserve tempo para reflexão e testemunho.","Equilibre atividade e experiências espirituais."]},
      { t:"Segurança em primeiro lugar", i:["Providencie primeiros socorros e plano de emergência.","Obtenha autorizações e verifique riscos do local.","Tenha contatos de emergência e um plano claro.","Verifique clima, água e condições do local."]},
      { t:"Cuidar da logística", i:["Organize transporte, alimentação e equipamentos.","Distribua responsabilidades com antecedência.","Prepare uma lista de materiais e mantimentos.","Confirme transporte e autorizações com antecedência."]},
      { t:"Envolver as jovens na liderança", i:["Deixe as presidências de classe ajudarem a planejar.","Dê oportunidades de servir e liderar.","Peça-lhes que conduzam partes do acampamento.","Reconheça e agradeça seu serviço."]},
      { t:"Proteger sempre", i:["Mantenha dois adultos responsáveis em todas as situações.","Siga rigorosamente as diretrizes de proteção de menores.","Faça o treinamento de proteção de menores.","Organize os alojamentos conforme as diretrizes."]},
    ],
    fecho:{ t:"Um bom acampamento marca a vida de uma jovem para sempre. Ao unir fé, natureza e segurança, você cria memórias que fortalecem o testemunho.", f:"Manual Geral, cap. 11" },
  }),
  full("Especialista das Moças — Diretora Adjunta de Acampamento", {
    proposito:"Apoia a diretora de acampamento das Moças no planejamento e na realização dos acampamentos, substituindo-a quando necessário e ajudando a garantir segurança e propósito espiritual.",
    ref:"Manual Geral, 11.3.6",
    resp:["Ajudar a planejar e conduzir o acampamento.","Apoiar a segurança e a logística.","Ajudar a coordenar com a presidência e os pais.","Assegurar a presença de dois adultos responsáveis.","Ajudar a preparar o programa espiritual.","Mobilizar e acolher as participantes."],
    areas:[
      { t:"Apoiar a diretora", i:["Combine a divisão das tarefas.","Esteja pronta para assumir quando necessário.","Alinhe as tarefas de cada etapa.","Aja com iniciativa."]},
      { t:"Cuidar da segurança", i:["Ajude com primeiros socorros e plano de emergência.","Verifique autorizações e riscos.","Confira os riscos do local.","Saiba os contatos de emergência."]},
      { t:"Ajudar na logística", i:["Apoie transporte, alimentação e equipamentos.","Confirme os detalhes com antecedência.","Prepare listas de materiais.","Acompanhe a montagem e a desmontagem."]},
      { t:"Fortalecer o espiritual", i:["Ajude a preparar devocionais.","Incentive a reverência.","Ajude a conduzir os devocionais.","Incentive a oração e a reverência."]},
      { t:"Proteger sempre", i:["Ajude a manter dois adultos em todas as situações.","Siga as diretrizes de proteção de menores.","Faça o treinamento de proteção de menores.","Ajude a organizar os alojamentos conforme as normas."]},
    ],
    fecho:{ t:"O apoio fiel de uma adjunta torna o acampamento seguro e inspirador. Sua dedicação abençoa cada jovem presente.", f:"Manual Geral, cap. 11" },
  }),
];

/* ---- CONTEÚDO COMPLETO: ESCOLA DOMINICAL ------------------------------- */
