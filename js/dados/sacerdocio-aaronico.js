"use strict";

const SA_SACERDOTES = [
  full("Presidente do Quórum de Sacerdotes (o bispo)", {
    escritura:{ t:"Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis, na palavra, no trato, no amor, na fé e na pureza.", r:"1 Timóteo 4:12" },
    proposito:"O bispo é o presidente do quórum de sacerdotes. Preside, ensina e cuida dos rapazes de 16 a 18 anos, ajudando-os a cumprir seus deveres no sacerdócio, a preparar-se para o templo e a missão e a aprofundar sua conversão a Jesus Cristo. (Seu papel completo está no Bispado.)",
    ref:"Manual Geral, 10.3",
    resp:[
      "Presidir o quórum de sacerdotes e suas reuniões (10.3).",
      "Ensinar os sacerdotes seus deveres — administrar o sacramento, batizar, ordenar e ministrar — e ajudá-los a cumpri-los (ver D&C 20:46–52).",
      "Escolher e orientar o primeiro e o segundo assistentes e a presidência do quórum.",
      "Reunir-se com o quórum e com cada rapaz, guiando-os no programa Crianças e Jovens.",
      "Zelar pela proteção dos rapazes, cumprindo a norma dos dois adultos responsáveis.",
      "Convidar os sacerdotes a participar da obra missionária e do serviço.",
      "Preparar os rapazes para receberem o Sacerdócio de Melquisedeque.",
    ],
    areas:[
      { t:"Presidir e delegar", i:[
        "Reúna a presidência do quórum (assistentes) e deixe os rapazes liderarem.",
        "Delegue responsabilidades e oriente-os com paciência.",
        "Busque revelação em conjunto sobre cada sacerdote.",
        "Deixe o primeiro assistente conduzir as reuniões.",
      ]},
      { t:"Ensinar os deveres do sacerdócio", i:[
        "Ajude-os a magnificar o sacramento, o batismo e a ministração.",
        "Ensine o poder e as bênçãos do sacerdócio.",
        "Convide-os a abençoar e a passar o sacramento com reverência.",
        "Ajude-os a entender os convênios do sacerdócio.",
      ]},
      { t:"Preparar para o templo e a missão", i:[
        "Faça entrevistas e incentive dignidade e metas.",
        "Ajude cada rapaz a preparar-se para as ordenanças do templo.",
        "Convide os rapazes a batizar por seus antepassados.",
        "Ajude-os a definir metas de preparação missionária.",
      ]},
      { t:"Conhecer cada rapaz", i:[
        "Ministre individualmente e alcance os menos ativos.",
        "Ajude cada um a sentir-se necessário e amado.",
        "Reúna-se individualmente com cada sacerdote.",
        "Interesse-se por sua escola, família e amigos.",
      ]},
      { t:"Proteger e fortalecer", i:[
        "Cumpra sempre as normas de Proteção da Criança e do Jovem.",
        "Mantenha um ambiente seguro e espiritual em reuniões e atividades.",
        "Assegure dois adultos responsáveis em toda atividade com menores.",
        "Ensine os rapazes a se protegerem e a buscar ajuda.",
      ]},
    ],
    fecho:{ t:"Ao presidir os sacerdotes com amor, o bispo ajuda cada rapaz a preparar-se para servir ao Senhor a vida toda. Eles são exemplo dos fiéis.", f:"Manual Geral, cap. 10 e 7" },
  }),

  full("Primeiro Assistente", {
    proposito:"Rapaz chamado dentre os sacerdotes para assistir o bispo na liderança do quórum. Preside as reuniões do quórum sob a direção do bispo e o representa em sua ausência, ajudando os demais a cumprirem seus deveres.",
    ref:"Manual Geral, 10.3",
    resp:[
      "Assistir o bispo e presidir o quórum em sua ausência.",
      "Ajudar a planejar e conduzir as reuniões e atividades do quórum.",
      "Convidar e cuidar de cada sacerdote, inclusive os menos ativos.",
      "Trabalhar com o segundo assistente e o secretário.",
      "Ajudar a designar os sacerdotes para abençoar e passar o sacramento.",
      "Dar o exemplo de dignidade e serviço para os mais novos.",
    ],
    areas:[
      { t:"Liderar pelo exemplo", i:[
        "Prepare e conduza as reuniões com reverência.",
        "Seja um exemplo de dignidade para os demais.",
        "Comece e termine as reuniões no horário.",
        "Trate cada rapaz com respeito.",
      ]},
      { t:"Cuidar de cada sacerdote", i:[
        "Conheça os rapazes e alcance os que faltam.",
        "Incentive cada um a cumprir seus deveres.",
        "Convide pessoalmente os que faltam.",
        "Acolha os novos no quórum.",
      ]},
      { t:"Planejar com propósito", i:[
        "Use o programa Crianças e Jovens para guiar metas.",
        "Ajude a organizar o serviço e as atividades.",
        "Envolva os rapazes no planejamento.",
        "Inclua momentos espirituais nas atividades.",
      ]},
      { t:"Servir e ministrar", i:[
        "Organize a ministração do quórum.",
        "Dê o exemplo no serviço aos outros.",
        "Ajude a organizar projetos de serviço.",
        "Cumpra suas designações de ministração.",
      ]},
      { t:"Buscar dignidade pessoal", i:[
        "Prepare-se para o templo e a missão.",
        "Viva de modo a convidar o Espírito.",
        "Guarde os mandamentos para poder abençoar.",
        "Seja exemplo dos fiéis para os mais novos.",
      ]},
    ],
    fecho:{ t:"Ao servir como assistente, o rapaz aprende a liderar como o Salvador — servindo primeiro. Sua fidelidade fortalece todo o quórum.", f:"Manual Geral, cap. 10" },
  }),

  full("Segundo Assistente", {
    proposito:"Rapaz chamado dentre os sacerdotes para assistir o bispo e o primeiro assistente na liderança do quórum, assumindo as designações que receber.",
    ref:"Manual Geral, 10.3",
    resp:[
      "Assistir o bispo e o primeiro assistente conforme designado.",
      "Ajudar a cuidar de cada sacerdote do quórum.",
      "Apoiar as reuniões, atividades e a ministração.",
      "Substituir o primeiro assistente quando necessário.",
      "Ajudar a organizar o sacramento e o serviço do quórum.",
      "Ajudar a acolher e a integrar os novos sacerdotes.",
    ],
    areas:[
      { t:"Apoiar a liderança", i:[
        "Cumpra prontamente as designações recebidas.",
        "Esteja pronto para servir quando necessário.",
        "Assuma áreas específicas para aliviar o presidente.",
        "Comunique o andamento ao bispo e ao primeiro assistente.",
      ]},
      { t:"Cuidar dos rapazes", i:[
        "Ajude a alcançar os que faltam.",
        "Incentive a fraternidade no quórum.",
        "Conheça cada sacerdote pelo nome.",
        "Convide os menos ativos pessoalmente.",
      ]},
      { t:"Servir e ministrar", i:[
        "Participe da ministração e do serviço.",
        "Dê o exemplo de disposição.",
        "Ajude nos projetos de serviço.",
        "Cumpra suas designações de ministração.",
      ]},
      { t:"Preparar-se", i:[
        "Aprenda a liderar observando e servindo.",
        "Busque dignidade pessoal.",
        "Estude as escrituras diariamente.",
        "Prepare-se para o templo e a missão.",
      ]},
      { t:"Ser exemplo", i:[
        "Viva o evangelho com sinceridade.",
        "Convide os amigos a se achegarem a Cristo.",
        "Guarde a dignidade pessoal.",
        "Ajude os mais novos com o seu exemplo.",
      ]},
    ],
    fecho:{ t:"Cada rapaz que serve com fidelidade cresce em capacidade e em fé. O Senhor magnifica os que se dispõem a ajudar.", f:"Manual Geral, cap. 10" },
  }),

  full("Secretário do Quórum de Sacerdotes", {
    proposito:"Rapaz chamado dentre os sacerdotes para ajudar a presidência do quórum: registra a frequência, ajuda a acompanhar as designações e apoia a organização das reuniões e atividades.",
    ref:"Manual Geral, 10.4",
    resp:[
      "Registrar a frequência do quórum.",
      "Anotar as designações e ajudar a acompanhá-las.",
      "Ajudar a identificar os rapazes que faltam, para que sejam alcançados.",
      "Apoiar a presidência nas reuniões e atividades.",
      "Ajudar a comunicar as atividades e reuniões aos rapazes.",
      "Apoiar o acompanhamento das metas do programa Crianças e Jovens.",
    ],
    areas:[
      { t:"Manter os registros", i:[
        "Anote a presença e as designações com cuidado.",
        "Mantenha as informações organizadas.",
        "Registre também as ordenanças realizadas.",
        "Ajude a manter atualizada a lista do quórum.",
      ]},
      { t:"Acompanhar os ausentes", i:[
        "Ajude a notar quem faltou para alcançá-los.",
        "Comunique a presidência prontamente.",
        "Ajude a organizar convites aos que faltam.",
        "Acompanhe se foram contatados.",
      ]},
      { t:"Ajudar nas reuniões", i:[
        "Prepare o que a presidência precisar.",
        "Ajude a começar e a terminar no horário.",
        "Prepare os materiais necessários.",
        "Registre as designações feitas.",
      ]},
      { t:"Comunicar", i:[
        "Ajude a avisar os rapazes sobre atividades.",
        "Colabore com o secretário da ala quando necessário.",
        "Confirme presença nas atividades.",
        "Avise sobre mudanças com antecedência.",
      ]},
      { t:"Servir com fidelidade", i:[
        "Seja pontual e confiável.",
        "Dê o exemplo de responsabilidade.",
        "Guarde com cuidado as informações.",
        "Cumpra suas tarefas sem precisar ser lembrado.",
      ]},
    ],
    fecho:{ t:"A fidelidade nos detalhes ajuda a presidência a cuidar de cada rapaz. Nenhum serviço é pequeno aos olhos do Senhor.", f:"Manual Geral, cap. 10" },
  }),

  full("Consultor do Quórum de Sacerdotes", {
    escritura:{ t:"E eis que, sois chamados para… serdes agentes uns dos outros.", r:"Doutrina e Convênios 38:23–24" },
    proposito:"Adulto chamado para apoiar e orientar os sacerdotes sob a direção do bispo. Ensina, ministra e caminha ao lado dos rapazes, ajudando-os a liderar e a crescer — sempre sob as normas de proteção de menores.",
    ref:"Manual Geral, 10.5",
    resp:[
      "Apoiar e orientar a presidência do quórum sem tomar o lugar dos rapazes.",
      "Ensinar as aulas do quórum quando designado, com o guia “Para a Força dos Jovens” (novo currículo dos jovens a partir de setembro de 2026).",
      "Participar das reuniões e atividades e ministrar aos rapazes.",
      "Cumprir rigorosamente a norma dos dois adultos responsáveis e as diretrizes de Proteção da Criança e do Jovem.",
      "Ajudar os rapazes a se prepararem para o templo, a missão e o Sacerdócio de Melquisedeque.",
      "Ministrar aos sacerdotes e apoiar suas famílias.",
    ],
    areas:[
      { t:"Deixar os rapazes liderarem", i:[
        "Oriente nos bastidores; não assuma a liderança deles.",
        "Ajude-os a preparar e a conduzir as reuniões.",
        "Faça perguntas em vez de dar respostas prontas.",
        "Elogie e incentive suas iniciativas.",
      ]},
      { t:"Ensinar e testificar", i:[
        "Ministre aulas centradas em Jesus Cristo.",
        "Seja um exemplo constante de discipulado.",
        "Prepare aulas simples e envolventes.",
        "Convide o Espírito com sua atitude.",
      ]},
      { t:"Ministrar a cada rapaz", i:[
        "Conheça-os pelo nome e interesse-se por sua vida.",
        "Incentive e alcance os menos ativos.",
        "Vá a jogos, apresentações e marcos importantes.",
        "Esteja disponível para conversar.",
      ]},
      { t:"Proteger sempre", i:[
        "Nunca fique a sós com um menor — mantenha dois adultos.",
        "Faça o treinamento de proteção e siga todas as normas.",
        "Comunique imediatamente qualquer preocupação de segurança.",
        "Nunca transporte um menor sozinho.",
      ]},
      { t:"Preparar para o futuro", i:[
        "Apoie metas de templo, missão e sacerdócio.",
        "Ajude-os a firmar-se na fé antes da vida adulta.",
        "Incentive o estudo diário das escrituras.",
        "Ajude-os a estabelecer metas espirituais.",
      ]},
    ],
    fecho:{ t:"O consultor fiel é um mentor e amigo que aponta para Cristo. Ao servir com amor e retidão, deixa marcas eternas na vida dos rapazes.", f:"Manual Geral, cap. 10" },
  }),

  full("Especialista do Quórum de Sacerdotes", {
    proposito:"Chamado para ajudar em necessidades específicas do quórum de sacerdotes — atividades, projetos ou habilidades particulares — sob a direção do bispo e dos consultores.",
    ref:"Manual Geral, 10.5",
    resp:[
      "Apoiar tarefas e atividades específicas conforme designado.",
      "Trabalhar com os consultores e a presidência do quórum.",
      "Observar as normas de proteção de menores.",
      "Ajudar a preparar atividades e acampamentos quando designado.",
      "Apoiar os consultores na segurança e na logística.",
      "Compartilhar habilidades que edifiquem os rapazes.",
    ],
    areas:[
      { t:"Servir conforme designado", i:[
        "Cumpra bem a tarefa específica que lhe foi confiada.",
        "Combine expectativas com os líderes.",
        "Alinhe expectativas com o bispado e os consultores.",
        "Cumpra sua parte com pontualidade.",
      ]},
      { t:"Usar seus talentos", i:[
        "Compartilhe habilidades que abençoem os rapazes.",
        "Ensine com paciência.",
        "Adapte o que ensina à idade dos rapazes.",
        "Incentive-os a desenvolver seus próprios dons.",
      ]},
      { t:"Trabalhar em equipe", i:[
        "Coordene com consultores e presidência.",
        "Comunique-se com clareza.",
        "Combine antecipadamente os detalhes.",
        "Apoie os líderes sem assumir o lugar deles.",
      ]},
      { t:"Proteger os rapazes", i:[
        "Mantenha a norma dos dois adultos.",
        "Siga as diretrizes de proteção de menores.",
        "Nunca fique a sós com um menor.",
        "Faça o treinamento de proteção de menores.",
      ]},
      { t:"Servir com dedicação", i:[
        "Seja pontual e confiável.",
        "Dê o exemplo de bom ânimo.",
        "Chegue preparado e no horário.",
        "Ajude com alegria, mesmo nas tarefas simples.",
      ]},
    ],
    fecho:{ t:"Cada talento colocado a serviço dos rapazes edifica o reino. Sua ajuda, mesmo pontual, faz diferença real.", f:"Manual Geral, cap. 10" },
  }),
];

const SA_MESTRES = [
  full("Presidente do Quórum de Mestres", {
    escritura:{ t:"Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis.", r:"1 Timóteo 4:12" },
    proposito:"Rapaz chamado pelo bispo, por revelação, e designado para presidir o quórum de mestres (14 e 15 anos). Presta serviço aos demais: preside, ensina e cuida, recebendo autoridade delegada para presidir — as chaves do Sacerdócio Aarônico permanecem com o bispo.",
    ref:"Manual Geral, 10.4",
    resp:[
      "Presidir o quórum de mestres com seus conselheiros e secretário.",
      "Ajudar cada mestre a cumprir seus deveres — preparar o sacramento, ministrar como companheiro e zelar pela Igreja (ver D&C 20:53–59).",
      "Convidar e cuidar de todos, inclusive os menos ativos.",
      "Aconselhar-se com os consultores adultos e representar o quórum no comitê de jovens.",
      "Ajudar a designar os mestres para preparar o sacramento e ministrar.",
      "Zelar pela proteção dos rapazes com a norma dos dois adultos.",
    ],
    areas:[
      { t:"Presidir por revelação", i:[
        "Busque orientação do Senhor sobre o quórum.",
        "Reúna a presidência e delegue com confiança.",
        "Deixe cada conselheiro liderar sua área.",
        "Ore por inspiração antes das decisões.",
      ]},
      { t:"Cuidar de cada mestre", i:[
        "Conheça os rapazes e alcance os que faltam.",
        "Ministre e incentive cada um.",
        "Convide pessoalmente os que faltam.",
        "Interesse-se pela vida de cada rapaz.",
      ]},
      { t:"Ensinar pelo exemplo", i:[
        "Seja exemplo dos fiéis na palavra e no trato.",
        "Conduza com fé e reverência.",
        "Cumpra seus próprios deveres com fidelidade.",
        "Dê o exemplo de reverência nas reuniões.",
      ]},
      { t:"Usar o programa Crianças e Jovens", i:[
        "Ajude cada rapaz a definir e a alcançar metas.",
        "Planeje atividades que fortaleçam a fé.",
        "Ajude cada rapaz a ter experiências espirituais.",
        "Comemore o progresso deles.",
      ]},
      { t:"Trabalhar com os consultores", i:[
        "Aceite orientação e aprenda a liderar.",
        "Prepare-se para receber o Sacerdócio de Melquisedeque no futuro.",
        "Ouça a orientação com humildade.",
        "Peça ajuda quando precisar.",
      ]},
    ],
    fecho:{ t:"Ao presidir por revelação, o jovem presidente aprende que o sacerdócio é para servir. Ele guia seus amigos a se achegarem a Cristo.", f:"Manual Geral, cap. 10" },
  }),

  full("Primeiro Conselheiro", {
    proposito:"Rapaz chamado para servir na presidência do quórum de mestres, auxiliando o presidente e assumindo as designações que receber, frequentemente ligadas à ministração e ao serviço.",
    ref:"Manual Geral, 10.4",
    resp:[
      "Auxiliar o presidente e presidir na sua ausência.",
      "Assumir as áreas designadas (p.ex. ministração ou serviço).",
      "Ajudar a cuidar de cada mestre do quórum.",
      "Participar da presidência do quórum.",
      "Ajudar a organizar o serviço e a ministração do quórum.",
      "Dar o exemplo de dignidade e disposição.",
    ],
    areas:[
      { t:"Apoiar o presidente", i:[
        "Cumpra prontamente suas designações.",
        "Prepare-se para presidir quando necessário.",
        "Aja com iniciativa nas suas responsabilidades.",
        "Mantenha o presidente informado.",
      ]},
      { t:"Cuidar dos rapazes", i:[
        "Conheça os mestres e alcance os que faltam.",
        "Incentive a fraternidade.",
        "Convide os menos ativos pessoalmente.",
        "Acolha os novos no quórum.",
      ]},
      { t:"Servir e ministrar", i:[
        "Organize a ministração e o serviço designados.",
        "Dê o exemplo de disposição.",
        "Ajude nos projetos de serviço.",
        "Cumpra suas designações de ministração.",
      ]},
      { t:"Preparar-se", i:[
        "Aprenda a liderar servindo.",
        "Busque dignidade pessoal.",
        "Estude as escrituras diariamente.",
        "Prepare-se para os próximos passos no sacerdócio.",
      ]},
      { t:"Ser exemplo", i:[
        "Viva o evangelho com sinceridade.",
        "Convide os amigos a participarem.",
        "Guarde a dignidade pessoal.",
        "Ajude os mais novos pelo seu exemplo.",
      ]},
    ],
    fecho:{ t:"O conselheiro fiel fortalece o presidente e o quórum. Ao servir agora, prepara-se para servir a vida inteira.", f:"Manual Geral, cap. 10" },
  }),

  full("Segundo Conselheiro", {
    proposito:"Rapaz chamado para servir na presidência do quórum de mestres, auxiliando o presidente e o primeiro conselheiro nas designações que receber.",
    ref:"Manual Geral, 10.4",
    resp:[
      "Auxiliar a presidência conforme designado.",
      "Ajudar a cuidar de cada mestre do quórum.",
      "Apoiar as reuniões, atividades e a ministração.",
      "Substituir o primeiro conselheiro quando necessário.",
      "Ajudar a acolher e a integrar os novos mestres.",
      "Apoiar a organização do sacramento e do serviço.",
    ],
    areas:[
      { t:"Apoiar a presidência", i:[
        "Cumpra bem as designações recebidas.",
        "Esteja pronto para servir.",
        "Assuma áreas específicas para ajudar.",
        "Comunique o andamento ao presidente.",
      ]},
      { t:"Cuidar dos rapazes", i:[
        "Ajude a alcançar os que faltam.",
        "Incentive a amizade no quórum.",
        "Conheça cada mestre pelo nome.",
        "Convide os que faltam pessoalmente.",
      ]},
      { t:"Servir e ministrar", i:[
        "Participe da ministração e do serviço.",
        "Dê o exemplo de bom ânimo.",
        "Ajude nos projetos de serviço.",
        "Cumpra suas designações de ministração.",
      ]},
      { t:"Preparar-se", i:[
        "Aprenda a liderar observando e servindo.",
        "Busque dignidade pessoal.",
        "Estude as escrituras diariamente.",
        "Prepare-se para os próximos passos no sacerdócio.",
      ]},
      { t:"Ser exemplo", i:[
        "Viva com integridade.",
        "Convide amigos a se achegarem a Cristo.",
        "Guarde os mandamentos.",
        "Ajude os mais novos pelo seu exemplo.",
      ]},
    ],
    fecho:{ t:"Todo rapaz que serve com fidelidade cresce em fé e em capacidade. O Senhor honra quem se dispõe a ajudar.", f:"Manual Geral, cap. 10" },
  }),

  full("Secretário do Quórum de Mestres", {
    proposito:"Rapaz chamado dentre os mestres para ajudar a presidência: registra a frequência, ajuda a acompanhar as designações e apoia a organização das reuniões e atividades.",
    ref:"Manual Geral, 10.4",
    resp:[
      "Registrar a frequência do quórum.",
      "Anotar as designações e ajudar a acompanhá-las.",
      "Ajudar a identificar os rapazes que faltam.",
      "Apoiar a presidência nas reuniões e atividades.",
      "Ajudar a comunicar as atividades e reuniões aos rapazes.",
      "Apoiar o acompanhamento das metas do programa Crianças e Jovens.",
    ],
    areas:[
      { t:"Manter os registros", i:[
        "Anote presença e designações com cuidado.",
        "Mantenha tudo organizado.",
        "Registre também as ordenanças realizadas.",
        "Ajude a manter atualizada a lista do quórum.",
      ]},
      { t:"Acompanhar os ausentes", i:[
        "Ajude a notar quem faltou para alcançá-los.",
        "Comunique a presidência.",
        "Ajude a organizar convites aos que faltam.",
        "Acompanhe se foram contatados.",
      ]},
      { t:"Ajudar nas reuniões", i:[
        "Prepare o que a presidência precisar.",
        "Ajude a manter o horário.",
        "Prepare os materiais necessários.",
        "Registre as designações feitas.",
      ]},
      { t:"Comunicar", i:[
        "Ajude a avisar os rapazes sobre atividades.",
        "Colabore com os líderes.",
        "Confirme presença nas atividades.",
        "Avise sobre mudanças com antecedência.",
      ]},
      { t:"Servir com fidelidade", i:[
        "Seja pontual e confiável.",
        "Dê o exemplo de responsabilidade.",
        "Guarde com cuidado as informações.",
        "Cumpra suas tarefas sem precisar ser lembrado.",
      ]},
    ],
    fecho:{ t:"A fidelidade nos detalhes ajuda a presidência a não perder nenhum rapaz de vista. Todo serviço conta.", f:"Manual Geral, cap. 10" },
  }),

  full("Consultor do Quórum de Mestres", {
    proposito:"Adulto chamado para apoiar e orientar os mestres sob a direção do bispado. Ensina, ministra e caminha ao lado dos rapazes, ajudando-os a liderar — sempre sob as normas de proteção de menores.",
    ref:"Manual Geral, 10.5",
    resp:[
      "Apoiar e orientar a presidência do quórum sem tomar o lugar dos rapazes.",
      "Ensinar as aulas do quórum quando designado, com o guia “Para a Força dos Jovens” (novo currículo dos jovens a partir de setembro de 2026).",
      "Participar das reuniões e atividades e ministrar aos rapazes.",
      "Cumprir a norma dos dois adultos responsáveis e as diretrizes de Proteção da Criança e do Jovem.",
      "Ajudar os rapazes a se prepararem para receber o Sacerdócio de Melquisedeque no futuro.",
      "Ministrar aos mestres e apoiar suas famílias.",
    ],
    areas:[
      { t:"Deixar os rapazes liderarem", i:[
        "Oriente nos bastidores; não assuma a liderança.",
        "Ajude-os a preparar e conduzir as reuniões.",
        "Faça perguntas em vez de dar respostas prontas.",
        "Elogie e incentive suas iniciativas.",
      ]},
      { t:"Ensinar e testificar", i:[
        "Ministre aulas centradas em Cristo.",
        "Seja um exemplo de discipulado.",
        "Prepare aulas simples e envolventes.",
        "Convide o Espírito com sua atitude.",
      ]},
      { t:"Ministrar a cada rapaz", i:[
        "Conheça-os e interesse-se por sua vida.",
        "Alcance os menos ativos.",
        "Vá a jogos, apresentações e marcos importantes.",
        "Esteja disponível para conversar.",
      ]},
      { t:"Proteger sempre", i:[
        "Nunca fique a sós com um menor — dois adultos.",
        "Faça o treinamento e siga as normas de proteção.",
        "Comunique imediatamente qualquer preocupação de segurança.",
        "Nunca transporte um menor sozinho.",
      ]},
      { t:"Ajudar a crescer", i:[
        "Apoie as metas do programa Crianças e Jovens.",
        "Prepare-os para os próximos passos no sacerdócio.",
        "Incentive o estudo diário das escrituras.",
        "Ajude-os a estabelecer metas espirituais.",
      ]},
    ],
    fecho:{ t:"O consultor que ama e protege os rapazes torna-se um mentor para toda a vida. Seu exemplo os aproxima do Salvador.", f:"Manual Geral, cap. 10" },
  }),

  full("Consultor Adjunto do Quórum de Mestres", {
    proposito:"Adulto que auxilia o consultor do quórum de mestres, garantindo apoio contínuo aos rapazes e o cumprimento das normas de proteção (dois adultos presentes).",
    ref:"Manual Geral, 10.5",
    resp:[
      "Auxiliar o consultor em reuniões, aulas e atividades.",
      "Ajudar a ministrar aos rapazes.",
      "Assegurar a presença de dois adultos responsáveis.",
      "Substituir o consultor quando necessário.",
      "Ajudar a ensinar as aulas do quórum quando pedido, com o guia “Para a Força dos Jovens” (novo currículo dos jovens a partir de setembro de 2026).",
      "Ministrar aos rapazes e apoiar suas famílias.",
    ],
    areas:[
      { t:"Apoiar o consultor", i:[
        "Combine a divisão do trabalho.",
        "Esteja pronto para assumir quando necessário.",
        "Alinhe com ele as prioridades.",
        "Aja com iniciativa quando necessário.",
      ]},
      { t:"Garantir a proteção", i:[
        "Ajude a manter sempre dois adultos com os rapazes.",
        "Siga as normas de proteção de menores.",
        "Faça o treinamento de proteção de menores.",
        "Comunique qualquer preocupação de segurança.",
      ]},
      { t:"Ministrar aos rapazes", i:[
        "Conheça-os e incentive-os.",
        "Alcance os que faltam.",
        "Conheça cada rapaz pelo nome.",
        "Vá a momentos importantes da vida deles.",
      ]},
      { t:"Apoiar as aulas", i:[
        "Ajude a preparar e a ensinar quando pedido.",
        "Mantenha o foco em Cristo.",
        "Prepare-se para ensinar quando pedido.",
        "Ajude a envolver os rapazes.",
      ]},
      { t:"Ser exemplo", i:[
        "Viva o evangelho com constância.",
        "Sirva com alegria.",
        "Guarde os mandamentos.",
        "Sirva com fidelidade e discrição.",
      ]},
    ],
    fecho:{ t:"A presença de um segundo adulto fiel protege e abençoa. Seu apoio torna o quórum um lugar seguro e edificante.", f:"Manual Geral, cap. 10" },
  }),
];

const SA_DIACONOS = [
  full("Presidente do Quórum de Diáconos", {
    escritura:{ t:"Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis.", r:"1 Timóteo 4:12" },
    proposito:"Rapaz chamado pelo bispo, por revelação, e designado para presidir o quórum de diáconos (12 e 13 anos). Presta serviço aos demais: preside, ensina e cuida, recebendo autoridade delegada para presidir — as chaves do Sacerdócio Aarônico permanecem com o bispo.",
    ref:"Manual Geral, 10.4",
    resp:[
      "Presidir o quórum de diáconos com seus conselheiros e secretário.",
      "Ajudar cada diácono a cumprir seus deveres — distribuir o sacramento, recolher ofertas de jejum, cuidar do templo/edifício e servir como mensageiro do bispo (ver D&C 20:57–59).",
      "Convidar e cuidar de todos, inclusive os menos ativos.",
      "Aconselhar-se com os consultores adultos e representar o quórum no comitê de jovens.",
      "Ajudar a designar os diáconos para distribuir o sacramento e recolher as ofertas de jejum.",
      "Zelar pela proteção dos rapazes com a norma dos dois adultos.",
    ],
    areas:[
      { t:"Presidir por revelação", i:[
        "Busque a orientação do Senhor sobre o quórum.",
        "Reúna a presidência e delegue com confiança.",
        "Deixe cada conselheiro liderar sua área.",
        "Ore por inspiração antes das decisões.",
      ]},
      { t:"Cuidar de cada diácono", i:[
        "Conheça os rapazes e alcance os que faltam.",
        "Incentive e ministre a cada um.",
        "Convide pessoalmente os que faltam.",
        "Interesse-se pela vida de cada rapaz.",
      ]},
      { t:"Dar o exemplo", i:[
        "Seja exemplo dos fiéis, apesar da pouca idade.",
        "Cumpra seus deveres com reverência.",
        "Distribua o sacramento com reverência.",
        "Seja pontual e digno de confiança.",
      ]},
      { t:"Usar o programa Crianças e Jovens", i:[
        "Ajude cada rapaz a definir metas.",
        "Planeje atividades que fortaleçam a fé e a amizade.",
        "Ajude cada rapaz a ter experiências espirituais.",
        "Comemore o progresso deles.",
      ]},
      { t:"Trabalhar com os consultores", i:[
        "Aceite orientação e aprenda a liderar.",
        "Prepare-se para avançar no sacerdócio.",
        "Ouça a orientação com humildade.",
        "Peça ajuda quando precisar.",
      ]},
    ],
    fecho:{ t:"Mesmo jovem, o presidente dos diáconos aprende que liderar é servir. Ao guiar seus amigos, todos se achegam mais a Cristo.", f:"Manual Geral, cap. 10" },
  }),

  full("Primeiro Conselheiro", {
    proposito:"Rapaz chamado para servir na presidência do quórum de diáconos, auxiliando o presidente e assumindo as designações que receber.",
    ref:"Manual Geral, 10.4",
    resp:[
      "Auxiliar o presidente e presidir na sua ausência.",
      "Assumir as áreas designadas.",
      "Ajudar a cuidar de cada diácono do quórum.",
      "Participar da presidência do quórum.",
      "Ajudar a organizar o serviço e a distribuição do sacramento.",
      "Dar o exemplo de dignidade e disposição.",
    ],
    areas:[
      { t:"Apoiar o presidente", i:[
        "Cumpra prontamente suas designações.",
        "Prepare-se para presidir quando necessário.",
        "Aja com iniciativa nas suas responsabilidades.",
        "Mantenha o presidente informado.",
      ]},
      { t:"Cuidar dos rapazes", i:[
        "Conheça os diáconos e alcance os que faltam.",
        "Incentive a amizade.",
        "Convide os menos ativos pessoalmente.",
        "Acolha os novos no quórum.",
      ]},
      { t:"Servir e ministrar", i:[
        "Ajude a organizar o serviço do quórum.",
        "Dê o exemplo de disposição.",
        "Ajude a organizar as designações do sacramento.",
        "Participe do serviço com alegria.",
      ]},
      { t:"Preparar-se", i:[
        "Aprenda a liderar servindo.",
        "Cumpra seus deveres com fidelidade.",
        "Estude as escrituras diariamente.",
        "Prepare-se para receber o ofício de mestre.",
      ]},
      { t:"Ser exemplo", i:[
        "Viva o evangelho com sinceridade.",
        "Convide os amigos a participarem.",
        "Guarde a dignidade pessoal.",
        "Ajude os amigos pelo seu exemplo.",
      ]},
    ],
    fecho:{ t:"O conselheiro fiel ajuda o presidente e fortalece o quórum. Servir agora prepara para servir sempre.", f:"Manual Geral, cap. 10" },
  }),

  full("Segundo Conselheiro", {
    proposito:"Rapaz chamado para servir na presidência do quórum de diáconos, auxiliando o presidente e o primeiro conselheiro nas designações que receber.",
    ref:"Manual Geral, 10.4",
    resp:[
      "Auxiliar a presidência conforme designado.",
      "Ajudar a cuidar de cada diácono do quórum.",
      "Apoiar as reuniões, atividades e o serviço.",
      "Substituir o primeiro conselheiro quando necessário.",
      "Ajudar a acolher e a integrar os novos diáconos.",
      "Apoiar a organização do sacramento e do serviço.",
    ],
    areas:[
      { t:"Apoiar a presidência", i:[
        "Cumpra bem as designações recebidas.",
        "Esteja pronto para servir.",
        "Assuma áreas específicas para ajudar.",
        "Comunique o andamento ao presidente.",
      ]},
      { t:"Cuidar dos rapazes", i:[
        "Ajude a alcançar os que faltam.",
        "Incentive a amizade no quórum.",
        "Conheça cada diácono pelo nome.",
        "Convide os que faltam.",
      ]},
      { t:"Servir", i:[
        "Participe do serviço e das atividades.",
        "Dê o exemplo de bom ânimo.",
        "Ajude nas designações do sacramento.",
        "Ofereça-se para ajudar sem ser pedido.",
      ]},
      { t:"Preparar-se", i:[
        "Aprenda a liderar observando e servindo.",
        "Cumpra seus deveres com reverência.",
        "Estude as escrituras.",
        "Busque dignidade pessoal.",
      ]},
      { t:"Ser exemplo", i:[
        "Viva com integridade.",
        "Convide amigos a se achegarem a Cristo.",
        "Guarde os mandamentos.",
        "Ajude os mais novos pelo seu exemplo.",
      ]},
    ],
    fecho:{ t:"Todo rapaz que serve fielmente cresce em fé. O Senhor honra os corações dispostos, mesmo os mais jovens.", f:"Manual Geral, cap. 10" },
  }),

  full("Secretário do Quórum de Diáconos", {
    proposito:"Rapaz chamado dentre os diáconos para ajudar a presidência: registra a frequência, ajuda a acompanhar as designações e apoia a organização das reuniões e atividades.",
    ref:"Manual Geral, 10.4",
    resp:[
      "Registrar a frequência do quórum.",
      "Anotar as designações e ajudar a acompanhá-las.",
      "Ajudar a identificar os rapazes que faltam.",
      "Apoiar a presidência nas reuniões e atividades.",
      "Ajudar a comunicar as atividades e reuniões aos rapazes.",
      "Apoiar o acompanhamento das metas do programa Crianças e Jovens.",
    ],
    areas:[
      { t:"Manter os registros", i:[
        "Anote presença e designações com cuidado.",
        "Mantenha tudo organizado.",
        "Registre também as ordenanças realizadas.",
        "Ajude a manter atualizada a lista do quórum.",
      ]},
      { t:"Acompanhar os ausentes", i:[
        "Ajude a notar quem faltou.",
        "Comunique a presidência.",
        "Ajude a organizar convites aos que faltam.",
        "Acompanhe se foram contatados.",
      ]},
      { t:"Ajudar nas reuniões", i:[
        "Prepare o que a presidência precisar.",
        "Ajude a manter o horário.",
        "Prepare os materiais necessários.",
        "Registre as designações feitas.",
      ]},
      { t:"Comunicar", i:[
        "Ajude a avisar sobre atividades.",
        "Colabore com os líderes.",
        "Confirme presença nas atividades.",
        "Avise sobre mudanças com antecedência.",
      ]},
      { t:"Servir com fidelidade", i:[
        "Seja pontual e confiável.",
        "Dê o exemplo de responsabilidade.",
        "Guarde com cuidado as informações.",
        "Cumpra suas tarefas sem precisar ser lembrado.",
      ]},
    ],
    fecho:{ t:"A fidelidade do secretário ajuda a presidência a cuidar de cada rapaz. Nenhum serviço é pequeno demais.", f:"Manual Geral, cap. 10" },
  }),

  full("Consultor do Quórum de Diáconos", {
    proposito:"Adulto chamado para apoiar e orientar os diáconos sob a direção do bispado. Ensina, ministra e caminha ao lado dos rapazes mais jovens do Sacerdócio Aarônico — sempre sob as normas de proteção de menores.",
    ref:"Manual Geral, 10.5",
    resp:[
      "Apoiar e orientar a presidência do quórum sem tomar o lugar dos rapazes.",
      "Ensinar as aulas do quórum quando designado, com o guia “Para a Força dos Jovens” (novo currículo dos jovens a partir de setembro de 2026).",
      "Participar das reuniões e atividades e ministrar aos rapazes.",
      "Cumprir a norma dos dois adultos responsáveis e as diretrizes de Proteção da Criança e do Jovem.",
      "Ajudar os rapazes a se prepararem para avançar no Sacerdócio Aarônico.",
      "Ministrar aos diáconos e apoiar suas famílias.",
    ],
    areas:[
      { t:"Deixar os rapazes liderarem", i:[
        "Oriente com paciência; não assuma a liderança.",
        "Ajude-os a preparar e conduzir as reuniões.",
        "Faça perguntas em vez de dar respostas prontas.",
        "Elogie e incentive suas iniciativas.",
      ]},
      { t:"Ensinar e testificar", i:[
        "Ministre aulas simples e centradas em Cristo.",
        "Seja um exemplo constante.",
        "Prepare aulas simples e envolventes.",
        "Convide o Espírito com sua atitude.",
      ]},
      { t:"Ministrar a cada rapaz", i:[
        "Conheça-os e interesse-se por sua vida.",
        "Alcance os menos ativos com amor.",
        "Vá a jogos, apresentações e marcos importantes.",
        "Esteja disponível para conversar.",
      ]},
      { t:"Proteger sempre", i:[
        "Nunca fique a sós com um menor — dois adultos.",
        "Faça o treinamento e siga as normas de proteção.",
        "Comunique imediatamente qualquer preocupação de segurança.",
        "Nunca transporte um menor sozinho.",
      ]},
      { t:"Ajudar a crescer", i:[
        "Apoie as metas do programa Crianças e Jovens.",
        "Ajude-os a firmar hábitos de fé.",
        "Incentive o estudo diário das escrituras.",
        "Ajude-os a criar hábitos de oração.",
      ]},
    ],
    fecho:{ t:"Os diáconos estão dando os primeiros passos no sacerdócio. O consultor que os ama e protege planta sementes de fé que durarão a vida toda.", f:"Manual Geral, cap. 10" },
  }),

  full("Especialista do Quórum de Diáconos", {
    proposito:"Chamado para ajudar em necessidades específicas do quórum de diáconos — atividades, projetos ou habilidades — sob a direção do bispado e dos consultores.",
    ref:"Manual Geral, 10.5",
    resp:[
      "Apoiar tarefas e atividades específicas conforme designado.",
      "Trabalhar com os consultores e a presidência do quórum.",
      "Observar as normas de proteção de menores.",
      "Ajudar a preparar atividades e acampamentos quando designado.",
      "Apoiar os consultores na segurança e na logística.",
      "Compartilhar habilidades que edifiquem os rapazes.",
    ],
    areas:[
      { t:"Servir conforme designado", i:[
        "Cumpra bem a tarefa que lhe foi confiada.",
        "Combine expectativas com os líderes.",
        "Alinhe expectativas com o bispado e os consultores.",
        "Cumpra sua parte com pontualidade.",
      ]},
      { t:"Usar seus talentos", i:[
        "Compartilhe habilidades que abençoem os rapazes.",
        "Ensine com paciência.",
        "Adapte o que ensina à idade dos rapazes.",
        "Incentive-os a desenvolver seus próprios dons.",
      ]},
      { t:"Trabalhar em equipe", i:[
        "Coordene com consultores e presidência.",
        "Comunique-se com clareza.",
        "Combine antecipadamente os detalhes.",
        "Apoie os líderes sem assumir o lugar deles.",
      ]},
      { t:"Proteger os rapazes", i:[
        "Mantenha a norma dos dois adultos.",
        "Siga as diretrizes de proteção de menores.",
        "Nunca fique a sós com um menor.",
        "Faça o treinamento de proteção de menores.",
      ]},
      { t:"Servir com dedicação", i:[
        "Seja pontual e confiável.",
        "Dê o exemplo de bom ânimo.",
        "Chegue preparado e no horário.",
        "Ajude com alegria, mesmo nas tarefas simples.",
      ]},
    ],
    fecho:{ t:"Cada talento a serviço dos rapazes edifica a próxima geração. Sua ajuda, mesmo pontual, deixa boas marcas.", f:"Manual Geral, cap. 10" },
  }),
];

const SA_GERAIS = [
  full("Especialista dos Rapazes — Esportes", {
    escritura:{ t:"Corramos, com paciência, a carreira que nos está proposta.", r:"Hebreus 12:1" },
    proposito:"Ajuda a organizar atividades esportivas saudáveis e seguras para os rapazes, promovendo boa esportividade, inclusão e amizade, sob a direção dos líderes e observando a proteção de menores.",
    ref:"Manual Geral, 10.5 (ver cap. 20)",
    resp:[
      "Planejar e conduzir atividades esportivas sob a direção dos líderes.",
      "Promover a boa esportividade e a segurança.",
      "Incluir todos os rapazes, independentemente da habilidade.",
      "Cumprir as normas de proteção de menores (dois adultos).",
      "Cuidar dos equipamentos e do espaço esportivo.",
      "Integrar o esporte ao propósito espiritual do quórum.",
    ],
    areas:[
      { t:"Planejar com segurança", i:[
        "Escolha atividades adequadas à idade e seguras.",
        "Verifique local, equipamentos e primeiros socorros.",
        "Tenha um plano para lesões e emergências.",
        "Adapte as regras para incluir todos.",
      ]},
      { t:"Ensinar esportividade", i:[
        "Valorize o esforço e o respeito acima da vitória.",
        "Seja exemplo de bom espírito esportivo.",
        "Corrija com bondade e incentive o respeito.",
        "Ensine a ganhar e a perder com dignidade.",
      ]},
      { t:"Incluir a todos", i:[
        "Convide também os menos ativos e os menos habilidosos.",
        "Forme equipes equilibradas e acolhedoras.",
        "Convide pessoalmente os que costumam faltar.",
        "Garanta que todos joguem, não só os melhores.",
      ]},
      { t:"Proteger os rapazes", i:[
        "Mantenha sempre dois adultos responsáveis.",
        "Siga as diretrizes de proteção de menores.",
        "Faça o treinamento de proteção de menores.",
        "Nunca deixe um rapaz sozinho com um adulto.",
      ]},
      { t:"Coordenar com os líderes", i:[
        "Alinhe as atividades com o quórum e o comitê de jovens.",
        "Ajude a integrar o esporte ao propósito espiritual.",
        "Combine datas e locais com antecedência.",
        "Comunique-se com os pais quando necessário.",
      ]},
    ],
    fecho:{ t:"Boas atividades esportivas constroem amizade, disciplina e caráter. Ao servir com cuidado, você ajuda cada rapaz a sentir-se incluído e valorizado.", f:"Manual Geral, cap. 10" },
  }),

  full("Especialista dos Rapazes — Assistente de Esportes", {
    proposito:"Apoia o especialista de esportes no planejamento e na condução das atividades esportivas dos rapazes, substituindo-o quando necessário e ajudando a garantir segurança e inclusão.",
    ref:"Manual Geral, 10.5",
    resp:[
      "Ajudar a planejar e conduzir as atividades esportivas.",
      "Apoiar a segurança e a boa esportividade.",
      "Ajudar a incluir todos os rapazes.",
      "Assegurar a presença de dois adultos responsáveis.",
      "Ajudar a cuidar dos equipamentos e do espaço.",
      "Acolher e incentivar os rapazes.",
    ],
    areas:[
      { t:"Apoiar o especialista", i:[
        "Combine a divisão das tarefas.",
        "Esteja pronto para assumir quando necessário.",
        "Alinhe as tarefas de cada atividade.",
        "Aja com iniciativa.",
      ]},
      { t:"Cuidar da segurança", i:[
        "Ajude a verificar local e equipamentos.",
        "Mantenha os primeiros socorros à mão.",
        "Confira o espaço antes de começar.",
        "Saiba quem chamar em uma emergência.",
      ]},
      { t:"Incluir a todos", i:[
        "Acolha os menos ativos e menos habilidosos.",
        "Incentive o respeito entre os rapazes.",
        "Garanta que todos participem.",
        "Convide os que costumam faltar.",
      ]},
      { t:"Proteger", i:[
        "Ajude a manter dois adultos presentes.",
        "Siga as normas de proteção de menores.",
        "Faça o treinamento de proteção de menores.",
        "Comunique qualquer preocupação de segurança.",
      ]},
      { t:"Ser exemplo", i:[
        "Demonstre bom espírito esportivo.",
        "Sirva com alegria.",
        "Trate cada rapaz com respeito.",
        "Dê o exemplo de disposição.",
      ]},
    ],
    fecho:{ t:"O apoio fiel de um assistente garante atividades seguras e alegres. Sua ajuda fortalece a amizade entre os rapazes.", f:"Manual Geral, cap. 10" },
  }),

  full("Especialista dos Quóruns do Sacerdócio Aarônico", {
    proposito:"Chamado para ajudar em necessidades gerais dos quóruns do Sacerdócio Aarônico — atividades, projetos, habilidades ou apoio a acampamentos — sob a direção do bispado.",
    ref:"Manual Geral, 10.5",
    resp:[
      "Apoiar atividades e projetos dos quóruns conforme designado.",
      "Trabalhar com os consultores e a liderança do Sacerdócio Aarônico.",
      "Observar as normas de proteção de menores.",
      "Ajudar a preparar atividades e acampamentos quando designado.",
      "Apoiar a segurança e a logística das atividades.",
      "Compartilhar habilidades que edifiquem os rapazes.",
    ],
    areas:[
      { t:"Servir conforme designado", i:[
        "Cumpra bem a necessidade específica que lhe for confiada.",
        "Combine expectativas com o bispado.",
        "Alinhe-se com os consultores sobre a tarefa.",
        "Cumpra sua parte com pontualidade.",
      ]},
      { t:"Usar seus talentos", i:[
        "Compartilhe habilidades úteis aos rapazes.",
        "Ensine com paciência.",
        "Adapte o que ensina à idade dos rapazes.",
        "Incentive-os a desenvolver seus próprios dons.",
      ]},
      { t:"Trabalhar com os líderes", i:[
        "Coordene com consultores e presidências.",
        "Comunique-se com clareza.",
        "Combine antecipadamente os detalhes.",
        "Apoie sem assumir o lugar dos líderes.",
      ]},
      { t:"Proteger os rapazes", i:[
        "Mantenha a norma dos dois adultos.",
        "Siga as diretrizes de proteção de menores.",
        "Nunca fique a sós com um menor.",
        "Faça o treinamento de proteção de menores.",
      ]},
      { t:"Servir com dedicação", i:[
        "Seja confiável e pontual.",
        "Dê o exemplo de disposição.",
        "Chegue preparado e no horário.",
        "Ajude com alegria, mesmo nas tarefas simples.",
      ]},
    ],
    fecho:{ t:"Talentos consagrados ao serviço dos rapazes abençoam toda a organização. Sua ajuda faz diferença real.", f:"Manual Geral, cap. 10" },
  }),

  full("Diretor de Acampamento dos Rapazes", {
    escritura:{ t:"Aprende em tua juventude a guardar os mandamentos de Deus.", r:"Alma 37:35" },
    proposito:"Planeja e realiza os acampamentos dos rapazes, criando experiências que fortaleçam a fé e a fraternidade, com total atenção à segurança e à proteção dos menores.",
    ref:"Manual Geral, 10.5 (ver cap. 20)",
    resp:[
      "Planejar o acampamento: local, logística, alimentação e programa espiritual.",
      "Garantir a segurança e obter as autorizações necessárias.",
      "Coordenar com o bispado, os líderes dos quóruns e os pais.",
      "Assegurar a norma dos dois adultos responsáveis em todo o acampamento.",
      "Envolver os rapazes e suas presidências no planejamento.",
      "Preparar um programa espiritual com devocionais e testemunhos.",
    ],
    areas:[
      { t:"Planejar com propósito espiritual", i:[
        "Inclua momentos de devoção, oração e testemunho.",
        "Ligue as atividades ao programa Crianças e Jovens.",
        "Reserve tempo para reflexão e testemunho.",
        "Equilibre atividade física e experiências espirituais.",
      ]},
      { t:"Segurança em primeiro lugar", i:[
        "Providencie primeiros socorros e plano de emergência.",
        "Obtenha autorizações dos pais e verifique riscos do local.",
        "Tenha contatos de emergência e um plano claro.",
        "Verifique clima, água e condições do local.",
      ]},
      { t:"Cuidar da logística", i:[
        "Organize transporte, alimentação e equipamentos.",
        "Distribua responsabilidades com antecedência.",
        "Prepare uma lista de materiais e mantimentos.",
        "Confirme transporte e autorizações com antecedência.",
      ]},
      { t:"Envolver os rapazes na liderança", i:[
        "Deixe as presidências dos quóruns ajudarem a planejar.",
        "Dê oportunidades de servir e liderar.",
        "Peça-lhes que conduzam partes do acampamento.",
        "Reconheça e agradeça seu serviço.",
      ]},
      { t:"Proteger sempre", i:[
        "Mantenha dois adultos responsáveis em todas as situações.",
        "Siga rigorosamente as diretrizes de proteção de menores.",
        "Faça o treinamento de proteção de menores.",
        "Organize os alojamentos conforme as diretrizes.",
      ]},
    ],
    fecho:{ t:"Um bom acampamento pode marcar a vida de um rapaz para sempre. Ao unir fé, natureza e segurança, você cria memórias que fortalecem o testemunho.", f:"Manual Geral, cap. 10" },
  }),

  full("Diretor Assistente de Acampamento dos Rapazes", {
    proposito:"Apoia o diretor de acampamento no planejamento e na realização dos acampamentos dos rapazes, substituindo-o quando necessário e ajudando a garantir segurança e propósito espiritual.",
    ref:"Manual Geral, 10.5",
    resp:[
      "Ajudar a planejar e a conduzir o acampamento.",
      "Apoiar a segurança e a logística.",
      "Ajudar a coordenar com líderes e pais.",
      "Assegurar a presença de dois adultos responsáveis.",
      "Ajudar a preparar o programa espiritual do acampamento.",
      "Mobilizar e acolher os participantes.",
    ],
    areas:[
      { t:"Apoiar o diretor", i:[
        "Combine a divisão das tarefas.",
        "Esteja pronto para assumir quando necessário.",
        "Alinhe as tarefas de cada etapa.",
        "Aja com iniciativa.",
      ]},
      { t:"Cuidar da segurança", i:[
        "Ajude com primeiros socorros e plano de emergência.",
        "Verifique autorizações e riscos.",
        "Confira os riscos do local antes de começar.",
        "Saiba os contatos de emergência.",
      ]},
      { t:"Ajudar na logística", i:[
        "Apoie transporte, alimentação e equipamentos.",
        "Confirme os detalhes com antecedência.",
        "Prepare listas de materiais.",
        "Acompanhe a montagem e a desmontagem.",
      ]},
      { t:"Fortalecer o espiritual", i:[
        "Ajude a preparar devocionais e testemunhos.",
        "Incentive a reverência nos momentos espirituais.",
        "Ajude a conduzir os devocionais.",
        "Incentive a oração pessoal e em grupo.",
      ]},
      { t:"Proteger sempre", i:[
        "Ajude a manter dois adultos em todas as situações.",
        "Siga as diretrizes de proteção de menores.",
        "Faça o treinamento de proteção de menores.",
        "Ajude a organizar os alojamentos conforme as normas.",
      ]},
    ],
    fecho:{ t:"O apoio fiel de um assistente torna o acampamento seguro e inspirador. Sua dedicação abençoa cada rapaz presente.", f:"Manual Geral, cap. 10" },
  }),
];

/* ---- CONTEÚDO COMPLETO: MOÇAS (jovens de 12 a 18) ----------------------
   Estrutura por faixa etária (jun/2026): Edificadoras da Fé (12–13),
   Mensageiras da Esperança (14–15), Guardiãs da Luz (16+).
   Norma dos dois adultos responsáveis em toda interação com as jovens. ------ */
