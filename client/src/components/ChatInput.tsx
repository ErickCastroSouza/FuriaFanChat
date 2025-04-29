import React, { useState, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Layers } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };
  
  return (
    <div className="p-4 border-t border-[hsl(var(--furia-light))]">
      <form onSubmit={handleSubmit} className="flex">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Digite aqui"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-[hsl(var(--furia-gray))] border border-[hsl(var(--furia-light))] focus:border-[hsl(var(--furia-blue))] rounded-l-md py-6 px-4 focus:outline-none font-inter"
          />
        </div>
        <Button
          type="submit"
          disabled={!message.trim()}
          className="bg-[hsl(var(--furia-blue))] px-4 rounded-r-md flex items-center justify-center hover:bg-[hsl(var(--furia-yellow))] bg-opacity-90 transition-colors  disabled:opacity-50 disabled:cursor-not-allowed rounded-l-none"
        >
          <Layers className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
