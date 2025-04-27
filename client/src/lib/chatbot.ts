import { Message } from "@/types";

// Returns the current time in HH:MM format
export function getCurrentTime(): string {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

// Bot responses based on message content
export function getBotResponse(message: string){}
  

// Default initial messages
export const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Fala aí! Bem-vindo ao chat da FURIA CS! 🔥 Tô aqui pra trocar ideia sobre nosso esquadrão - jogadores, próximas partidas, estatísticas e qualquer parada sobre a melhor equipe do Brasil! O que você quer saber hoje? #VamosFURIA 💙',
    sender: 'bot',
    time: getCurrentTime()
  }
];
