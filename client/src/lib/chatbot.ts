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
    return 'A FURIA enfrentará a NAVI no dia 14 de julho às 15:00 (horário de Brasília) pela ESL Pro League!';
  } 
  else if (lowerMessage.includes('jogadores') || lowerMessage.includes('linha') || lowerMessage.includes('lineup') || lowerMessage.includes('time')) {
    return 'A line-up atual da FURIA CS:GO é composta por:\n\n• Andrei "arT" Piovezan (Capitão/AWPer)\n• Yuri "yuurih" Santos (Rifler)\n• Kaike "KSCERATO" Cerato (Rifler)\n• André "chelo" Nascimento (Entry Fragger)\n• Rafael "saffee" Costa (AWPer)\n\nKSCERATO e yuurih são frequentemente considerados os destaques do time por sua consistência e habilidade mecânica excepcional!';
  }
  else if (lowerMessage.includes('rank') || lowerMessage.includes('posição') || lowerMessage.includes('mundial')) {
    return 'Atualmente, a FURIA ocupa a 5ª posição do ranking mundial de CS:GO, de acordo com o HLTV!';
  }
  else if (lowerMessage.includes('torneio') || lowerMessage.includes('campeonato') || lowerMessage.includes('competição')) {
    return 'A FURIA está participando da ESL Pro League Season 19 e se preparando para o BLAST Premier Fall Groups que acontecerá em agosto.';
  }
  else if (lowerMessage.includes('histórico') || lowerMessage.includes('últimos jogos') || lowerMessage.includes('resultado')) {
    return 'Nos últimos 10 jogos, a FURIA venceu 8 e perdeu apenas 2! O time está em excelente forma!';
  }
  else if (lowerMessage.includes('melhor jogador') || lowerMessage.includes('destaque') || lowerMessage.includes('mvp')) {
    return 'KSCERATO é considerado o melhor jogador da FURIA atualmente. Ele tem impressionado com suas habilidades de rifler e uma incrível precisão de tiro.';
  }
  else if (lowerMessage.includes('mapa') || lowerMessage.includes('mapas')) {
    return 'Os mapas favoritos da FURIA são Nuke e Mirage, onde a equipe tem mostrado um desempenho excepcional. Eles têm uma taxa de vitória de 75% nesses mapas!';
  }
  else if (lowerMessage.includes('treinador') || lowerMessage.includes('coach')) {
    return 'O treinador atual da FURIA é Nicholas "guerri" Nogueira, que tem sido fundamental para o desenvolvimento estratégico da equipe nos últimos anos.';
  }
  else if (lowerMessage.includes('olá') || lowerMessage.includes('oi') || lowerMessage.includes('e aí')) {
    return 'Olá! Que bom ter você aqui! Como posso ajudar com informações sobre a FURIA CS:GO?';
  }
  else {
    return 'Estou aqui para responder perguntas sobre a FURIA CS:GO! Você pode perguntar sobre próximos jogos, lineup atual, ranking mundial, torneios ou resultados recentes.';
  }
}

// Default initial messages
export const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Olá! Bem-vindo ao chat da FURIA CS:GO! Estou aqui para te fornecer informações sobre o time, jogadores, próximos jogos e tudo relacionado à FURIA no Counter-Strike. O que você gostaria de saber?',
    sender: 'bot',
    time: getCurrentTime()
  }
];
