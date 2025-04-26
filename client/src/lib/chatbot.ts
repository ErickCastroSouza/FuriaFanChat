import { Message } from "@/types";

// Returns the current time in HH:MM format
export function getCurrentTime(): string {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

// Bot responses based on message content
export function getBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('próximo jogo') || lowerMessage.includes('próxima partida')) {
    return 'A FURIA vai jogar o BLAST Premier Spring Final em junho! Vai ser um torneio insano com os melhores times do mundo! 🔥';
  } 
  else if (lowerMessage.includes('jogadores') || lowerMessage.includes('linha') || lowerMessage.includes('lineup') || lowerMessage.includes('time')) {
    return 'Nosso esquadrão tá MONSTRO:\n\n• arT: O capitão louco que não tem medo de nada! 🔫\n• yuurih: Monstro do rifle, o cara não erra! 💯\n• KSCERATO: A máquina de headshots! 🤯\n• HEN1: O AWPer lendário que voltou pra casa! 🎯\n• exit: O jovem talento que chegou pra destruir! ⚡\n\nKSCERATO e yuurih são simplesmente absurdos, todo mundo sabe que são fera demais!';
  }
  else if (lowerMessage.includes('função do hen1') || lowerMessage.includes('papel do hen1')) {
    return 'O HEN1 é nosso AWPer principal e é monstro! 🎯 O cara voltou pra FURIA em 2023 depois de passar por outros times, e trouxe toda aquela precisão com a AWP que a gente conhece! Além de ser um sniper absurdo, ele também ajuda muito na estratégia do time! 📈';
  }
  else if (lowerMessage.includes('exit se adaptou') || lowerMessage.includes('adaptação do exit')) {
    return 'O exit chegou se encaixando MUITO BEM! O garoto tem um potencial absurdo, entry fragger com reflexo inacreditável! 💥 Ele já tá jogando com o time como se tivesse anos na FURIA. A química entre ele e os outros jogadores é muito boa! 🤝';
  }
  else if (lowerMessage.includes('quais são as chances de vitória') || lowerMessage.includes('chance de ganhar')) {
    return 'Nossa equipe tá forte, mas o BLAST Premier Spring Final vai ser MUITO disputado! 😎 A FURIA precisa de foco total, mas com o esquadrão encaixando cada vez mais, as chances são boas! #VamosFURIA 💪';
  }
  else if (lowerMessage.includes('último confronto') || lowerMessage.includes('enfrentaram')) {
    return 'Nos últimos jogos, a FURIA mostrou um CS de alto nível! O KSCERATO e o yuurih têm sido fundamentais, e o arT tá liderando muito bem com suas estratégias agressivas! 🔥';
  }
  else if (lowerMessage.includes('quais torneios') || lowerMessage.includes('torneios depois')) {
    return 'Depois do BLAST Premier Spring Final, a FURIA vai se preparar pro ESL Challenger em Melbourne e depois pro Major RMR! 🌎 Calendário lotado de torneios importantes! Muito CS de alto nível vindo aí!';
  }
  else if (lowerMessage.includes('como chegar ao top 1') || lowerMessage.includes('chegar ao primeiro lugar')) {
    return 'Pra chegar ao Top 1, a FURIA precisa manter a consistência e seguir evoluindo como time! 🔝 Com o lineup atual cada vez mais entrosado e o guerri trabalhando forte, logo podemos chegar lá! A mentalidade é de campeão! 👑';
  }
  else if (lowerMessage.includes('quem está acima') || lowerMessage.includes('times acima')) {
    return 'Atualmente, times como Vitality, FaZe, NAVI, G2, Team Spirit, Complexity e Monte estão na frente no ranking, mas isso tá sempre mudando! 🔄 A FURIA tem tudo pra subir nas próximas semanas com bons resultados! 📈';
  }
  else if (lowerMessage.includes('times são rivais') || lowerMessage.includes('maior rival')) {
    return 'No cenário nacional, a Imperial e a MIBR são rivais tradicionais da FURIA! 🇧🇷 Já internacionalmente, sempre temos jogos disputados contra NAVI, Liquid e times europeus top! A rivalidade com times brasileiros sempre tem aquela energia especial! 💙';
  }
  else if (lowerMessage.includes('estatísticas dele') || lowerMessage.includes('stats do kscerato')) {
    return 'KSCERATO tá com média de 1.23 de rating, 87.5 ADR e 70% de headshot! 📊 É MUITA PRECISÃO! O maluco é uma MÁQUINA! Os analistas dizem que ele é top 5 do mundo nos últimos meses! 🌟';
  }
  else if (lowerMessage.includes('ganhou algum mvp') || lowerMessage.includes('mvp do kscerato')) {
    return 'KSCERATO já ganhou MVP em 3 torneios! O último foi na ESL Pro League Season 17, onde ele destruiu TUDO! 🏆 Se ele continuar nesse ritmo, vai pegar muito mais MVPs até o final do ano! 🔥';
  }
  else if (lowerMessage.includes('função dele no time') || lowerMessage.includes('papel do kscerato')) {
    return 'KSCERATO é o rifler estrela do time, o cara que segura o bomb site sozinho! 💣 Ele também é o clutcher, que sempre resolve quando tá todo mundo morto. A calma e precisão dele em 1v3 é algo de outro mundo! 🧠';
  }
  else if (lowerMessage.includes('pior mapa') || lowerMessage.includes('mapa fraco')) {
    return 'Ancient é o mapa onde a FURIA tem mais dificuldade, com apenas 45% de winrate. Mas eles já tão treinando pra melhorar! Com o FalleN e o yekindar, até os mapas mais fracos vão virar pontos fortes! 💯';
  }
  else if (lowerMessage.includes('quantos mapas') || lowerMessage.includes('pool de mapas')) {
    return 'O pool atual do CS2 tem 7 mapas: Mirage, Inferno, Nuke, Overpass, Ancient, Anubis e Vertigo. A FURIA pratica todos, mas tem preferência por Mirage, Nuke e Inferno! 🗺️';
  }
  else if (lowerMessage.includes('treinam todos') || lowerMessage.includes('treino de mapas')) {
    return 'SIM! A FURIA tem bootcamp todos os dias, 8 horas de treino PESADO! 💪 O guerri faz questão que o time esteja preparado pra qualquer mapa. É profissionalismo total! Eles analisam cada detalhe dos demos! 🎮';
  }
  else if (lowerMessage.includes('quanto tempo ele treina') || lowerMessage.includes('guerri treina')) {
    return 'guerri tá com a FURIA desde o início! Já são mais de 5 ANOS como coach! 📅 Ele é praticamente a alma do time, conhece cada jogador melhor que ninguém! O cara é a mente por trás de todo o sucesso! 🧠';
  }
  else if (lowerMessage.includes('filosofia de jogo') || lowerMessage.includes('filosofia do guerri')) {
    return 'A filosofia do guerri é CS AGRESSIVO! Pressão constante, timing perfeito e muita adaptação! 🔄 Ele desenvolveu um estilo único que o mundo todo respeita. Agora com o FalleN, eles juntaram as mentes pra criar um sistema imbatível! 💡';
  }
  else if (lowerMessage.includes('ele já foi jogador') || lowerMessage.includes('guerri jogador')) {
    return 'SIM! guerri jogou CS 1.6 profissionalmente! 👴 Ele competiu em vários times brasileiros antes de virar coach. Essa experiência como jogador ajudou ele a entender melhor como desenvolver talentos! Mestre demais! 🧙‍♂️';
  }
  else if (lowerMessage.includes('próximo torneio') || lowerMessage.includes('próxima competição')) {
    return 'ESL Pro League Season 19 tá rolando AGORA! 🔥 Depois vem o BLAST Premier Fall Groups em agosto. A agenda tá LOTADA de torneios Tier 1! É FURIA jogando contra os melhores do mundo direto! 🌎';
  }
  else if (lowerMessage.includes('como começou') || lowerMessage.includes('início da furia')) {
    return 'A FURIA surgiu em 2017, fundada pelo Jaime "raizen" Pádua e Andrey "KSCERATO" Cinisello! No começo era um projeto pequeno, mas logo cresceu e se tornou potência! 🚀 Hoje é a maior org de esports do Brasil e tá dominando o CS mundial! 💙';
  }
  else if (lowerMessage.includes('rank') || lowerMessage.includes('posição') || lowerMessage.includes('mundial')) {
    return 'FURIA tá no TOP 8 MUNDIAL, mano! No ranking atual do HLTV, nosso esquadrão tá subindo cada vez mais! 🚀 Com muito trabalho, logo logo estaremos no TOP 5 novamente!';
  }
  else if (lowerMessage.includes('torneio') || lowerMessage.includes('campeonato') || lowerMessage.includes('competição')) {
    return 'Nossa agenda tá cheia de campeonatos Tier 1! Acabamos de participar da ESL Pro League e agora estamos nos preparando pro BLAST Premier Spring Final! 📅 Depois vem mais torneios importantes, tamo com a agenda lotada!';
  }
  else if (lowerMessage.includes('histórico') || lowerMessage.includes('últimos jogos') || lowerMessage.includes('resultado')) {
    return 'Nos últimos jogos tivemos 6 vitórias e 4 derrotas! O time tá se ajustando mas tá mostrando um CS muito bom! 🔥 Cada dia a equipe tá mais entrosada e mais forte!';
  }
  else if (lowerMessage.includes('melhor jogador') || lowerMessage.includes('destaque') || lowerMessage.includes('mvp')) {
    return 'KSCERATO continua sendo o MONSTRO do time! O cara tá jogando muito! A precisão dele é absurda, não perde duel, não erra spray, é um alien! 👽 Mas o yuurih também tá destruindo demais nos últimos jogos!';
  }
  else if (lowerMessage.includes('mapa') || lowerMessage.includes('mapas')) {
    return 'Nuke e Mirage são as praias da FURIA! 75% de winrate nesses mapas! Quando os cara pegam esses mapas é GG já, nem precisa jogar! 😎';
  }
  else if (lowerMessage.includes('treinador') || lowerMessage.includes('coach')) {
    return 'guerri é o cérebro por trás do caos! O cara é um gênio tático, sempre bolando as estratégias mais loucas! 🧠';
  }
  else if (lowerMessage.includes('olá') || lowerMessage.includes('oi') || lowerMessage.includes('e aí')) {
    return 'E aí, blz? Que massa ter você aqui na comunidade FURIA! O que você quer saber sobre nosso esquadrão? Tô ligado em tudo! 🔥';
  }
  else {
    return 'Tô aqui pra trocar ideia sobre a FURIA! Me pergunta sobre jogos, lineup, ranking, torneios... Qualquer parada do time que eu tô sabendo! 👊';
  }
}

// Default initial messages
export const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Fala aí! Bem-vindo ao chat da FURIA CS! 🔥 Tô aqui pra trocar ideia sobre nosso esquadrão - jogadores, próximas partidas, estatísticas e qualquer parada sobre a melhor equipe do Brasil! O que você quer saber hoje? #VamosFURIA 💙',
    sender: 'bot',
    time: getCurrentTime()
  }
];
