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
    return 'Nosso esquadrão tá MONSTRO:\n\n• arT: O capitão louco que não tem medo de nada! 🔫\n• yuurih: Monstro do rifle, o cara não erra! 💯\n• KSCERATO: A máquina de headshots! 🤯\n• drop: O jovem que já chegou destruindo tudo! 💥\n• HEN1: O AWPer lendário que voltou pra casa! 🎯\n\nKSCERATO e yuurih são simplesmente absurdos, todo mundo sabe que são fera demais!';
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
