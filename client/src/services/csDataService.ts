import { Player, TeamStats, TeamData } from '@/types';
import FalleN from "../assets/players/FalleN.webp";
import KSCERATO from "../assets/players/KSCERATO.webp";
import molodoy from "../assets/players/molodoy.webp";
import skullz from "../assets/players/skullz.webp";
import YEKINDAR from "../assets/players/YEKINDAR.webp";
import yuriih from "../assets/players/yuurih.webp";
import chelo from "../assets/players/chelo.webp";

// Dados atualizados dos jogadores da FURIA CS2 (abril de 2025)
export const currentPlayers: Player[] = [
  {
    id: "1",
    name: "yuurih",
    realName: "Yuri Santos",
    role: "Rifler",
    image: yuriih,
  },
  {
    id: "2",
    name: "KSCERATO",
    realName: "Kaike Cerato",
    role: "Rifler",
    image: KSCERATO,
  },
  {
    id: "3",
    name: "molodoy",
    realName: "David Bermudez",
    role: "Rifler",
    image: molodoy,
  },
  {
    id: "4",
    name: "yekindar",
    realName: "Mareks Gaļinskis",
    role: "Rifler",
    image: YEKINDAR,
  },
  {
    id: "5",
    name: "FalleN",
    realName: "Gabriel Toledo",
    role: "AWPer/IGL",
    image: FalleN,
  },
  {
    id: "6",
    name: "skullz",
    realName: "Felipe Medeiros",
    role: "Reserva/AWPer",
    image: skullz,
  },
  {
    id: "7",
    name: "chelo",
    realName: "Marcelo Cespedes",
    role: "Reserva/Rifler",
    image: chelo,
  },
];

// Estatísticas atualizadas do time
export const currentTeamStats: TeamStats = {
  worldRanking: 16,
  recentWins: 6,
  recentLosses: 4,
  nextMatch: "Não há partidas agendadas",
  nextTournament: "PGL Astana 2025",
};

// Informações do time
export const currentTeamData: TeamData = {
  name: "FURIA Esports",
  description: "FURIA Esports é uma organização brasileira de esports fundada em 2017, conhecida principalmente por sua equipe de Counter-Strike 2 (CS2), que conquistou bastante destaque internacional e representa o Brasil em competições de alto nível.",
  coach: "Nicholas \"guerri\" Nogueira",
};

// Função para obter uma resposta contextualizada com base na pergunta
type FuriaResponse = {
  keyword: string | string[];
  response: string;
};

const responses: FuriaResponse[] = [
  {
    keyword: ["Onde assistir os Jogos da FURIA?", 'onde assistir', 'onde ver', 'twitch' ],
    response: `E aí, minha fera! As partidas da FURIA são transmitidas em várias plataformas, como Twitch, YouTube e até mesmo na TV, dependendo do evento. Para não perder nenhum lance, fique de olho nas redes sociais da FURIA, onde sempre divulgamos onde e quando as partidas serão transmitidas. Aqui estão os links:\n\n• Twitch: https://www.twitch.tv/furiagg \n\n• YouTube: https://www.youtube.com/furiagg \n\n• Twitter: https://twitter.com/furiagg Vamos juntos torcer pela FURIA!`
  },
  {
    keyword: "Quando é o próximo jogo?",
    response: `A FURIA vai jogar o ${currentTeamStats.nextMatch}! Vai ser um torneio insano com os melhores times do mundo! Vai rolar muita bagaceira, vamo que vamo! 🔥`
  },
  {
    keyword: "Qual o ranking da FURIA?",
    response:`FURIA tá no TOP ${currentTeamStats.worldRanking} MUNDIAL, mano! No ranking atual do HLTV, nosso esquadrão tá subindo cada vez mais! 🚀 Com muito trabalho, logo logo estaremos no TOP 5 novamente!`
  },
  {
    keyword: "Como o FalleN chegou na FURIA?",
    response: 'O FalleN chegou na FURIA em julho de 2023! Ele voltou pro Brasil depois de anos jogando na América do Norte e trouxe toda a experiência de bicampeão mundial! 🏆🏆 O homem veio pra levar a FURIA ao topo, sendo AWPer e IGL ao mesmo tempo! É O VERDADEIRO MONSTRO! 📈'
  },
  {
    keyword: "Como o yekindar se adaptou ao time?",
    response: 'O yekindar se adaptou MUITO BEM! Os caras já estão se comunicando melhor que nunca, e ele já pegou o jeito brasileiro de jogar! 🇱🇻🤝🇧🇷 Aliás, ele já tá até tomando açaí e aprendendo a dançar pagode! 😂'
  },
  {
    keyword: "Quais são as chances de vitória?",
    response: 'A FURIA precisa de foco total, mas com o esquadrão encaixando cada vez mais, as chances são boas! #VamosFURIA 💪'
  },
  {
    keyword: ["Qual foi o último confronto?", 'ultimo jogo', 'ultimo', 'último', 'último confronto', 'ultimo confronto'],
    response: 'O último confronto da nossa equipe ocorreu em 3 de fevereiro de 2025, durante a IEM Katowice 2025, contra a Astralis. A partida foi uma melhor de três mapas (MD3), e infelizmente fomos derrotados por 2 a 1, resultando na eliminação da equipe brasileira do torneio. 😔 Mas já estamos nos recuperando e treinando muito para a próxima batalha!!'
  },
  {
    keyword: "Quais torneios vêm depois?",
    response: 'Ainda não temos informações dos próximos torneios que iremos participar, mas fique de olho nas nossas redes sociais :D'
  },
  {
    keyword: "Como chegar ao Top 1?",
    response: 'Pra chegar ao Top 1, a FURIA precisa manter a consistência e seguir evoluindo como time! 🔝 Com o lineup atual cada vez mais entrosado e o guerri trabalhando forte, logo podemos chegar lá! A mentalidade é de campeão! 👑'
  },
  {
    keyword: "Quais times são rivais?",
    response: 'No cenário nacional, a Imperial e a MIBR são rivais tradicionais da FURIA! 🇧🇷 Já internacionalmente, sempre temos jogos disputados contra NAVI, Liquid e times europeus top! A rivalidade com times brasileiros sempre tem aquela energia especial! 💙'
  },
  {
    keyword: "Quais são as estatísticas dele?",
    response: 'KSCERATO tá com média de rating alta, muitos headshots e é um dos melhores riflers do Brasil! 📊 É MUITA PRECISÃO! O maluco é uma MÁQUINA! Estatisticamente, ele é um dos jogadores mais consistentes da América Latina! 🌟'
  },
  {
    keyword: "Qual a influência do FalleN?",
    response: 'A influência do FalleN é GIGANTE! O cara trouxe toda a experiência de bicampeão mundial e tá passando conhecimento pros jovens. A liderança dele muda completamente o jogo da FURIA! 📈 Desde as táticas até a confiança do time, tudo melhorou com a chegada dele! 🧠'
  },
  {
    keyword: "Me fale sobre o molodoy",
    response: 'O molodoy é PURO TALENTO! O garoto veio da Europa e já mostrou que não é brincadeira! 💪 Tem uma mira mecânica perfeita e reflexos absurdos! Com o FalleN dando call, ele só vai melhorar cada vez mais! 🚀'
  },
  {
    keyword: "Quantos mapas tem no pool?",
    response: 'O pool atual do CS2 tem 7 mapas: Mirage, Inferno, Nuke, Overpass, Ancient, Anubis e Vertigo. A FURIA pratica todos, mas tem preferência por Mirage, Nuke e Inferno! 🗺️'
  },
  {
    keyword: "Eles treinam todos os mapas?",
    response: 'SIM! A FURIA tem bootcamp todos os dias, muitas horas de treino PESADO! 💪 O guerri faz questão que o time esteja preparado pra qualquer mapa. É profissionalismo total! Eles analisam cada detalhe dos demos! 🎮'
  },
  {
    keyword: "Há quanto tempo ele treina o time?",
    response: 'guerri tá com a FURIA desde o início! Já são mais de 5 ANOS como coach! 📅 Ele é praticamente a alma do time, conhece cada jogador melhor que ninguém! O cara é a mente por trás de todo o sucesso! 🧠'
  },
  {
    keyword: "Qual a filosofia de jogo do guerri?",
    response: 'A filosofia do guerri é CS AGRESSIVO! Pressão constante, timing perfeito e muita adaptação! 🔄 Ele desenvolveu um estilo único que o mundo todo respeita. A abordagem tática dele é diferenciada! 💡'
  },
  {
    keyword: "Ele já foi jogador?",
    response: 'SIM! guerri jogou CS 1.6 profissionalmente! 👴 Ele competiu em vários times brasileiros antes de virar coach. Essa experiência como jogador ajudou ele a entender melhor como desenvolver talentos! Mestre demais! 🧙‍♂️'
  },
  {
    keyword: "Qual o próximo torneio?",
    response: `O próximo grande evento da FURIA é o ${currentTeamStats.nextTournament}! 🔥 Depois vêm vários outros torneios importantes! A agenda tá LOTADA de competições Tier 1! É FURIA jogando contra os melhores do mundo direto! 🌎`
  },
  {
    keyword: ['próximo torneio', 'proxima torneio', 'torneio','próxima competição', 'proxima competição', 'competição', 'competição', 'proxima competiçao', 'campeonato', 'próximo campeonato', 'proximo campeonato'],
    response: `A FURIA vai jogar o ${currentTeamStats.nextTournament}! Vai ser um torneio insano com os melhores times do mundo! 🔥`
  },
  {
    keyword: ['jogadores', 'linha', 'lineup', 'time', "Quem são os jogadores?"],
    response: 'Nosso esquadrão tá MONSTRO:\n\n• FalleN: O Godfather do CS brasileiro, nosso IGL! 👑\n• yuurih: Monstro do rifle, o cara não erra! 💯\n• KSCERATO: A máquina de headshots! 🤯\n• molodoy: O jovem prodígio com reflexos insanos! ⚡\n• yekindar: A estrela internacional que chegou destruindo! 💣\n\nTemos ainda o skullz e o chelo como reservas! Time STACKED! 🔥'
  },
  {
    keyword: ['função do fallen', 'papel do fallen', 'função do FalleN', 'Qual a função do FalleN no time?'],
    response: 'O FalleN chegou na FURIA em julho de 2023! Ele voltou pro Brasil depois de anos jogando na América do Norte e trouxe toda a experiência de bicampeão mundial! 🏆🏆 O homem veio pra levar a FURIA ao topo, sendo IGL! É O VERDADEIRO MONSTRO! 📈'
  },
  {
    keyword: ['yekindar se adaptou', 'adaptação do yekindar', 'como o yekindar', 'yekindar'],
    response: 'O yekindar se adaptou MUITO BEM! Os caras já estão se comunicando melhor que nunca, e ele já pegou o jeito brasileiro de jogar! 🇱🇻🤝🇧🇷 Aliás, ele já tá até tomando açaí e aprendendo a dançar pagode! 😂'
  },
  {
    keyword: ['molodoy', 'sobre o molodoy', 'me fale sobre o molodoy'],
    response: 'O molodoy é PURO TALENTO! O garoto veio da Europa e já mostrou que não é brincadeira! 💪 Tem uma mira mecânica perfeita e reflexos absurdos! Com o FalleN dando call, ele só vai melhorar cada vez mais! 🚀'
  },
  {
    keyword: ['influência do fallen', 'influencia do fallen'],
    response: 'A influência do FalleN é GIGANTE! O cara trouxe toda a experiência de bicampeão mundial e tá passando conhecimento pros jovens. A liderança dele muda completamente o jogo da FURIA! 📈 Desde as táticas até a confiança do time, tudo melhorou com a chegada dele! 🧠'
  },
  {
    keyword: ['quais são as chances de vitória', 'chance de ganhar'],
    response: `Nossa equipe tá forte, mas o ${currentTeamStats.nextTournament}! vai ser MUITO disputado! 😎 A FURIA precisa de foco total, mas com o esquadrão encaixando cada vez mais, as chances são boas! #VamosFURIA 💪`
  },
  {
    keyword: ['como chegar ao top 1', 'chegar ao primeiro lugar'],
    response: 'Pra chegar ao Top 1, a FURIA precisa manter a consistência e seguir evoluindo como time! 🔝 Com o lineup atual cada vez mais entrosado e o guerri trabalhando forte, logo podemos chegar lá! A mentalidade é de campeão! 👑'
  },
  {
    keyword: ['times são rivais', 'maior rival'],
    response: 'No cenário nacional, a Imperial e a MIBR são rivais tradicionais da FURIA! 🇧🇷 Já internacionalmente, sempre temos jogos disputados contra NAVI, Liquid e times europeus top! A rivalidade com times brasileiros sempre tem aquela energia especial! 💙'
  },
  {
    keyword: ['estatísticas dele', 'stats do kscerato'],
    response: 'KSCERATO tá com média de rating alta, muitos headshots e é um dos melhores riflers do Brasil! 📊 É MUITA PRECISÃO! O maluco é uma MÁQUINA! Estatisticamente, ele é um dos jogadores mais consistentes da América Latina! 🌟'
  },
  {
    keyword: ['papel do kscerato', 'kscerato'],
    response: 'KSCERATO é o rifler estrela do time, o cara que segura o bomb site sozinho! 💣 Ele também é o clutcher, que sempre resolve quando tá todo mundo morto. A calma e precisão dele em 1v3 é algo de outro mundo! 🧠'
  },
  {
    keyword: ['quantos mapas', 'pool de mapas'],
    response: 'O pool atual do CS2 tem 7 mapas: Mirage, Inferno, Nuke, Overpass, Ancient, Anubis e Vertigo. A FURIA pratica todos, mas tem preferência por Mirage, Nuke e Inferno! 🗺️'
  },
  {
    keyword: ['quanto tempo ele treina', 'guerri treina'],
    response: 'guerri tá com a FURIA desde o início! Já são mais de 5 ANOS como coach! 📅 Ele é praticamente a alma do time, conhece cada jogador melhor que ninguém! O cara é a mente por trás de todo o sucesso! 🧠'
  },
  {
    keyword: ['filosofia de jogo', 'filosofia do guerri'],
    response: 'A filosofia do guerri é CS AGRESSIVO! Pressão constante, timing perfeito e muita adaptação! 🔄 Ele desenvolveu um estilo único que o mundo todo respeita. A abordagem tática dele é diferenciada! 💡'
  },
  {
    keyword: ['ele já foi jogador', 'guerri jogador'],
    response: 'SIM! guerri jogou CS 1.6 profissionalmente! 👴 Ele competiu em vários times brasileiros antes de virar coach. Essa experiência como jogador ajudou ele a entender melhor como desenvolver talentos! Mestre demais! 🧙‍♂️'
  },
  {
    keyword: ['como começou', 'início da furia', 'historia', 'história', 'Qual é a história da FURIA?'],
    response: 'A FURIA surgiu em 2017, fundada pelo Jaime "raizen" Pádua e cresceu rapidamente! No começo era um projeto pequeno, mas logo se tornou potência! 🚀 Hoje é uma das maiores orgs de esports do Brasil e representa muito bem o país no cenário internacional! 💙'
  },
  {
    keyword: ['rank', 'posição', 'mundial'],
    response: `FURIA tá no TOP ${currentTeamStats.worldRanking} MUNDIAL, mano! No ranking atual do HLTV, nosso esquadrão tá subindo cada vez mais! 🚀 Com muito trabalho, logo logo estaremos no TOP 5 novamente!`
  },
  {
    keyword: ['histórico'],
    response: `Nos últimos ${currentTeamStats.recentWins + currentTeamStats.recentLosses} jogos tivemos ${currentTeamStats.recentWins} vitórias e ${currentTeamStats.recentLosses} derrotas! O time tá se ajustando mas tá mostrando um CS muito bom! 🔥 Cada dia a equipe tá mais entrosada e mais forte!`
  },
  {
    keyword: ['mapa', 'mapas'],
    response: 'Nuke e Mirage são as praias da FURIA! Quando os cara pegam esses mapas é GG já, nem precisa jogar! 😎'
  },
  {
    keyword: ['treinador', 'coach'],
    response: 'guerri é o cérebro por trás do caos! O cara é um gênio tático, sempre bolando as estratégias mais loucas! 🧠'
  },
  {
    keyword: ['olá', 'oi', 'e aí'],
    response: 'E aí, blz? Que massa ter você aqui na comunidade FURIA! O que você quer saber sobre nosso esquadrão? Tô ligado em tudo! 🔥'
  },
  {
    keyword: '*', // padrão de fallback para qualquer outra pergunta
    response: 'Tô aqui pra trocar ideia sobre a FURIA! Me pergunta sobre jogos, lineup, ranking, torneios... Qualquer parada do time que eu tô sabendo! 👊'
  },
];

var nextGame = false

// Função para pegar a resposta correspondente
export function getFuriaResponse(query: string): string {

  const nextGameList = ["quando é o próximo jogo?", 'próximo jogo', 'próxima partida', 'proxima partida', 'proximo jogo'];
  const lowerQuery = query.toLowerCase();
  
  const containsNextGameQuery = nextGameList.some(term => lowerQuery.includes(term));
  
  if (containsNextGameQuery && nextGame == false) {
    return "No momento estamos em período de treinos e preparação! ⚔️ O time está aproveitando esse tempo para aprimorar as táticas e fortalecer ainda mais o entrosamento! Em breve teremos novidades sobre os próximos campeonatos! 💪";
  }

  for (const { keyword, response } of responses) {
    if (Array.isArray(keyword)) {
     if (keyword.some(k => lowerQuery.includes(k))) {
        return response;
      }
      
    } else if (lowerQuery.includes(keyword)) {
      return response;
    }
  };



  return 'Desculpe, não entendi a pergunta. 😅';
}
