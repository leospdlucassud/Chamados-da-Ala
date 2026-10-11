"use strict";

const ESCOLA_DOMINICAL = [
  full("Presidente da Escola Dominical", {
    escritura:{ t:"Buscai diligentemente e ensinai-vos uns aos outros palavras de sabedoria.", r:"Doutrina e Convênios 88:118" },
    proposito:"Chamado para apoiar o ensino do evangelho na ala — no lar e na Igreja. Organiza as classes com a aprovação do bispado, apoia e instrui os professores e dirige o conselho de professores, ajudando a elevar a qualidade do ensino à maneira do Salvador.",
    ref:"Manual Geral, 13.2.2",
    resp:[
      "Servir no conselho da ala e apoiar o ensino no lar e na Igreja (13.2.2).",
      "Organizar as classes da Escola Dominical com aprovação do bispado.",
      "Apoiar, incentivar e instruir os professores.",
      "Dirigir as reuniões do conselho de professores.",
      "Manter os registros de frequência.",
      "Ajudar a chamar e a apoiar novos professores, com aprovação do bispado.",
      "Promover a melhoria do ensino em todas as organizações.",
      "Quando o conselho da ala decidir oferecê-la, organizar a classe opcional “Alicerces do Evangelho” para novos membros e amigos, e ajudar a chamar e a apoiar seu professor.",
    ],
    areas:[
      { t:"Apoiar os professores", i:[
        "Visite as classes e ofereça incentivo específico.",
        "Ajude os novos professores a se prepararem.",
        "Compartilhe recursos de “Ensinar à Maneira do Salvador”.",
        "Reconheça e agradeça o esforço de cada professor.",
      ]},
      { t:"Dirigir o conselho de professores", i:[
        "Reúna os professores das organizações uma vez por mês.",
        "Concentre-se em princípios de ensino, não só em logística.",
        "Programe as reuniões mensais do conselho, durante um dos blocos de aula de 25 minutos (a partir de setembro de 2026).",
        "Trabalhe uma prática de ensino por vez.",
      ]},
      { t:"Organizar as classes", i:[
        "Proponha ao bispado a estrutura das classes.",
        "A partir de setembro de 2026, as aulas passam a ser semanais, de 25 minutos — ajude a adaptar o ensino a esse novo formato.",
        "Assegure professores para cada classe.",
        "Reveja a estrutura conforme as necessidades da ala.",
      ]},
      { t:"Elevar o ensino no lar", i:[
        "Incentive o uso de “Vem, e Segue-Me” em família.",
        "Ajude os membros a aprenderem em casa e na Igreja.",
        "Compartilhe ideias para o estudo em família.",
        "Incentive a conversa sobre o evangelho em casa.",
      ]},
      { t:"Cuidar dos registros", i:[
        "Mantenha a frequência atualizada.",
        "Ajude o bispado a acompanhar a participação.",
        "Ajude a identificar quem não está frequentando.",
        "Use os dados para servir, não só para contar.",
      ]},
    ],
    fecho:{ t:"O bom ensino muda vidas. Ao apoiar e elevar os professores, o presidente da Escola Dominical ajuda toda a ala a aprender de Cristo.", f:"Manual Geral, cap. 13" },
  }),
  full("Primeiro Conselheiro da Escola Dominical", {
    proposito:"Serve sob a direção do presidente da Escola Dominical, auxiliando-o a apoiar o ensino na ala e assumindo as designações que receber.",
    ref:"Manual Geral, 13.2.2.1",
    resp:["Auxiliar o presidente e representá-lo quando designado.","Apoiar e instruir os professores designados.","Ajudar a organizar as classes e o conselho de professores.","Participar da presidência.","Ajudar a promover a melhoria do ensino na ala.","Cumprir as designações recebidas do presidente."],
    areas:[
      { t:"Apoiar o presidente", i:["Assuma as designações recebidas.","Prepare-se para presidir na ausência dele.","Aja com iniciativa.","Mantenha-o informado da sua área."]},
      { t:"Apoiar os professores", i:["Visite as classes designadas.","Ofereça incentivo e recursos.","Reconheça o esforço de cada professor.","Compartilhe recursos de ensino."]},
      { t:"Ajudar no conselho de professores", i:["Ajude a preparar as reuniões.","Compartilhe boas práticas de ensino.","Ajude a conduzir as reuniões.","Acompanhe as ideias aplicadas."]},
      { t:"Preparar-se", i:["Estude “Ensinar à Maneira do Salvador”.","Participe dos treinamentos.","Estude os capítulos de ensino do Manual.","Observe bons professores em ação."]},
      { t:"Servir com unidade", i:["Apoie as decisões da presidência.","Comunique-se com clareza.","Sustente o que se decide em conselho.","Colabore com o outro conselheiro."]},
    ],
    fecho:{ t:"O conselheiro fiel ajuda a elevar o ensino na ala. Seu apoio fortalece cada professor e cada classe.", f:"Manual Geral, cap. 13" },
  }),
  full("Segundo Conselheiro da Escola Dominical", {
    proposito:"Serve sob a direção do presidente da Escola Dominical, auxiliando-o e assumindo as designações que receber, frequentemente ligadas a certas classes ou ao apoio a novos professores.",
    ref:"Manual Geral, 13.2.2.1",
    resp:["Auxiliar o presidente e representá-lo quando designado.","Apoiar e instruir os professores designados.","Ajudar a organizar as classes.","Participar da presidência.","Ajudar especialmente os novos professores.","Apoiar a organização das classes e recursos."],
    areas:[
      { t:"Apoiar o presidente", i:["Cumpra prontamente suas designações.","Esteja pronto para servir.","Aja com iniciativa.","Comunique o andamento da sua área."]},
      { t:"Apoiar os professores", i:["Ajude os novos professores a começar bem.","Ofereça incentivo específico.","Acompanhe as primeiras aulas dos novos.","Compartilhe recursos e ideias."]},
      { t:"Ajudar na organização", i:["Apoie a estrutura das classes.","Ajude no conselho de professores.","Ajude a suprir necessidades de ensino.","Colabore no planejamento."]},
      { t:"Preparar-se", i:["Estude os recursos de ensino.","Participe dos treinamentos.","Estude “Ensinar à Maneira do Salvador”.","Observe bons professores em ação."]},
      { t:"Servir com unidade", i:["Sustente as decisões da presidência.","Colabore com o outro conselheiro.","Comunique-se com clareza.","Fale a uma só voz com a presidência."]},
    ],
    fecho:{ t:"Cada professor apoiado abençoa muitos alunos. Seu serviço eleva silenciosamente a qualidade do ensino na ala.", f:"Manual Geral, cap. 13" },
  }),
  full("Secretário da Escola Dominical", {
    proposito:"Ajuda a presidência da Escola Dominical a acompanhar as designações e a frequência e a organizar as reuniões, apoiando o bom funcionamento das classes.",
    ref:"Manual Geral, 13.2.2.1",
    resp:["Manter os registros de frequência das classes.","Ajudar a acompanhar as designações dos professores.","Apoiar a organização do conselho de professores.","Auxiliar a presidência conforme necessário.","Ajudar a acompanhar a designação de professores em cada classe.","Apoiar a comunicação de reuniões e treinamentos."],
    areas:[
      { t:"Cuidar dos registros", i:["Mantenha a frequência atualizada.","Organize as listas de classes e professores.","Confira os dados periodicamente.","Ajude a identificar quem não frequenta."]},
      { t:"Acompanhar designações", i:["Ajude a registrar quem ensina cada classe.","Dê seguimento às atribuições.","Mantenha atualizada a lista de professores por classe.","Avise quando faltar professor."]},
      { t:"Apoiar as reuniões", i:["Ajude a preparar o conselho de professores.","Registre o que for decidido.","Prepare a pauta com a presidência.","Distribua as decisões aos responsáveis."]},
      { t:"Comunicar", i:["Avise sobre reuniões e treinamentos.","Colabore com a secretaria da ala.","Confirme presenças quando necessário.","Avise com antecedência."]},
      { t:"Servir com fidelidade", i:["Seja pontual e organizado.","Trate os dados com discrição.","Cumpra suas tarefas sem ser lembrado.","Ajude no que for preciso."]},
    ],
    fecho:{ t:"A ordem nos bastidores permite que o ensino floresça. Sua fidelidade sustenta o trabalho da Escola Dominical.", f:"Manual Geral, cap. 13" },
  }),
  full("Professor(a) da Escola Dominical", {
    escritura:{ t:"E dar-vos-ei pastores segundo o meu coração, que vos apascentarão com ciência e com inteligência.", r:"Jeremias 3:15" },
    proposito:"Ensina as classes da Escola Dominical usando “Vem, e Segue-Me”, ajudando os membros a aprenderem e a viverem o evangelho de Jesus Cristo. Ensina à maneira do Salvador: por amor, pelo Espírito e convidando à ação. A partir de setembro de 2026, as aulas passam a ser semanais, de 25 minutos, com ênfase em debates significativos ligados ao estudo feito no lar — sem a preocupação de cobrir todo o material.",
    ref:"Manual Geral, 13.2.3 (ver cap. 17)",
    resp:[
      "Preparar-se com as escrituras e o material “Vem, e Segue-Me”.",
      "Conhecer os membros da classe e amá-los.",
      "Ensinar por meio do Espírito, convidando à participação e à conversão.",
      "Ensinar à maneira do Salvador: por amor, pelo Espírito e convidando à ação.",
      "Incentivar o estudo do evangelho no lar.",
      "Coordenar com a presidência os tópicos e o calendário de ensino.",
    ],
    areas:[
      { t:"Preparar-se espiritualmente", i:["Estude as escrituras com antecedência e oração.","Busque a orientação do Espírito.","Ore por cada membro da classe.","Pondere as necessidades dos alunos."]},
      { t:"Ensinar à maneira do Salvador", i:["Centre cada aula em Jesus Cristo.","Ame e conheça cada aluno.","Use histórias e exemplos das escrituras.","Testifique com sinceridade."]},
      { t:"Convidar à participação", i:["Faça boas perguntas e ouça.","Crie um ambiente seguro para compartilhar.","Valorize cada contribuição.","Deixe o Espírito guiar a discussão."]},
      { t:"Usar “Vem, e Segue-Me”", i:["Siga o cronograma de estudo.","Ligue a aula ao estudo feito em casa.","Prepare-se com o material aprovado.","Evite fontes especulativas ou não oficiais."]},
      { t:"Convidar à ação", i:["Ajude os alunos a aplicarem o que aprendem.","Incentive-os a guardar seus convênios.","Proponha uma aplicação concreta para a semana.","Retome na aula seguinte o que foi aplicado."]},
    ],
    fecho:{ t:"Ensinar o evangelho é apascentar as ovelhas do Senhor. Ao ensinar por amor e pelo Espírito, você aproxima cada aluno de Cristo.", f:"Manual Geral, cap. 13 e 17" },
  }),
  full("Professor(a) de Alicerces do Evangelho", {
    escritura:{ t:"E depois de terem sido recebidos ao batismo… eram lembrados e nutridos pela boa palavra de Deus, para os manter no caminho certo.", r:"Morôni 6:4" },
    proposito:"Ensina a classe opcional “Alicerces do Evangelho” da Escola Dominical — destinada a novos membros adultos, a amigos que aprendem sobre a Igreja e a membros que retornam à atividade. Ajuda cada pessoa a sentir-se bem-vinda, valorizada e necessária, e a aprender as verdades básicas do evangelho restaurado de Jesus Cristo, preparando-a para o discipulado ao longo da vida. A pessoa frequenta a classe por dois a quatro meses e, então, integra-se à classe regular de “Vem, e Segue-Me”. A classe é opcional e oferecida conforme a decisão do conselho da ala.",
    ref:"Manual Geral, 13.2.3",
    resp:[
      "Preparar e ministrar as 13 lições de “Alicerces do Evangelho”, sobre as verdades básicas do evangelho (a Expiação de Jesus Cristo, oração, escrituras, revelação pessoal, o dia do Senhor, o sacramento, obediência, castidade, dízimo, convênios, o templo e a história da família, a Igreja restaurada e servir e compartilhar o evangelho).",
      "Acolher cada participante, ajudando-o a sentir-se bem-vindo, confortável, valorizado e necessário na ala.",
      "Ensinar à maneira do Salvador: por amor, pelo Espírito e convidando à ação.",
      "Ajudar cada pessoa a preparar-se para os convênios, as ordenanças e o discipulado ao longo da vida.",
      "Acompanhar, com carinho, a transição para a classe regular de “Vem, e Segue-Me” após dois a quatro meses.",
      "Coordenar com a presidência da Escola Dominical, o conselho da ala e os missionários o cuidado dos novos membros e amigos.",
    ],
    areas:[
      { t:"Acolher com amor", i:[
        "Aprenda e use o nome de cada participante.",
        "Receba cada pessoa com calor e sem pressa.",
        "Ajude-a a fazer amizades e a sentir-se em casa na ala.",
        "Cuide para que ninguém se sinta um estranho.",
      ]},
      { t:"Ensinar as verdades básicas", i:[
        "Ensine princípios simples e claros, um de cada vez.",
        "Ligue cada lição a Jesus Cristo e à Sua Expiação.",
        "Use as escrituras e experiências pessoais sinceras.",
        "Evite assuntos avançados, especulativos ou não oficiais.",
      ]},
      { t:"Ensinar à maneira do Salvador", i:[
        "Ame e conheça cada aluno.",
        "Faça boas perguntas e ouça com atenção.",
        "Testifique com sinceridade e simplicidade.",
        "Deixe o Espírito guiar a aula.",
      ]},
      { t:"Convidar à ação", i:[
        "Ajude cada um a aplicar o que aprende.",
        "Incentive a oração, o estudo diário e a frequência.",
        "Prepare cada pessoa para os próximos convênios e ordenanças.",
        "Retome na aula seguinte o que foi aplicado.",
      ]},
      { t:"Cuidar da transição", i:[
        "Acompanhe a frequência com atenção e carinho.",
        "Após dois a quatro meses, ajude na integração à classe regular.",
        "Coordene com a presidência da Escola Dominical e os missionários.",
        "Continue ministrando e ficando por perto após a transição.",
      ]},
    ],
    fecho:{ t:"Acolher e nutrir os novos discípulos é obra do próprio Salvador. Ao ensinar com amor as verdades básicas, você ajuda cada pessoa a assentar seus alicerces sobre a rocha de Cristo.", f:"Manual Geral, cap. 13" },
  }),
  full("Especialista do Centro de Recursos (Biblioteca)", {
    proposito:"Organiza os recursos da biblioteca da capela e ajuda líderes e membros a localizarem e usarem os materiais de ensino, apoiando o bom funcionamento das aulas.",
    ref:"Manual Geral, 13.7.2",
    resp:["Organizar e manter os recursos da biblioteca.","Ajudar os professores a encontrar e preparar materiais.","Controlar o empréstimo e a devolução de itens.","Zelar pelos equipamentos e suprimentos.","Ajudar a preparar recursos audiovisuais para as aulas.","Treinar líderes e professores no uso dos equipamentos."],
    areas:[
      { t:"Organizar os recursos", i:["Mantenha os materiais catalogados e acessíveis.","Reponha suprimentos quando necessário.","Catalogue os materiais por assunto.","Faça inventário periódico."]},
      { t:"Ajudar os professores", i:["Auxilie na busca de recursos para as aulas.","Ensine a usar os equipamentos.","Antecipe os materiais das próximas aulas.","Sugira recursos úteis."]},
      { t:"Controlar empréstimos", i:["Registre o que é emprestado e devolvido.","Cuide da conservação dos itens.","Mantenha um registro simples de empréstimos.","Cobre gentilmente as devoluções."]},
      { t:"Zelar pelo espaço", i:["Mantenha a biblioteca limpa e ordenada.","Comunique necessidades de reparo.","Organize os armários e prateleiras.","Reponha os suprimentos que faltarem."]},
      { t:"Servir com prontidão", i:["Esteja disponível antes das reuniões.","Atenda a todos com gentileza.","Antecipe as necessidades dos professores.","Resolva os pedidos com rapidez."]},
    ],
    fecho:{ t:"Bons recursos, bem organizados, tornam o ensino mais eficaz. Seu serviço discreto abençoa cada professor e cada classe.", f:"Manual Geral, cap. 13" },
  }),
];

/* ---- CONTEÚDO COMPLETO: PRIMÁRIA (crianças) ----------------------------
   Norma dos dois adultos responsáveis em toda interação com crianças. ------ */
