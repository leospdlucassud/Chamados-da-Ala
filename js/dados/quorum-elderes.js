"use strict";

const QUORUM_ELDERES = [
  full("Presidente do Quórum de Élderes", {
    escritura:{ t:"Socorre os fracos, levanta as mãos que pendem e fortalece os joelhos enfraquecidos.", r:"Doutrina e Convênios 81:5" },
    proposito:"O presidente do quórum de élderes recebe as chaves do sacerdócio para presidir o quórum. Sob a direção do bispo e em conjunto com a presidência da Sociedade de Socorro, lidera o trabalho de salvação e exaltação na ala, cuidando de cada irmão e de sua família.",
    ref:"Manual Geral, 8.3.3",
    resp:[
      "Presidir o quórum de élderes e servir como membro do conselho da ala (8.3.3).",
      "Liderar as quatro áreas do trabalho de salvação e exaltação: viver o evangelho, cuidar dos necessitados, convidar todos a receber o evangelho e unir as famílias pelo templo e história da família (8.2).",
      "Supervisionar a obra de ministração; realizar entrevistas de ministração ao menos trimestralmente (8.3.3.2).",
      "Reunir-se com a presidência da Sociedade de Socorro pelo menos trimestralmente para coordenar o cuidado das famílias (8.3.3.2).",
      "Reunir-se anualmente com cada membro do quórum; zelar pelos irmãos jovens adultos e recém-conversos.",
      "Supervisionar, com o secretário, os registros, relatórios e finanças do quórum.",
      "Recomendar ao bispo os novos líderes e professores do quórum e apoiá-los.",
      "Ajudar os irmãos a se prepararem para o templo e para servir missão.",
    ],
    areas:[
      { t:"Liderar por meio de conselhos", i:[
        "Reúna a presidência com regularidade e delegue as quatro áreas da obra.",
        "Busque revelação em conjunto, ouvindo cada conselheiro.",
        "Concentre as reuniões nas pessoas, não apenas nas tarefas.",
        "Escolha poucas prioridades por vez e leve-as adiante.",
      ]},
      { t:"Fortalecer a ministração", i:[
        "Designe as duplas com oração e inspiração, conforme as necessidades.",
        "Realize as entrevistas de ministração ao menos a cada trimestre.",
        "Aja prontamente sobre as necessidades relatadas.",
        "Ajude cada companheiro a conhecer bem as famílias designadas.",
      ]},
      { t:"Cuidar de cada irmão", i:[
        "Reúna-se pessoalmente com cada membro do quórum ao menos uma vez ao ano.",
        "Conheça os menos ativos e os recém-chegados pelo nome.",
        "Ministre você mesmo, dando o exemplo ao quórum.",
        "Alcance com amor os que há tempos não comparecem.",
      ]},
      { t:"Coordenar com a Sociedade de Socorro", i:[
        "Planeje junto com a presidência da SS o cuidado das famílias.",
        "Reúna-se com ela ao menos trimestralmente.",
        "Evite duplicar esforços; unam-se em torno das mesmas necessidades.",
        "Compartilhem informações com discrição e respeito.",
      ]},
      { t:"Edificar no domingo", i:[
        "Assegure aulas centradas em Jesus Cristo, apoiando o professor.",
        "Equilibre a instrução do evangelho e os assuntos do quórum.",
        "Incentive a fraternidade e a participação de todos.",
        "Use parte da reunião para tratar da obra e das necessidades do quórum.",
      ]},
    ],
    fecho:{ t:"Como presidente, você pastoreia irmãos que, unidos, fortalecem lares e toda a ala. Ao ministrar como o Salvador, ergue os que pendem e conduz o quórum à unidade.", f:"Manual Geral, cap. 8" },
  }),

  full("Primeiro Conselheiro no Quórum de Élderes", {
    proposito:"Serve sob a direção do presidente do quórum, ajudando-o a liderar o quórum e assumindo as áreas do trabalho de salvação e exaltação que lhe forem designadas — frequentemente a obra missionária ou o trabalho de templo e história da família.",
    ref:"Manual Geral, 8.3.3.1",
    resp:[
      "Auxiliar o presidente e representá-lo quando designado.",
      "Supervisionar as áreas atribuídas (p.ex. obra missionária ou templo e história da família).",
      "Participar da presidência do quórum e das reuniões de conselho conforme designado.",
      "Ajudar a coordenar a obra de ministração.",
      "Coordenar a área designada com os líderes e recursos da ala.",
      "Ministrar aos irmãos e ajudar a cuidar das famílias.",
    ],
    areas:[
      { t:"Apoiar o presidente", i:[
        "Conheça as prioridades do quórum e ajude a aliviar a carga do presidente.",
        "Prepare-se para presidir quando ele estiver ausente.",
        "Comunique-lhe o andamento da sua área com regularidade.",
        "Aja com iniciativa nas suas responsabilidades.",
      ]},
      { t:"Liderar a área designada", i:[
        "Se lidera a obra missionária, trabalhe com os missionários e o líder da missão da ala.",
        "Se lidera o templo e a história da família, incentive os irmãos a levarem nomes ao templo.",
        "Envolva os irmãos do quórum na obra da sua área.",
        "Defina metas simples e acompanhe os resultados.",
      ]},
      { t:"Ministrar", i:[
        "Cumpra com diligência suas próprias designações ministeriais.",
        "Conheça os irmãos e suas famílias.",
        "Alcance com amor os irmãos menos ativos.",
        "Leve à presidência as necessidades que perceber.",
      ]},
      { t:"Preparar-se", i:[
        "Estude o capítulo 8 do Manual Geral e a área que supervisiona.",
        "Aproveite os treinamentos oferecidos.",
        "Busque inspiração para orientar os irmãos.",
        "Compartilhe boas práticas com a presidência.",
      ]},
      { t:"Guardar a unidade da presidência", i:[
        "Apoie plenamente as decisões tomadas em conselho.",
        "Guarde com fidelidade as informações confidenciais.",
        "Fale a uma só voz com o presidente e o outro conselheiro.",
        "Sustente as decisões, mesmo as que não propôs.",
      ]},
    ],
    fecho:{ t:"O conselheiro fiel multiplica o alcance do quórum. Ao assumir sua área com dedicação, torna-se um sustentáculo no cuidado dos irmãos.", f:"Manual Geral, cap. 8" },
  }),

  full("Segundo Conselheiro no Quórum de Élderes", {
    proposito:"Serve sob a direção do presidente do quórum, ajudando-o a liderar o quórum e assumindo as áreas designadas — frequentemente o cuidado dos necessitados, o bem-estar e a autossuficiência.",
    ref:"Manual Geral, 8.3.3.1",
    resp:[
      "Auxiliar o presidente e representá-lo quando designado.",
      "Supervisionar as áreas atribuídas (p.ex. bem-estar, autossuficiência e cuidado dos necessitados).",
      "Participar da presidência do quórum e das reuniões de conselho conforme designado.",
      "Ajudar a coordenar a obra de ministração.",
      "Coordenar a área designada com os líderes e recursos da ala.",
      "Ministrar aos irmãos e ajudar a cuidar das famílias necessitadas.",
    ],
    areas:[
      { t:"Apoiar o presidente", i:[
        "Assuma prontamente as designações, aliviando a carga do presidente.",
        "Mantenha-o informado sobre a área que supervisiona.",
        "Comunique-lhe o andamento do seu trabalho com regularidade.",
        "Esteja pronto para servir sempre que for necessário.",
      ]},
      { t:"Cuidar dos necessitados", i:[
        "Trabalhe com a Sociedade de Socorro e o bispado no cuidado das famílias.",
        "Promova a autossuficiência antes da assistência.",
        "Ajude a envolver o quórum no serviço às famílias.",
        "Zele pela dignidade de quem recebe ajuda.",
      ]},
      { t:"Coordenar o serviço", i:[
        "Apoie o coordenador de serviço nos projetos do quórum.",
        "Ajude a identificar necessidades reais na ala e na comunidade.",
        "Ajude a planejar projetos que unam o quórum.",
        "Reconheça e agradeça quem serve.",
      ]},
      { t:"Preparar-se", i:[
        "Estude os princípios de bem-estar e autossuficiência do Manual Geral.",
        "Participe dos treinamentos de liderança.",
        "Busque inspiração para orientar os irmãos.",
        "Conheça os cursos de autossuficiência disponíveis.",
      ]},
      { t:"Guardar a unidade da presidência", i:[
        "Sustente as decisões do presidente e da presidência.",
        "Mantenha a confidencialidade em todos os assuntos.",
        "Fale a uma só voz com o presidente e o outro conselheiro.",
        "Cultive a harmonia e a confiança no conselho.",
      ]},
    ],
    fecho:{ t:"Ao cuidar dos que passam por dificuldades, o segundo conselheiro ajuda o quórum a viver o segundo grande mandamento: amar o próximo como a si mesmo.", f:"Manual Geral, cap. 8" },
  }),

  full("Secretário do Quórum de Élderes", {
    escritura:{ t:"Que tudo seja feito com decência e ordem.", r:"1 Coríntios 14:40" },
    proposito:"Ajuda a presidência do quórum a manter a ordem no trabalho: prepara pautas, registra as designações, agenda as entrevistas de ministração e cuida dos relatórios e das finanças do quórum.",
    ref:"Manual Geral, 8.3.4",
    resp:[
      "Preparar as pautas e fazer as anotações das reuniões da presidência.",
      "Agendar as entrevistas de ministração.",
      "Preparar os relatórios trimestrais de ministração e de frequência.",
      "Manter os registros de designações e das despesas do quórum.",
      "Ajudar a acompanhar chamados, desobrigações e ordenanças do quórum.",
      "Treinar e apoiar o assistente secretário.",
    ],
    areas:[
      { t:"Organizar as reuniões", i:[
        "Prepare a pauta com antecedência e registre as designações feitas.",
        "Dê seguimento às atribuições antes da reunião seguinte.",
        "Ajude a começar e a terminar as reuniões no horário.",
        "Distribua as decisões aos responsáveis.",
      ]},
      { t:"Agendar a ministração", i:[
        "Organize o calendário das entrevistas trimestrais.",
        "Lembre a presidência e os companheiros das datas.",
        "Anote o que for relatado nas entrevistas.",
        "Atualize as duplas conforme a presidência decidir.",
      ]},
      { t:"Cuidar dos relatórios", i:[
        "Reúna os dados de ministração e frequência.",
        "Envie os relatórios com exatidão e no prazo.",
        "Mantenha um calendário dos relatórios exigidos.",
        "Ajude a presidência a entender os indicadores.",
      ]},
      { t:"Registrar e prestar contas", i:[
        "Controle as despesas aprovadas pela presidência.",
        "Mantenha listas de membros atualizadas.",
        "Organize os comprovantes de despesa.",
        "Confira os dados antes de enviá-los.",
      ]},
      { t:"Servir com discrição", i:[
        "Guarde sigilo sobre os assuntos das reuniões.",
        "Ajude a treinar o assistente secretário.",
        "Trate cada informação com respeito.",
        "Seja pontual e confiável.",
      ]},
    ],
    fecho:{ t:"A fidelidade nos detalhes libera a presidência para ministrar. O bom secretário é uma bênção silenciosa para todo o quórum.", f:"Manual Geral, cap. 8" },
  }),

  full("Assistente Secretário do Quórum de Élderes", {
    proposito:"Apoia o secretário do quórum de élderes nas pautas, nos registros, no agendamento das entrevistas de ministração e nos relatórios, substituindo-o quando necessário.",
    ref:"Manual Geral, 8.3.4",
    resp:[
      "Ajudar a preparar pautas e a registrar as reuniões.",
      "Auxiliar no agendamento das entrevistas de ministração.",
      "Ajudar a reunir dados para os relatórios.",
      "Assumir as funções do secretário em sua ausência.",
      "Ajudar a manter as listas e designações atualizadas.",
      "Manter-se pronto para assumir plenamente quando necessário.",
    ],
    areas:[
      { t:"Dar apoio constante", i:[
        "Combine com o secretário a divisão das tarefas.",
        "Esteja pronto para assumir quando necessário.",
        "Alinhe-se com ele sobre as prioridades.",
        "Mantenha-se a par das reuniões e designações em andamento.",
      ]},
      { t:"Cuidar dos registros", i:[
        "Ajude a manter as designações e listas atualizadas.",
        "Confira os dados antes de enviá-los.",
        "Organize os documentos com clareza.",
        "Corrija as inconsistências que encontrar.",
      ]},
      { t:"Apoiar a ministração", i:[
        "Ajude a agendar e a lembrar as entrevistas trimestrais.",
        "Reúna informações para a presidência.",
        "Ajude a atualizar as duplas de ministração.",
        "Anote as necessidades relatadas.",
      ]},
      { t:"Aprender o chamado", i:[
        "Estude a seção 8.3.4 do Manual Geral.",
        "Aprenda os procedimentos com o secretário.",
        "Observe como ele conduz o trabalho.",
        "Prepare-se para servir com autonomia.",
      ]},
      { t:"Guardar confidências", i:[
        "Trate com sigilo tudo o que ouvir nas reuniões.",
        "Seja fiel e pontual em cada tarefa.",
        "Nunca comente fora do quórum o que ouvir.",
        "Cultive a confiança da presidência.",
      ]},
    ],
    fecho:{ t:"Um bom assistente garante que o trabalho nunca pare. Sua prontidão sustenta a ordem do quórum.", f:"Manual Geral, cap. 8" },
  }),

  full("Professor do Quórum de Élderes", {
    escritura:{ t:"Ensinai-vos uns aos outros palavras de sabedoria… buscai aprendizado, sim, pelo estudo e também pela fé.", r:"Doutrina e Convênios 88:118" },
    proposito:"Ensina nas reuniões dominicais do quórum — que, a partir de setembro de 2026, passam a ocorrer todos os domingos, em 25 minutos —, conforme a necessidade determinada pelo bispo e pela presidência, ajudando os irmãos a aprenderem e a viverem o evangelho de Jesus Cristo.",
    ref:"Manual Geral, 8.3.5 (ver cap. 17)",
    resp:[
      "Preparar e ministrar as aulas a partir dos materiais aprovados (mensagens da conferência geral e recursos indicados).",
      "Ensinar por meio do Espírito, convidando à participação e à conversão.",
      "Coordenar com a presidência os tópicos e o calendário de ensino.",
      "Conhecer os irmãos da classe e atender às suas necessidades.",
      "Incentivar o estudo do evangelho no lar, junto com “Vem, e Segue-Me”.",
      "Ajudar a criar um ambiente de reverência e participação.",
    ],
    areas:[
      { t:"Preparar-se espiritualmente", i:[
        "Ore e estude o tema com antecedência, buscando o Espírito.",
        "Pondere as necessidades dos irmãos ao preparar a aula.",
        "Estude com antecedência, não em cima da hora.",
        "Peça ao Senhor que o ajude a alcançar cada irmão.",
      ]},
      { t:"Ensinar por meio do Espírito", i:[
        "Concentre cada aula em Jesus Cristo e Seu evangelho.",
        "Testifique com sinceridade e convide à ação.",
        "Compartilhe seu testemunho com naturalidade.",
        "Siga as impressões do Espírito, mesmo fugindo do plano.",
      ]},
      { t:"Envolver os irmãos", i:[
        "Faça boas perguntas e ouça com atenção.",
        "Incentive a participação respeitosa de todos.",
        "Crie um ambiente seguro para compartilhar.",
        "Valorize cada contribuição.",
      ]},
      { t:"Usar os materiais aprovados", i:[
        "Baseie-se nas mensagens dos profetas e nos recursos indicados.",
        "Evite fontes especulativas ou não oficiais.",
        "Ligue a aula ao estudo feito em casa.",
        "Concentre-se nas escrituras e nas palavras dos profetas.",
      ]},
      { t:"Conectar o evangelho à vida", i:[
        "Ajude os irmãos a aplicarem os princípios no dia a dia.",
        "Incentive-os a guardar e a lembrar seus convênios.",
        "Proponha uma aplicação concreta para a semana.",
        "Retome na aula seguinte o que foi aplicado.",
      ]},
    ],
    fecho:{ t:"Ensinar o evangelho é obra sagrada. Ao ensinar pelo Espírito, você ajuda cada irmão a achegar-se mais a Cristo.", f:"Manual Geral, cap. 8 e 17" },
  }),

  full("Secretário de Ministração do Quórum de Élderes", {
    proposito:"Ajuda a presidência do quórum a coordenar a obra de ministração: mantém atualizadas as designações de companheirismo, organiza as entrevistas de ministração e reúne as informações sobre necessidades para que a presidência possa agir.",
    ref:"Manual Geral, 8.3.3.2 e 8.3.4",
    resp:[
      "Manter atualizadas as duplas e as famílias designadas à ministração.",
      "Ajudar a agendar e a registrar as entrevistas trimestrais.",
      "Reunir informações sobre necessidades e levá-las à presidência.",
      "Coordenar com a Sociedade de Socorro os registros de ministração.",
      "Ajudar a preparar os relatórios de ministração para a presidência.",
      "Manter a confidencialidade das informações das famílias.",
    ],
    areas:[
      { t:"Manter as designações em dia", i:[
        "Atualize as duplas e as famílias designadas conforme as decisões da presidência.",
        "Registre as mudanças prontamente.",
        "Confira periodicamente se cada família tem ministros.",
        "Comunique à presidência os ajustes necessários.",
      ]},
      { t:"Organizar as entrevistas", i:[
        "Agende as entrevistas trimestrais e lembre os companheiros.",
        "Anote o que for relatado para acompanhamento.",
        "Prepare a lista de famílias antes de cada entrevista.",
        "Ajude a dar seguimento às ações combinadas.",
      ]},
      { t:"Levar necessidades à presidência", i:[
        "Comunique com prontidão os casos que exigem ação.",
        "Ajude a presidência a priorizar o cuidado.",
        "Registre as necessidades com clareza e discrição.",
        "Acompanhe se as ações foram cumpridas.",
      ]},
      { t:"Coordenar com a Sociedade de Socorro", i:[
        "Alinhe os registros para evitar sobreposição.",
        "Compartilhe apenas o necessário, com discrição.",
        "Reúnam-se para alinhar o cuidado das famílias.",
        "Evitem duplicar visitas e esforços.",
      ]},
      { t:"Guardar confidencialidade", i:[
        "Trate as informações das famílias com respeito e sigilo.",
        "Restrinja o acesso a quem tem responsabilidade.",
        "Proteja os registros de acesso indevido.",
        "Fale das necessidades só com quem precisa saber.",
      ]},
    ],
    fecho:{ t:"A ministração é o coração do quórum. Ao mantê-la organizada, você ajuda a garantir que nenhum irmão ou família fique sem cuidado.", f:"Manual Geral, cap. 8" },
  }),

  full("Coordenador de Atividades do Quórum de Élderes", {
    proposito:"Ajuda a presidência a planejar e realizar as atividades do quórum que fortalecem a fraternidade e apoiam o trabalho de salvação e exaltação.",
    ref:"Manual Geral, 8.3.5",
    resp:[
      "Planejar as atividades sob a direção da presidência.",
      "Coordenar o comitê de atividades e os assistentes.",
      "Cuidar de locais, recursos, orçamento aprovado e segurança.",
      "Envolver os irmãos no planejamento e na realização.",
      "Comunicar as atividades com antecedência ao quórum.",
      "Avaliar cada atividade e ajustar as próximas.",
    ],
    areas:[
      { t:"Planejar com propósito", i:[
        "Escolha atividades que unam os irmãos e apoiem a obra.",
        "Planeje com antecedência e em harmonia com o calendário da ala.",
        "Defina um objetivo claro para cada atividade.",
        "Equilibre convívio, serviço e aprendizado.",
      ]},
      { t:"Trabalhar com o comitê", i:[
        "Delegue tarefas aos membros do comitê e aos assistentes.",
        "Reúna-se para preparar cada atividade.",
        "Distribua as responsabilidades com clareza.",
        "Reconheça e agradeça o trabalho de cada um.",
      ]},
      { t:"Incluir a todos", i:[
        "Lembre-se dos menos ativos, recém-chegados e jovens adultos.",
        "Crie um ambiente acolhedor para todos.",
        "Convide pessoalmente os que costumam faltar.",
        "Pense em quem tem necessidades especiais.",
      ]},
      { t:"Cuidar da logística e segurança", i:[
        "Providencie local, recursos e orçamento aprovado.",
        "Observe as diretrizes de segurança da Igreja.",
        "Confirme local, transporte e recursos com antecedência.",
        "Tenha um plano simples para imprevistos.",
      ]},
      { t:"Avaliar e melhorar", i:[
        "Peça sugestões após cada atividade.",
        "Ajuste o planejamento das próximas.",
        "Registre o que deu certo para repetir.",
        "Ouça o que os irmãos gostaram e o que faltou.",
      ]},
    ],
    fecho:{ t:"Boas atividades constroem amizade e fé. Ao reunir os irmãos com propósito, você fortalece os laços que sustentam o quórum.", f:"Manual Geral, cap. 8" },
  }),

  full("Coordenador Assistente de Atividades do Quórum de Élderes", {
    proposito:"Apoia o coordenador de atividades no planejamento e na realização das atividades do quórum, substituindo-o quando necessário.",
    ref:"Manual Geral, 8.3.5",
    resp:[
      "Ajudar a planejar e a executar as atividades.",
      "Coordenar tarefas com o comitê de atividades.",
      "Assumir as funções do coordenador em sua ausência.",
      "Ajudar a cuidar da logística e da segurança.",
      "Comunicar-se com o comitê e os participantes.",
      "Reconhecer e agradecer quem ajuda a realizar as atividades.",
    ],
    areas:[
      { t:"Apoiar o coordenador", i:[
        "Combine a divisão das tarefas do planejamento.",
        "Esteja pronto para liderar quando necessário.",
        "Alinhe as prioridades de cada atividade.",
        "Aja com iniciativa nos detalhes.",
      ]},
      { t:"Executar com excelência", i:[
        "Cuide dos detalhes práticos de cada atividade.",
        "Confirme recursos e local com antecedência.",
        "Prepare os materiais antes do início.",
        "Acompanhe a montagem e a arrumação.",
      ]},
      { t:"Trabalhar em equipe", i:[
        "Colabore com o comitê e os assistentes.",
        "Comunique-se com clareza.",
        "Reconheça o esforço dos demais.",
        "Resolva os imprevistos com calma.",
      ]},
      { t:"Incluir a todos", i:[
        "Ajude a alcançar os menos ativos e novos membros.",
        "Zele por um ambiente acolhedor.",
        "Fique atento a quem está sozinho.",
        "Acolha os visitantes com amizade.",
      ]},
      { t:"Cuidar da segurança", i:[
        "Siga as diretrizes de segurança da Igreja.",
        "Ajude a prevenir riscos nas atividades.",
        "Confira os espaços antes de começar.",
        "Saiba quem chamar em uma emergência.",
      ]},
    ],
    fecho:{ t:"O apoio fiel de um assistente garante que nada falte. Sua colaboração torna cada atividade um sucesso.", f:"Manual Geral, cap. 8" },
  }),

  full("Membro do Comitê de Atividades do Quórum de Élderes", {
    proposito:"Ajuda o coordenador de atividades a planejar e a realizar as atividades do quórum, assumindo tarefas específicas em equipe.",
    ref:"Manual Geral, 8.3.5",
    resp:[
      "Colaborar no planejamento das atividades.",
      "Assumir tarefas designadas pelo coordenador.",
      "Ajudar na preparação, execução e organização.",
      "Ajudar a preparar e a organizar os espaços e materiais.",
      "Acolher os participantes com amizade.",
      "Zelar pela segurança durante as atividades.",
    ],
    areas:[
      { t:"Colaborar no planejamento", i:[
        "Traga ideias que unam os irmãos.",
        "Participe das reuniões de preparação.",
        "Ofereça-se para tarefas concretas.",
        "Ajude a pensar em atividades acessíveis a todos.",
      ]},
      { t:"Assumir tarefas", i:[
        "Cumpra com diligência o que lhe for designado.",
        "Seja pontual e confiável.",
        "Confirme o que precisa ser feito e até quando.",
        "Peça ajuda cedo se precisar.",
      ]},
      { t:"Trabalhar em equipe", i:[
        "Coopere com o comitê e os coordenadores.",
        "Comunique dificuldades cedo.",
        "Apoie os colegas do comitê.",
        "Faça sua parte com alegria.",
      ]},
      { t:"Incluir a todos", i:[
        "Ajude a acolher cada irmão nas atividades.",
        "Lembre-se dos que costumam ficar de fora.",
        "Aproxime-se de quem está sozinho.",
        "Convide pessoalmente os que faltam.",
      ]},
      { t:"Zelar pela segurança", i:[
        "Ajude a manter um ambiente seguro.",
        "Siga as orientações do coordenador.",
        "Ajude a organizar os espaços com segurança.",
        "Comunique qualquer risco que perceber.",
      ]},
    ],
    fecho:{ t:"Muitas mãos tornam leve o trabalho. Sua ajuda no comitê fortalece a fraternidade do quórum.", f:"Manual Geral, cap. 8" },
  }),

  full("Coordenador de Serviço do Quórum de Élderes", {
    escritura:{ t:"Quando estais a serviço de vosso próximo, estais somente a serviço de vosso Deus.", r:"Mosias 2:17" },
    proposito:"Ajuda a presidência a planejar e realizar projetos de serviço para pessoas necessitadas, dentro e fora da Igreja, promovendo o amor cristão em ação.",
    ref:"Manual Geral, 8.2.2 e 8.3.5",
    resp:[
      "Planejar projetos de serviço sob a direção da presidência.",
      "Coordenar o comitê de serviço e os assistentes.",
      "Identificar necessidades junto ao conselho da ala e à Sociedade de Socorro.",
      "Envolver os irmãos e mobilizá-los para servir.",
      "Zelar pela segurança e pela norma dos dois adultos com menores.",
      "Reconhecer e agradecer quem participa.",
    ],
    areas:[
      { t:"Identificar necessidades reais", i:[
        "Ouça a presidência, a Sociedade de Socorro e o bispado.",
        "Considere membros e vizinhos que precisam de ajuda.",
        "Pergunte diretamente onde a ajuda é mais urgente.",
        "Fique atento a necessidades na vizinhança.",
      ]},
      { t:"Organizar o serviço", i:[
        "Mobilize o quórum e defina tarefas claras.",
        "Planeje com antecedência e com objetivos definidos.",
        "Defina data, responsáveis e materiais.",
        "Prepare as ferramentas e o transporte.",
      ]},
      { t:"Servir dentro e fora da Igreja", i:[
        "Inclua projetos na comunidade, como pelo JustServe.",
        "Promova o serviço contínuo, não apenas eventual.",
        "Envolva as famílias no serviço.",
        "Busque projetos que abençoem a comunidade.",
      ]},
      { t:"Cuidar da logística e segurança", i:[
        "Providencie ferramentas, transporte e recursos.",
        "Mantenha dois adultos responsáveis quando houver menores.",
        "Verifique os riscos antes de começar.",
        "Tenha um plano para imprevistos.",
      ]},
      { t:"Ensinar pelo exemplo", i:[
        "Ajude os irmãos a amarem o serviço ao próximo.",
        "Reconheça e agradeça quem serve.",
        "Sirva ao lado dos irmãos.",
        "Ajude cada um a sentir a alegria de servir.",
      ]},
    ],
    fecho:{ t:"“Quando estais a serviço de vosso próximo, estais somente a serviço de vosso Deus.” Ao liderar o serviço, você ajuda o quórum a amar como o Salvador amou.", f:"Manual Geral, cap. 8" },
  }),

  full("Coordenador Assistente de Serviço do Quórum de Élderes", {
    proposito:"Apoia o coordenador de serviço no planejamento e na realização dos projetos de serviço do quórum, substituindo-o quando necessário.",
    ref:"Manual Geral, 8.3.5",
    resp:[
      "Ajudar a planejar e a executar os projetos de serviço.",
      "Coordenar tarefas com o comitê de serviço.",
      "Assumir as funções do coordenador em sua ausência.",
      "Ajudar a cuidar da logística e da segurança.",
      "Mobilizar e acolher os participantes.",
      "Reconhecer e agradecer quem participa do serviço.",
    ],
    areas:[
      { t:"Apoiar o coordenador", i:[
        "Combine a divisão das tarefas de organização.",
        "Esteja pronto para liderar quando necessário.",
        "Alinhe as tarefas de cada projeto.",
        "Aja com iniciativa.",
      ]},
      { t:"Executar com cuidado", i:[
        "Cuide dos detalhes práticos de cada projeto.",
        "Confirme recursos e transporte com antecedência.",
        "Prepare ferramentas e materiais.",
        "Acompanhe do início ao fim.",
      ]},
      { t:"Identificar necessidades", i:[
        "Ajude a mapear quem precisa de ajuda.",
        "Leve as informações ao coordenador.",
        "Ouça a presidência e a Sociedade de Socorro.",
        "Fique atento à comunidade.",
      ]},
      { t:"Zelar pela segurança", i:[
        "Observe as diretrizes de segurança da Igreja.",
        "Mantenha a norma dos dois adultos com menores.",
        "Verifique os riscos do local.",
        "Saiba quem chamar em uma emergência.",
      ]},
      { t:"Servir com alegria", i:[
        "Dê o exemplo de disposição para servir.",
        "Incentive os irmãos a participarem.",
        "Agradeça quem participa.",
        "Sirva com bom ânimo, mesmo nas tarefas simples.",
      ]},
    ],
    fecho:{ t:"O serviço fiel nos bastidores torna possível abençoar muitos. Sua dedicação amplia o alcance do quórum.", f:"Manual Geral, cap. 8" },
  }),

  full("Membro do Comitê de Serviço do Quórum de Élderes", {
    proposito:"Ajuda o coordenador de serviço a planejar e a realizar os projetos de serviço do quórum, assumindo tarefas específicas em equipe.",
    ref:"Manual Geral, 8.3.5",
    resp:[
      "Colaborar no planejamento dos projetos de serviço.",
      "Assumir tarefas designadas pelo coordenador.",
      "Ajudar na preparação e na execução do serviço.",
      "Ajudar a preparar ferramentas, materiais e transporte.",
      "Acolher e incentivar os participantes.",
      "Zelar pela segurança durante os projetos.",
    ],
    areas:[
      { t:"Colaborar no planejamento", i:[
        "Traga ideias de serviço úteis e viáveis.",
        "Participe das reuniões de preparação.",
        "Ofereça-se para tarefas concretas.",
        "Ajude a pensar na segurança do projeto.",
      ]},
      { t:"Assumir tarefas", i:[
        "Cumpra com diligência o que lhe for designado.",
        "Seja pontual e confiável.",
        "Confirme o que fazer e quando.",
        "Peça ajuda cedo se precisar.",
      ]},
      { t:"Servir com o coração", i:[
        "Sirva com amor, sem esperar reconhecimento.",
        "Trate cada pessoa ajudada com dignidade.",
        "Sirva com alegria, mesmo nas tarefas simples.",
        "Ore por quem você está ajudando.",
      ]},
      { t:"Trabalhar em equipe", i:[
        "Coopere com o comitê e os coordenadores.",
        "Comunique dificuldades cedo.",
        "Apoie os colegas do comitê.",
        "Faça sua parte sem precisar ser cobrado.",
      ]},
      { t:"Zelar pela segurança", i:[
        "Ajude a manter um ambiente seguro.",
        "Siga as orientações do coordenador.",
        "Fique atento aos riscos durante o serviço.",
        "Mantenha a norma dos dois adultos com menores.",
      ]},
    ],
    fecho:{ t:"Cada ato de serviço, por menor que seja, reflete o amor de Cristo. Sua ajuda no comitê abençoa vidas de forma real.", f:"Manual Geral, cap. 8" },
  }),
];

/* ---- CONTEÚDO COMPLETO: SOCIEDADE DE SOCORRO --------------------------- */
