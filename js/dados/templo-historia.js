"use strict";

const TEMPLO_HF = [
  full("Líder de Templo e História da Família da Ala", {
    escritura:{ t:"Ele converterá o coração dos pais aos filhos, e o coração dos filhos aos pais.", r:"Malaquias 4:6" },
    proposito:"Lidera a obra do templo e da história da família na ala, sob a direção do bispado. Ajuda os membros a encontrar seus antepassados, a realizar as ordenanças por eles e a irem ao templo, unindo as famílias pela eternidade.",
    ref:"Manual Geral, 25.2",
    resp:[
      "Coordenar a obra do templo e da história da família no conselho da ala.",
      "Orientar os consultores de templo e história da família.",
      "Ajudar os membros a preparar nomes e a receber a recomendação para o templo.",
      "Incentivar as famílias a participarem da obra em conjunto.",
      "Ajudar a treinar e a apoiar os consultores e o indexador.",
      "Trabalhar com os jovens e o Sacerdócio Aarônico na obra.",
    ],
    areas:[
      { t:"Liderar pelo conselho da ala", i:[
        "Leve a obra do templo e da história da família ao conselho.",
        "Trabalhe com o quórum de élderes e a Sociedade de Socorro.",
        "Defina metas simples com o conselho.",
        "Reporte o progresso ao bispado.",
      ]},
      { t:"Orientar os consultores", i:[
        "Ajude os consultores a auxiliarem os membros no FamilySearch.",
        "Ofereça treinamento e incentivo.",
        "Reúna-se com eles regularmente.",
        "Reconheça e agradeça seu serviço.",
      ]},
      { t:"Ajudar a preparar nomes", i:[
        "Ajude as famílias a encontrar antepassados e a reservar ordenanças.",
        "Incentive levar os próprios nomes ao templo.",
        "Ajude a resolver dúvidas no FamilySearch.",
        "Comemore cada nome levado ao templo.",
      ]},
      { t:"Incentivar a ida ao templo", i:[
        "Ajude os membros a obterem a recomendação.",
        "Organize visitas do quórum e da Sociedade de Socorro ao templo.",
        "Ajude os novos membros a se prepararem.",
        "Incentive as ordenanças pelos antepassados.",
      ]},
      { t:"Envolver as famílias e os jovens", i:[
        "Ajude os jovens a fazerem a obra por seus antepassados.",
        "Torne a história da família uma experiência em família.",
        "Ajude cada jovem a levar seus próprios nomes.",
        "Promova momentos familiares de história da família.",
      ]},
    ],
    fecho:{ t:"O coração dos filhos volta-se aos pais no templo. Ao liderar esta obra, você ajuda a unir famílias dos dois lados do véu para a eternidade.", f:"Manual Geral, cap. 25" },
  }),
  full("Consultor de Templo e História da Família da Ala", {
    proposito:"Ajuda os membros, individualmente, a descobrir seus antepassados no FamilySearch, a preparar nomes para as ordenanças do templo e a experimentar a alegria de unir a família pela eternidade.",
    ref:"Manual Geral, 25.4",
    resp:["Ajudar os membros a usar o FamilySearch.","Ajudá-los a encontrar antepassados e a reservar ordenanças.","Incentivar a preparação para o templo.","Ensinar e inspirar o amor pela história da família.","Ajudar os jovens a encontrar nomes para o templo.","Incentivar as famílias a registrarem suas memórias."],
    areas:[
      { t:"Ajudar no FamilySearch", i:["Sente-se com os membros para iniciar a árvore.","Mostre como encontrar e verificar antepassados.","Crie a conta do FamilySearch com quem não tem.","Mostre as ferramentas de descoberta."]},
      { t:"Preparar nomes para o templo", i:["Ajude a reservar e imprimir ordenanças.","Incentive levar os próprios nomes ao templo.","Explique cada ordenança de forma simples.","Ajude a organizar os cartões de ordenança."]},
      { t:"Ensinar com paciência", i:["Adapte-se ao ritmo de cada pessoa.","Comemore cada descoberta.","Volte a ajudar quantas vezes forem necessárias.","Ensine passo a passo."]},
      { t:"Envolver as famílias", i:["Ajude famílias a trabalharem juntas.","Incentive histórias e memórias.","Incentive pais e filhos a trabalharem juntos.","Ajude a preservar fotos e histórias."]},
      { t:"Inspirar pelo testemunho", i:["Compartilhe experiências pessoais.","Ajude os membros a sentirem o Espírito de Elias.","Conte histórias de descobertas.","Testifique das bênçãos do templo."]},
    ],
    fecho:{ t:"Ao ajudar um membro a encontrar um antepassado, você abre a porta para bênçãos eternas. O Espírito de Elias toca corações dos dois lados do véu.", f:"Manual Geral, cap. 25" },
  }),
  full("Indexador", {
    proposito:"Participa da indexação de registros no FamilySearch, transcrevendo documentos para que se tornem pesquisáveis. Esse serviço, muitas vezes feito de casa, torna possível que milhões encontrem seus antepassados.",
    ref:"Manual Geral, cap. 25",
    resp:["Indexar registros pelo FamilySearch com exatidão.","Seguir as instruções de cada projeto.","Contribuir com regularidade, no ritmo possível.","Ajudar a revisar quando qualificado.","Manter a exatidão e a privacidade dos dados.","Convidar outros a participar da indexação."],
    areas:[
      { t:"Indexar com exatidão", i:["Siga cuidadosamente as instruções do projeto.","Confira nomes e datas com atenção.","Não adivinhe: siga os padrões do projeto.","Marque como ilegível o que não conseguir ler."]},
      { t:"Servir com constância", i:["Reserve um tempo regular, mesmo que curto.","Contribua no ritmo que puder manter.","Defina uma meta pessoal simples.","Faça um pouco por vez, com frequência."]},
      { t:"Aprender e melhorar", i:["Comece por projetos mais simples.","Use os tutoriais do FamilySearch.","Avance para projetos mais desafiadores aos poucos.","Peça revisão do seu trabalho."]},
      { t:"Colaborar", i:["Ajude a revisar quando estiver apto.","Tire dúvidas com o líder de história da família.","Ajude novos indexadores a começar.","Participe de eventos de indexação da ala."]},
      { t:"Lembrar o propósito", i:["Lembre-se de que cada registro representa uma pessoa.","Sirva com reverência e amor.","Ore para sentir o valor de cada nome.","Sirva com gratidão."]},
    ],
    fecho:{ t:"Cada nome indexado ajuda alguém a encontrar sua família. Esse serviço silencioso conecta gerações e abençoa incontáveis pessoas.", f:"Manual Geral, cap. 25" },
  }),
];

/* ---- CONTEÚDO COMPLETO: JOVENS ADULTOS SOLTEIROS ----------------------- */
