import { Player, TeamStats, TeamData } from '@/types';

// Dados atualizados dos jogadores da FURIA CS2 (abril de 2025)
export const currentPlayers: Player[] = [
  {
    id: "1",
    name: "yuurih",
    realName: "Yuri Santos",
    role: "Rifler",
  },
  {
    id: "2",
    name: "KSCERATO",
    realName: "Kaike Cerato",
    role: "Rifler",
  },
  {
    id: "3",
    name: "molodoy",
    realName: "David Bermudez",
    role: "Rifler",
  },
  {
    id: "4",
    name: "yekindar",
    realName: "Mareks Gaļinskis",
    role: "Rifler",
  },
  {
    id: "5",
    name: "FalleN",
    realName: "Gabriel Toledo",
    role: "AWPer/IGL",
  },
  {
    id: "6",
    name: "skullz",
    realName: "Felipe Medeiros",
    role: "Reserva/AWPer",
  },
  {
    id: "7",
    name: "chelo",
    realName: "Marcelo Cespedes",
    role: "Reserva/Rifler",
  },
];

// Estatísticas atualizadas do time
export const currentTeamStats: TeamStats = {
  worldRanking: 8,
  recentWins: 6,
  recentLosses: 4,
  nextMatch: "BLAST Premier Spring Final",
};

// Informações do time
export const currentTeamData: TeamData = {
  name: "FURIA Esports",
  description: "FURIA Esports é uma organização brasileira de esports fundada em 2017, conhecida principalmente por sua equipe de Counter-Strike 2 (CS2), que conquistou bastante destaque internacional e representa o Brasil em competições de alto nível.",
  coach: "Nicholas \"guerri\" Nogueira",
};

// Função para obter uma resposta contextualizada com base na pergunta
export function getFuriaResponse(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  // Perguntas exatas dos botões iniciais
  if (query === "Quem são os jogadores?") {
    return 'Nosso esquadrão tá MONSTRO:\n\n• FalleN: O Godfather do CS brasileiro, nosso IGL e AWPer! 👑\n• yuurih: Monstro do rifle, o cara não erra! 💯\n• KSCERATO: A máquina de headshots! 🤯\n• molodoy: O jovem prodígio com reflexos insanos! ⚡\n• yekindar: A estrela internacional que chegou destruindo! 💣\n\nTemos ainda o skullz e o chelo como reservas! Time STACKED! 🔥';
  }
  else if (query === "Quando é o próximo jogo?") {
    return `A FURIA vai jogar o ${currentTeamStats.nextMatch}! Vai ser um torneio insano com os melhores times do mundo! Vai rolar muita bagaceira, vamo que vamo! 🔥`;
  }
  else if (query === "Qual o ranking da FURIA?") {
    return `FURIA tá no TOP ${currentTeamStats.worldRanking} MUNDIAL, mano! No ranking atual do HLTV, nosso esquadrão tá subindo cada vez mais! 🚀 Com muito trabalho, logo logo estaremos no TOP 5 novamente!`;
  }
  
  // Perguntas sobre jogadores
  else if (query === "Quem é o melhor jogador?") {
    return 'KSCERATO continua sendo o MONSTRO do time! O cara tá jogando muito! A precisão dele é absurda, não perde duel, não erra spray, é um alien! 👽 Mas o yuurih também tá destruindo demais nos últimos jogos!';
  }
  else if (query === "Qual a função do FalleN no time?") {
    return 'O FalleN chegou na FURIA em janeiro de 2024! Ele voltou pro Brasil depois de anos jogando na América do Norte e trouxe toda a experiência de bicampeão mundial! 🏆🏆 O homem veio pra levar a FURIA ao topo, sendo AWPer e IGL ao mesmo tempo! É O VERDADEIRO MONSTRO! 📈';
  }
  else if (query === "Como o yekindar se adaptou ao time?") {
    return 'O yekindar se adaptou MUITO BEM! Os caras já estão se comunicando melhor que nunca, e ele já pegou o jeito brasileiro de jogar! 🇱🇻🤝🇧🇷 Aliás, ele já tá até tomando açaí e aprendendo a dançar pagode! 😂';
  }
  
  // Perguntas sobre jogos
  else if (query === "Quais são as chances de vitória?") {
    return 'Nossa equipe tá forte, mas o BLAST Premier Spring Final vai ser MUITO disputado! 😎 A FURIA precisa de foco total, mas com o esquadrão encaixando cada vez mais, as chances são boas! #VamosFURIA 💪';
  }
  else if (query === "Qual foi o último confronto?") {
    return 'Nos últimos jogos, a FURIA mostrou um CS de alto nível! O KSCERATO e o yuurih têm sido fundamentais, e o FalleN tá liderando muito bem com suas estratégias e experiência! 🔥';
  }
  else if (query === "Quais torneios vêm depois?") {
    return 'Depois do BLAST Premier Spring Final, a FURIA vai se preparar pro ESL Challenger em Melbourne e depois pro Major RMR! 🌎 Calendário lotado de torneios importantes! Muito CS de alto nível vindo aí!';
  }
  
  // Perguntas sobre ranking
  else if (query === "Como chegar ao Top 1?") {
    return 'Pra chegar ao Top 1, a FURIA precisa manter a consistência e seguir evoluindo como time! 🔝 Com o lineup atual cada vez mais entrosado e o guerri trabalhando forte, logo podemos chegar lá! A mentalidade é de campeão! 👑';
  }
  else if (query === "Quem está acima da FURIA?") {
    return 'Atualmente, times como Vitality, FaZe, NAVI, G2, Team Spirit, Complexity e Monte estão na frente no ranking, mas isso tá sempre mudando! 🔄 A FURIA tem tudo pra subir nas próximas semanas com bons resultados! 📈';
  }
  else if (query === "Quais times são rivais?") {
    return 'No cenário nacional, a Imperial e a MIBR são rivais tradicionais da FURIA! 🇧🇷 Já internacionalmente, sempre temos jogos disputados contra NAVI, Liquid e times europeus top! A rivalidade com times brasileiros sempre tem aquela energia especial! 💙';
  }
  
  // Perguntas sobre KSCERATO
  else if (query === "Quais são as estatísticas dele?") {
    return 'KSCERATO tá com média de rating alta, muitos headshots e é um dos melhores riflers do Brasil! 📊 É MUITA PRECISÃO! O maluco é uma MÁQUINA! Estatisticamente, ele é um dos jogadores mais consistentes da América Latina! 🌟';
  }
  else if (query === "Ele já ganhou algum MVP?") {
    return 'KSCERATO já ganhou MVP em vários torneios! O cara sempre está entre os melhores jogadores dos campeonatos! 🏆 É um dos grandes talentos do CS brasileiro, sem dúvida! 🔥';
  }
  else if (query === "Qual a função dele no time?") {
    return 'KSCERATO é o rifler estrela do time, o cara que segura o bomb site sozinho! 💣 Ele também é o clutcher, que sempre resolve quando tá todo mundo morto. A calma e precisão dele em 1v3 é algo de outro mundo! 🧠';
  }
  
  // Perguntas sobre FalleN
  else if (query === "Como o FalleN chegou na FURIA?") {
    return 'O FalleN chegou na FURIA em janeiro de 2024! Foi um projeto ambicioso depois de anos jogando na América do Norte. Ele decidiu voltar pro cenário brasileiro e trazer toda a experiência para essa nova fase da equipe. A chegada dele foi um game changer! 🚀';
  }
  else if (query === "Qual a influência do FalleN?") {
    return 'A influência do FalleN é GIGANTE! O cara trouxe toda a experiência de bicampeão mundial e tá passando conhecimento pros jovens. A liderança dele muda completamente o jogo da FURIA! 📈 Desde as táticas até a confiança do time, tudo melhorou com a chegada dele! 🧠';
  }
  else if (query === "Me fale sobre o molodoy") {
    return 'O molodoy é PURO TALENTO! O garoto veio da Europa e já mostrou que não é brincadeira! 💪 Tem uma mira mecânica perfeita e reflexos absurdos! Com o FalleN dando call, ele só vai melhorar cada vez mais! 🚀';
  }
  
  // Perguntas sobre mapas
  else if (query === "Qual o pior mapa da FURIA?") {
    return 'Ancient é um dos mapas mais desafiadores para a FURIA. Mas eles já estão treinando pra melhorar! A dedicação do time é incrível, estão sempre buscando evoluir em todos os mapas! 💯';
  }
  else if (query === "Quantos mapas tem no pool?") {
    return 'O pool atual do CS2 tem 7 mapas: Mirage, Inferno, Nuke, Overpass, Ancient, Anubis e Vertigo. A FURIA pratica todos, mas tem preferência por Mirage, Nuke e Inferno! 🗺️';
  }
  else if (query === "Eles treinam todos os mapas?") {
    return 'SIM! A FURIA tem bootcamp todos os dias, muitas horas de treino PESADO! 💪 O guerri faz questão que o time esteja preparado pra qualquer mapa. É profissionalismo total! Eles analisam cada detalhe dos demos! 🎮';
  }
  
  // Perguntas sobre guerri
  else if (query === "Há quanto tempo ele treina o time?") {
    return 'guerri tá com a FURIA desde o início! Já são mais de 5 ANOS como coach! 📅 Ele é praticamente a alma do time, conhece cada jogador melhor que ninguém! O cara é a mente por trás de todo o sucesso! 🧠';
  }
  else if (query === "Qual a filosofia de jogo do guerri?") {
    return 'A filosofia do guerri é CS AGRESSIVO! Pressão constante, timing perfeito e muita adaptação! 🔄 Ele desenvolveu um estilo único que o mundo todo respeita. A abordagem tática dele é diferenciada! 💡';
  }
  else if (query === "Ele já foi jogador?") {
    return 'SIM! guerri jogou CS 1.6 profissionalmente! 👴 Ele competiu em vários times brasileiros antes de virar coach. Essa experiência como jogador ajudou ele a entender melhor como desenvolver talentos! Mestre demais! 🧙‍♂️';
  }
  
  // Perguntas genéricas
  else if (query === "Qual o próximo torneio?") {
    return `O próximo grande evento da FURIA é o ${currentTeamStats.nextMatch}! 🔥 Depois vêm vários outros torneios importantes! A agenda tá LOTADA de competições Tier 1! É FURIA jogando contra os melhores do mundo direto! 🌎`;
  }
  else if (query === "Quem é a maior rival da FURIA?") {
    return 'No cenário nacional, a Imperial e a MIBR são rivais tradicionais da FURIA! 🇧🇷 Já internacionalmente, sempre temos jogos disputados contra NAVI, Liquid e times europeus top! A rivalidade com times brasileiros sempre tem aquela energia especial! 💙';
  }
  else if (query === "Como começou a FURIA CS?") {
    return 'A FURIA surgiu em 2017, fundada pelo Jaime "raizen" Pádua e cresceu rapidamente! No começo era um projeto pequeno, mas logo se tornou potência! 🚀 Hoje é uma das maiores orgs de esports do Brasil e representa muito bem o país no cenário internacional! 💙';
  }
  
  // Respostas para outras variações de perguntas
  else if (lowerQuery.includes('próximo jogo') || lowerQuery.includes('próxima partida')) {
    return `A FURIA vai jogar o ${currentTeamStats.nextMatch}! Vai ser um torneio insano com os melhores times do mundo! 🔥`;
  } 
  else if (lowerQuery.includes('jogadores') || lowerQuery.includes('linha') || lowerQuery.includes('lineup') || lowerQuery.includes('time')) {
    return 'Nosso esquadrão tá MONSTRO:\n\n• FalleN: O Godfather do CS brasileiro, nosso IGL e AWPer! 👑\n• yuurih: Monstro do rifle, o cara não erra! 💯\n• KSCERATO: A máquina de headshots! 🤯\n• molodoy: O jovem prodígio com reflexos insanos! ⚡\n• yekindar: A estrela internacional que chegou destruindo! 💣\n\nTemos ainda o skullz e o chelo como reservas! Time STACKED! 🔥';
  }
  else if (lowerQuery.includes('função do fallen') || lowerQuery.includes('papel do fallen')) {
    return 'O FalleN chegou na FURIA em janeiro de 2024! Ele voltou pro Brasil depois de anos jogando na América do Norte e trouxe toda a experiência de bicampeão mundial! 🏆🏆 O homem veio pra levar a FURIA ao topo, sendo AWPer e IGL ao mesmo tempo! É O VERDADEIRO MONSTRO! 📈';
  }
  else if (lowerQuery.includes('yekindar se adaptou') || lowerQuery.includes('adaptação do yekindar') || lowerQuery.includes('como o yekindar')) {
    return 'O yekindar se adaptou MUITO BEM! Os caras já estão se comunicando melhor que nunca, e ele já pegou o jeito brasileiro de jogar! 🇱🇻🤝🇧🇷 Aliás, ele já tá até tomando açaí e aprendendo a dançar pagode! 😂';
  }
  else if (lowerQuery.includes('molodoy') || lowerQuery.includes('sobre o molodoy') || lowerQuery.includes('me fale sobre o molodoy')) {
    return 'O molodoy é PURO TALENTO! O garoto veio da Europa e já mostrou que não é brincadeira! 💪 Tem uma mira mecânica perfeita e reflexos absurdos! Com o FalleN dando call, ele só vai melhorar cada vez mais! 🚀';
  }
  else if (lowerQuery.includes('influência do fallen') || lowerQuery.includes('qual a influência')) {
    return 'A influência do FalleN é GIGANTE! O cara trouxe toda a experiência de bicampeão mundial e tá passando conhecimento pros jovens. A liderança dele muda completamente o jogo da FURIA! 📈 Desde as táticas até a confiança do time, tudo melhorou com a chegada dele! 🧠';
  }
  else if (lowerQuery.includes('como o fallen chegou') || lowerQuery.includes('chegou na furia')) {
    return 'O FalleN chegou na FURIA em janeiro de 2024! Foi um projeto ambicioso depois de anos jogando na América do Norte. Ele decidiu voltar pro cenário brasileiro e trazer toda a experiência para essa nova fase da equipe. A chegada dele foi um game changer! 🚀';
  }
  else if (lowerQuery.includes('quais são as chances de vitória') || lowerQuery.includes('chance de ganhar')) {
    return 'Nossa equipe tá forte, mas o BLAST Premier Spring Final vai ser MUITO disputado! 😎 A FURIA precisa de foco total, mas com o esquadrão encaixando cada vez mais, as chances são boas! #VamosFURIA 💪';
  }
  else if (lowerQuery.includes('último confronto') || lowerQuery.includes('enfrentaram')) {
    return 'Nos últimos jogos, a FURIA mostrou um CS de alto nível! O KSCERATO e o yuurih têm sido fundamentais, e o FalleN tá liderando muito bem com suas estratégias e experiência! 🔥';
  }
  else if (lowerQuery.includes('quais torneios') || lowerQuery.includes('torneios depois')) {
    return 'Depois do BLAST Premier Spring Final, a FURIA vai se preparar pro ESL Challenger em Melbourne e depois pro Major RMR! 🌎 Calendário lotado de torneios importantes! Muito CS de alto nível vindo aí!';
  }
  else if (lowerQuery.includes('como chegar ao top 1') || lowerQuery.includes('chegar ao primeiro lugar')) {
    return 'Pra chegar ao Top 1, a FURIA precisa manter a consistência e seguir evoluindo como time! 🔝 Com o lineup atual cada vez mais entrosado e o guerri trabalhando forte, logo podemos chegar lá! A mentalidade é de campeão! 👑';
  }
  else if (lowerQuery.includes('quem está acima') || lowerQuery.includes('times acima')) {
    return 'Atualmente, times como Vitality, FaZe, NAVI, G2, Team Spirit, Complexity e Monte estão na frente no ranking, mas isso tá sempre mudando! 🔄 A FURIA tem tudo pra subir nas próximas semanas com bons resultados! 📈';
  }
  else if (lowerQuery.includes('times são rivais') || lowerQuery.includes('maior rival')) {
    return 'No cenário nacional, a Imperial e a MIBR são rivais tradicionais da FURIA! 🇧🇷 Já internacionalmente, sempre temos jogos disputados contra NAVI, Liquid e times europeus top! A rivalidade com times brasileiros sempre tem aquela energia especial! 💙';
  }
  else if (lowerQuery.includes('estatísticas dele') || lowerQuery.includes('stats do kscerato')) {
    return 'KSCERATO tá com média de rating alta, muitos headshots e é um dos melhores riflers do Brasil! 📊 É MUITA PRECISÃO! O maluco é uma MÁQUINA! Estatisticamente, ele é um dos jogadores mais consistentes da América Latina! 🌟';
  }
  else if (lowerQuery.includes('ganhou algum mvp') || lowerQuery.includes('mvp do kscerato')) {
    return 'KSCERATO já ganhou MVP em vários torneios! O cara sempre está entre os melhores jogadores dos campeonatos! 🏆 É um dos grandes talentos do CS brasileiro, sem dúvida! 🔥';
  }
  else if (lowerQuery.includes('função dele no time') || lowerQuery.includes('papel do kscerato')) {
    return 'KSCERATO é o rifler estrela do time, o cara que segura o bomb site sozinho! 💣 Ele também é o clutcher, que sempre resolve quando tá todo mundo morto. A calma e precisão dele em 1v3 é algo de outro mundo! 🧠';
  }
  else if (lowerQuery.includes('pior mapa') || lowerQuery.includes('mapa fraco')) {
    return 'Ancient é um dos mapas mais desafiadores para a FURIA. Mas eles já estão treinando pra melhorar! A dedicação do time é incrível, estão sempre buscando evoluir em todos os mapas! 💯';
  }
  else if (lowerQuery.includes('quantos mapas') || lowerQuery.includes('pool de mapas')) {
    return 'O pool atual do CS2 tem 7 mapas: Mirage, Inferno, Nuke, Overpass, Ancient, Anubis e Vertigo. A FURIA pratica todos, mas tem preferência por Mirage, Nuke e Inferno! 🗺️';
  }
  else if (lowerQuery.includes('treinam todos') || lowerQuery.includes('treino de mapas')) {
    return 'SIM! A FURIA tem bootcamp todos os dias, muitas horas de treino PESADO! 💪 O guerri faz questão que o time esteja preparado pra qualquer mapa. É profissionalismo total! Eles analisam cada detalhe dos demos! 🎮';
  }
  else if (lowerQuery.includes('quanto tempo ele treina') || lowerQuery.includes('guerri treina')) {
    return 'guerri tá com a FURIA desde o início! Já são mais de 5 ANOS como coach! 📅 Ele é praticamente a alma do time, conhece cada jogador melhor que ninguém! O cara é a mente por trás de todo o sucesso! 🧠';
  }
  else if (lowerQuery.includes('filosofia de jogo') || lowerQuery.includes('filosofia do guerri')) {
    return 'A filosofia do guerri é CS AGRESSIVO! Pressão constante, timing perfeito e muita adaptação! 🔄 Ele desenvolveu um estilo único que o mundo todo respeita. A abordagem tática dele é diferenciada! 💡';
  }
  else if (lowerQuery.includes('ele já foi jogador') || lowerQuery.includes('guerri jogador')) {
    return 'SIM! guerri jogou CS 1.6 profissionalmente! 👴 Ele competiu em vários times brasileiros antes de virar coach. Essa experiência como jogador ajudou ele a entender melhor como desenvolver talentos! Mestre demais! 🧙‍♂️';
  }
  else if (lowerQuery.includes('próximo torneio') || lowerQuery.includes('próxima competição')) {
    return `O próximo grande evento da FURIA é o ${currentTeamStats.nextMatch}! 🔥 Depois vêm vários outros torneios importantes! A agenda tá LOTADA de competições Tier 1! É FURIA jogando contra os melhores do mundo direto! 🌎`;
  }
  else if (lowerQuery.includes('como começou') || lowerQuery.includes('início da furia')) {
    return 'A FURIA surgiu em 2017, fundada pelo Jaime "raizen" Pádua e cresceu rapidamente! No começo era um projeto pequeno, mas logo se tornou potência! 🚀 Hoje é uma das maiores orgs de esports do Brasil e representa muito bem o país no cenário internacional! 💙';
  }
  else if (lowerQuery.includes('rank') || lowerQuery.includes('posição') || lowerQuery.includes('mundial')) {
    return `FURIA tá no TOP ${currentTeamStats.worldRanking} MUNDIAL, mano! No ranking atual do HLTV, nosso esquadrão tá subindo cada vez mais! 🚀 Com muito trabalho, logo logo estaremos no TOP 5 novamente!`;
  }
  else if (lowerQuery.includes('torneio') || lowerQuery.includes('campeonato') || lowerQuery.includes('competição')) {
    return 'Nossa agenda tá cheia de campeonatos Tier 1! O time tá se preparando pro BLAST Premier Spring Final! 📅 Depois vem mais torneios importantes, tamo com a agenda lotada!';
  }
  else if (lowerQuery.includes('histórico') || lowerQuery.includes('últimos jogos') || lowerQuery.includes('resultado')) {
    return `Nos últimos ${currentTeamStats.recentWins + currentTeamStats.recentLosses} jogos tivemos ${currentTeamStats.recentWins} vitórias e ${currentTeamStats.recentLosses} derrotas! O time tá se ajustando mas tá mostrando um CS muito bom! 🔥 Cada dia a equipe tá mais entrosada e mais forte!`;
  }
  else if (lowerQuery.includes('melhor jogador') || lowerQuery.includes('destaque') || lowerQuery.includes('mvp') || lowerQuery.includes('quem é o melhor')) {
    return 'KSCERATO continua sendo o MONSTRO do time! O cara tá jogando muito! A precisão dele é absurda, não perde duel, não erra spray, é um alien! 👽 Mas o yuurih também tá destruindo demais nos últimos jogos!';
  }
  else if (lowerQuery.includes('mapa') || lowerQuery.includes('mapas')) {
    return 'Nuke e Mirage são as praias da FURIA! Quando os cara pegam esses mapas é GG já, nem precisa jogar! 😎';
  }
  else if (lowerQuery.includes('treinador') || lowerQuery.includes('coach')) {
    return 'guerri é o cérebro por trás do caos! O cara é um gênio tático, sempre bolando as estratégias mais loucas! 🧠';
  }
  else if (lowerQuery.includes('olá') || lowerQuery.includes('oi') || lowerQuery.includes('e aí')) {
    return 'E aí, blz? Que massa ter você aqui na comunidade FURIA! O que você quer saber sobre nosso esquadrão? Tô ligado em tudo! 🔥';
  }
  else {
    return 'Tô aqui pra trocar ideia sobre a FURIA! Me pergunta sobre jogos, lineup, ranking, torneios... Qualquer parada do time que eu tô sabendo! 👊';
  }
}