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
        "Quem são os jogadores?",
        "Quando é o próximo jogo?",
        "Qual o ranking da FURIA?"
      ];
    }

    const content = lastMessageContent.toLowerCase();
    
    if (content.includes("line-up") || content.includes("lineup") || content.includes("jogadores") || content.includes("esquadrão")) {
      return [
        "Quem é o melhor jogador?",
        "Qual a função do HEN1 no time?",
        "Como o exit se adaptou ao time?"
      ];
    } 
    else if (content.includes("próximo jogo") || content.includes("navi") || content.includes("partida")) {
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
    else if (content.includes("kscerato") || content.includes("jogador") || content.includes("melhor")) {
      return [
        "Quais são as estatísticas dele?",
        "Ele já ganhou algum MVP?",
        "Qual a função dele no time?"
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
        "Quem é a maior rival da FURIA?",
        "Como começou a FURIA CS?"
      ];
    }
  };

  const suggestedQuestions = getSuggestedQuestions();

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {suggestedQuestions.map((question, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          className="text-sm px-3 py-1 border-[hsl(var(--furia-teal))] text-[hsl(var(--furia-teal))] hover:bg-[hsl(var(--furia-teal))] hover:text-white transition-colors suggested-question"
          onClick={() => onSelectQuestion(question)}
        >
          {question}
        </Button>
      ))}
    </div>
  );
}