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
    return 'Bora ver os caras destruir a NAVI dia 14 de julho, 15h (horário de Brasília) na ESL Pro League! Tá chegando! 🔥';
  } 
  else if (lowerMessage.includes('jogadores') || lowerMessage.includes('linha') || lowerMessage.includes('lineup') || lowerMessage.includes('time')) {
    return 'Nosso esquadrão tá MONSTRO:\n\n• FalleN: O Verdadeiro Final Boss do CS, capitão e AWPer! 🐐\n• KSCERATO: A máquina de headshots, nunca erra! 🤯\n• yuurih: Monstro do rifle, clutcher de elite! 💯\n• yekindar: Esse letão chegou destruindo tudo, entry absurdo! 💥\n• molodoy: O prodígio da nova geração! 🔥\n\nAinda temos skullz e chelo como substitutos prontos pra entrar e acabar com o game! A FURIA tá com um squad INSANO! 💪';
  }
  else if (lowerMessage.includes('quanto tempo o fallen') || lowerMessage.includes('fallen joga na furia')) {
    return 'O FalleN chegou na FURIA em janeiro de 2024! Ele voltou pro Brasil depois de anos jogando na América do Norte e trouxe toda a experiência de bicampeão mundial! 🏆🏆 O homem veio pra levar a FURIA ao topo! 📈';
  }
  else if (lowerMessage.includes('yekindar se adaptou') || lowerMessage.includes('adaptação do yekindar')) {
    return 'O yekindar se adaptou MUITO BEM! Os caras já estão se comunicando melhor que nunca, e ele já pegou o jeito brasileiro de jogar! 🇱🇻🤝🇧🇷 Aliás, ele já tá até tomando açaí e aprendendo a dançar pagode! 😂';
  }
  else if (lowerMessage.includes('quais são as chances de vitória') || lowerMessage.includes('chance de ganhar')) {
    return '100% DE CHANCE! 😎 A FURIA tá ON FIRE e a NAVI tá sofrendo com inconsistência! Com o FalleN liderando e o KSCERATO destruindo, nem tem como perder! #SóAcredita 💪';
  }
  else if (lowerMessage.includes('último confronto') || lowerMessage.includes('enfrentaram')) {
    return 'No último confronto contra a NAVI, a FURIA venceu por 2-0! Foi uma AULA de CS! O KSCERATO fechou com 27 frags só no primeiro mapa! Os caras da NAVI nem sabiam o que tava acontecendo! 🔥';
  }
  else if (lowerMessage.includes('quais torneios') || lowerMessage.includes('torneios depois')) {
    return 'Depois da ESL Pro League, a FURIA vai pro BLAST Premier Fall Groups em agosto e depois já vai se preparar pro Major do final do ano! 🌎 Calendário lotado, mano!';
  }
  else if (lowerMessage.includes('como chegar ao top 1') || lowerMessage.includes('chegar ao primeiro lugar')) {
    return 'Pra chegar ao Top 1, só precisa seguir DOMINANDO como estão agora! Com FalleN no comando, mais algumas semanas pra ajustar as estratégias, e logo a FURIA desbanca a Vitality e fica no topo! 👑';
  }
  else if (lowerMessage.includes('quem está acima') || lowerMessage.includes('times acima')) {
    return 'Acima da FURIA só tem Vitality, FaZe, NAVI e Heroic, mas isso não vai durar muito tempo! 😏 A gente já tá subindo e em breve vamos ultrapassar eles! Tô te falando, esse ano o Top 1 é nosso! 💙';
  }
  else if (lowerMessage.includes('times são rivais') || lowerMessage.includes('maior rival')) {
    return 'NAVI e a Imperial são as maiores rivais! Com a NAVI é sempre jogo de milhões, e contra a Imperial é a grande rivalidade brasileira! Os duelos contra o time do fer, fnx e VINI sempre são épicos! 🇧🇷';
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
    return 'FURIA tá TOP 5 MUNDIAL, mano! Isso mesmo, 5º lugar no ranking do HLTV! Subindo cada vez mais! 🚀';
  }
  else if (lowerMessage.includes('torneio') || lowerMessage.includes('campeonato') || lowerMessage.includes('competição')) {
    return 'Os caras tão na ESL Pro League Season 19 agora e já tão se preparando pro BLAST Premier Fall Groups em agosto. Agenda lotada de Tier 1! 📅';
  }
  else if (lowerMessage.includes('histórico') || lowerMessage.includes('últimos jogos') || lowerMessage.includes('resultado')) {
    return 'Últimos 10 jogos? 8 VITÓRIAS e só 2 derrotas! Os cara tão VOANDO! 🔥 Quem para a FURIA??';
  }
  else if (lowerMessage.includes('melhor jogador') || lowerMessage.includes('destaque') || lowerMessage.includes('mvp')) {
    return 'KSCERATO é o MONSTRO do time! O cara tá jogando muito! A precisão dele é absurda, não perde duel, não erra spray, é um alien! 👽';
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
