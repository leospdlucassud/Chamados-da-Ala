"use strict";

const JAS = [
  full("Líder dos Jovens Adultos Solteiros", {
    escritura:{ t:"Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis.", r:"1 Timóteo 4:12" },
    proposito:"Ajuda os jovens adultos solteiros (geralmente de 18 a 30 anos) a participarem do trabalho de salvação e exaltação e a sentirem-se parte da ala. Serve no comitê de JAS da estaca e lidera o comitê de JAS da ala, quando houver.",
    ref:"Manual Geral, 14.1.2.3",
    resp:[
      "Ajudar os JAS a participar da obra e a permanecerem ligados à ala.",
      "Servir no comitê de JAS da estaca e liderar o da ala.",
      "Reunir-se regularmente com os líderes do quórum de élderes e da Sociedade de Socorro.",
      "Ajudar a planejar atividades de amizade, serviço e aprendizado.",
      "Ajudar a integrar os JAS que chegam de fora da ala.",
      "Trabalhar com o comitê de JAS e prestar contas ao bispado.",
    ],
    areas:[
      { t:"Incluir cada JAS", i:[
        "Conheça pelo nome os jovens adultos solteiros da ala.",
        "Alcance os menos ativos e os que chegam de fora.",
        "Convide pessoalmente os que não têm comparecido.",
        "Ajude cada um a receber um chamado ou designação.",
      ]},
      { t:"Fazer amizade verdadeira", i:[
        "Promova amizades sinceras, não apenas eventos.",
        "Ajude cada um a sentir-se necessário na ala.",
        "Incentive os JAS a cuidarem uns dos outros.",
        "Esteja disponível para ouvir e apoiar.",
      ]},
      { t:"Coordenar com os líderes", i:[
        "Reúna-se com o quórum de élderes e a Sociedade de Socorro.",
        "Participe do comitê de JAS da estaca.",
        "Alinhe-se com o bispado sobre o cuidado dos JAS.",
        "Compartilhe necessidades com discrição.",
      ]},
      { t:"Planejar atividades significativas", i:[
        "Equilibre serviço, aprendizado e convívio.",
        "Envolva os próprios JAS no planejamento.",
        "Aproveite as atividades da estaca e multiestaca.",
        "Torne cada atividade acolhedora e sem pressão.",
      ]},
      { t:"Apoiar decisões de vida", i:[
        "Incentive o templo, a educação e o serviço missionário.",
        "Ministre com sensibilidade às circunstâncias de cada um.",
        "Respeite o ritmo e as escolhas de cada um.",
        "Aponte sempre para o Salvador como fonte de força.",
      ]},
    ],
    fecho:{ t:"Os jovens adultos solteiros trazem força e fé à Igreja. Ao incluí-los e amá-los, você ajuda cada um a firmar-se em Cristo nesta fase decisiva.", f:"Manual Geral, cap. 14" },
  }),
  full("Consultor dos Jovens Adultos Solteiros", {
    proposito:"Adulto chamado para apoiar e ministrar aos jovens adultos solteiros da ala, ajudando-os a sentir-se incluídos e a participar do trabalho de salvação e exaltação.",
    ref:"Manual Geral, 14.1",
    resp:["Ministrar aos JAS e apoiá-los.","Ajudar o líder de JAS a planejar e realizar atividades.","Incentivar a amizade e a inclusão.","Apoiar decisões de templo, educação e missão.","Ajudar a alcançar os JAS menos ativos.","Apoiar a integração dos que chegam de fora."],
    areas:[
      { t:"Ministrar com amor", i:["Conheça cada JAS e suas circunstâncias.","Alcance os menos ativos.","Interesse-se genuinamente pela vida de cada um.","Esteja disponível quando precisarem."]},
      { t:"Apoiar as atividades", i:["Ajude a planejar e a realizar atividades.","Incentive a participação de todos.","Ajude na logística sem tomar a frente.","Deixe os JAS liderarem."]},
      { t:"Fazer amizade", i:["Seja um mentor acessível e de confiança.","Promova amizades sinceras.","Acolha os que chegam.","Aproxime-se de quem está sozinho."]},
      { t:"Incentivar o crescimento", i:["Apoie metas de templo, estudo e serviço.","Ofereça encorajamento pessoal.","Reconheça os passos que cada um dá.","Aponte para o Salvador."]},
      { t:"Servir com sensibilidade", i:["Respeite a individualidade de cada um.","Evite pressão; ofereça apoio genuíno.","Guarde as confidências.","Ame sem julgar."]},
    ],
    fecho:{ t:"Um consultor atencioso pode ser âncora de fé para um jovem adulto. Sua amizade e ministração fazem diferença duradoura.", f:"Manual Geral, cap. 14" },
  }),
  full("Consultora das Irmãs Jovens Adultas Solteiras da Sociedade de Socorro", {
    proposito:"Irmã designada pela presidência da Sociedade de Socorro para ministrar às jovens adultas solteiras da ala, ajudando-as a sentir-se incluídas, amadas e ligadas à Sociedade de Socorro.",
    ref:"Manual Geral, 14.1",
    resp:["Ministrar às irmãs jovens adultas solteiras.","Ajudá-las a integrar-se à Sociedade de Socorro.","Apoiar sua participação na obra e nas atividades.","Coordenar com o líder de JAS e a presidência da SS.","Ajudar a alcançar as irmãs menos ativas.","Apoiar a integração das que chegam de fora."],
    areas:[
      { t:"Ministrar às irmãs", i:["Conheça cada jovem adulta solteira.","Alcance as menos ativas com amor.","Interesse-se genuinamente por sua vida.","Esteja disponível para ouvir."]},
      { t:"Integrar à Sociedade de Socorro", i:["Ajude-as a sentir-se parte da irmandade.","Convide-as a participar e a servir.","Apresente-as a outras irmãs.","Ajude-as a receber designações."]},
      { t:"Apoiar suas decisões", i:["Incentive o templo, a educação e o serviço.","Ofereça amizade e conselho quando pedido.","Respeite o ritmo de cada uma.","Aponte para o Salvador."]},
      { t:"Coordenar o cuidado", i:["Trabalhe com o líder de JAS e a presidência da SS.","Comunique necessidades com discrição.","Alinhe-se sobre a ministração.","Evite duplicar esforços."]},
      { t:"Servir com sensibilidade", i:["Respeite cada circunstância de vida.","Seja uma amiga constante.","Guarde as confidências.","Ame sem julgar."]},
    ],
    fecho:{ t:"Toda jovem adulta solteira precisa sentir que pertence. Sua ministração ajuda cada irmã a sentir o amor do Salvador por meio da Sociedade de Socorro.", f:"Manual Geral, cap. 14" },
  }),
  full("Presidente do Comitê de JAS", {
    proposito:"Lidera o comitê de jovens adultos solteiros da ala, ajudando a planejar e realizar atividades de amizade, serviço e aprendizado, sob a direção do líder de JAS e do bispado.",
    ref:"Manual Geral, 14.1.1.2",
    resp:["Liderar o comitê de JAS da ala.","Planejar atividades de amizade, serviço e aprendizado.","Ajudar a alcançar e incluir cada JAS.","Coordenar com o líder de JAS e os líderes da ala.","Delegar tarefas aos membros do comitê.","Acompanhar e agradecer o serviço de cada um."],
    areas:[
      { t:"Liderar o comitê", i:["Reúna e oriente os membros do comitê.","Delegue responsabilidades.","Defina tarefas claras para cada um.","Reconheça o esforço de todos."]},
      { t:"Planejar com propósito", i:["Equilibre serviço, aprendizado e convívio.","Ouça as ideias dos próprios JAS.","Planeje com antecedência.","Torne as atividades acolhedoras e sem pressão."]},
      { t:"Incluir a todos", i:["Alcance os menos ativos e os recém-chegados.","Crie um ambiente acolhedor.","Convide pessoalmente os que faltam.","Ajude cada um a sentir-se bem-vindo."]},
      { t:"Coordenar", i:["Trabalhe com o líder de JAS e o bispado.","Alinhe-se com o comitê da estaca.","Comunique as atividades com antecedência.","Aproveite as atividades multiestaca."]},
      { t:"Servir pelo exemplo", i:["Dê o exemplo de amizade e participação.","Sirva com entusiasmo.","Seja o primeiro a acolher.","Inspire os demais pela dedicação."]},
    ],
    fecho:{ t:"Ao reunir os jovens adultos solteiros em amizade e serviço, você ajuda cada um a sentir-se em casa e a crescer na fé.", f:"Manual Geral, cap. 14" },
  }),
  full("Membro do Comitê de JAS", {
    proposito:"Ajuda o comitê de jovens adultos solteiros a planejar e realizar atividades e a alcançar cada JAS da ala com amizade e inclusão.",
    ref:"Manual Geral, 14.1.1.2",
    resp:["Colaborar no planejamento das atividades.","Assumir tarefas designadas pelo comitê.","Ajudar a alcançar e acolher cada JAS.","Apoiar as atividades de serviço e aprendizado.","Ajudar a integrar os que chegam de fora.","Comunicar as atividades aos colegas JAS."],
    areas:[
      { t:"Colaborar no planejamento", i:["Traga ideias que unam os JAS.","Participe das reuniões do comitê.","Ofereça-se para tarefas concretas.","Ajude a pensar em atividades acolhedoras."]},
      { t:"Assumir tarefas", i:["Cumpra o que lhe for designado.","Seja confiável e pontual.","Confirme o que precisa ser feito.","Peça ajuda cedo se precisar."]},
      { t:"Fazer amizade", i:["Acolha os que chegam.","Alcance os que costumam faltar.","Aproxime-se de quem está sozinho.","Convide pessoalmente para as atividades."]},
      { t:"Servir e aprender", i:["Ajude nos projetos de serviço.","Apoie as atividades de aprendizado.","Participe com o coração aberto.","Incentive os demais a crescer."]},
      { t:"Ser exemplo", i:["Participe com entusiasmo.","Convide amigos a se juntarem.","Sirva com alegria.","Seja acolhedor com todos."]},
    ],
    fecho:{ t:"Cada gesto de amizade ajuda um jovem adulto a sentir-se parte da Igreja. Sua colaboração no comitê fortalece toda a comunidade de JAS.", f:"Manual Geral, cap. 14" },
  }),
];

/* ---- CONTEÚDO COMPLETO: OUTROS CHAMADOS -------------------------------- */
