import React from "react";
import { Button } from "./ui/button";

interface SuggestedQuestionsProps {
  onSelectQuestion: (question: string) => void;
  lastMessageType: "bot" | "user";
  lastMessageContent?: string;
}

export default function SuggestedQuestions({
  onSelectQuestion,
  lastMessageType,
  lastMessageContent
}: SuggestedQuestionsProps) {
  if (lastMessageType === "user") {
    return null; // Não mostrar sugestões quando o último mensageiro foi o usuário
  }

  // Definir sugestões com base no conteúdo da última mensagem do bot
  const getSuggestedQuestions = (): string[] => {
    if (!lastMessageContent) {
      // Perguntas iniciais
      return [
        "Qual é a história da FURIA?",
        "Quando é o próximo jogo?",
        "Onde assistir os jogos da Fúria?"
      ];
    }

    const content = lastMessageContent.toLowerCase();
    
    if (content.includes("line-up") || content.includes("lineup") || content.includes("jogadores") || content.includes("esquadrão")) {
      return [
        "Qual é a história da FURIA?",
        "Quando é o próximo jogo?",
        "Onde assistir os jogos da FURIA?"
      ];
    } 
    else if (content.includes("próximo jogo") || content.includes("navi") || content.includes("partida") || (content.includes("proximo jogo") || content.includes("torneio"))) {
      return [
        "Quais são as chances de vitória?",
        "Qual foi o último confronto?",
        "Quais torneios vêm depois?"
      ];
    }
    else if (content.includes("ranking") || content.includes("posição") || content.includes("mundial")) {
      return [
        "Como chegar ao Top 1?",
        "Quem está acima da FURIA?",
        "Quais times são rivais?"
      ];
    }
    else if (content.includes("fallen") || content.includes("igl") || content.includes("liderança")) {
      return [
        "Como o FalleN chegou na FURIA?",
        "Qual a influência do FalleN?",
        "Qual a função do FalleN no time?"
      ];
    }
    else if (content.includes("mapa") || content.includes("nuke") || content.includes("mirage")) {
      return [
        "Qual o pior mapa da FURIA?",
        "Quantos mapas tem no pool?",
        "Eles treinam todos os mapas?"
      ];
    }
    else if (content.includes("treinador") || content.includes("guerri") || content.includes("técnico")) {
      return [
        "Há quanto tempo ele treina o time?",
        "Qual a filosofia de jogo do guerri?",
        "Ele já foi jogador?"
      ];
    }
    else {
      // Perguntas genéricas para qualquer outro contexto
      return [
        "Qual o próximo torneio?",
        "Onde assistir os Jogos da Fúria?",
        "Como começou a FURIA CS?"
      ];
    }
  };

  const suggestedQuestions = getSuggestedQuestions();

  return (
    <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
      {suggestedQuestions.map((question, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          className="text-[11px] sm:text-xs md:text-sm px-2 sm:px-3 py-0.5 sm:py-1 border-[hsl(var(--furia-blue))] text-[hsl(var(--furia-blue))] hover:bg-[hsl(var(--furia-blue))] hover:text-black transition-colors suggested-question min-h-[24px] sm:min-h-[28px] rounded-full"
          onClick={() => onSelectQuestion(question)}
        >
          {question}
        </Button>
      ))}
    </div>
  );
}