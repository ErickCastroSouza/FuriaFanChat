import React from "react";
import { Message } from "@/types";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { FaRobot, FaUser } from "react-icons/fa";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === "bot";
  
  return (
    <div className={`flex items-start ${isBot ? "" : "justify-end"} mb-4`}>
      {isBot && (
        <Avatar className="w-8 h-8 bg-[hsl(var(--furia-teal))] mr-3 flex-shrink-0">
          <AvatarFallback className="text-xs">
            <FaRobot />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className="max-w-[80%]">
        <div 
          className={`${
            isBot 
              ? "bg-[hsl(var(--furia-teal))] rounded-lg rounded-tl-none chat-bubble-bot" 
              : "bg-[hsl(var(--furia-blue))] rounded-lg rounded-tr-none chat-bubble-user"
          } p-3`}
        >
          <div className="font-inter whitespace-pre-wrap">{message.text}</div>
        </div>
        
        <span className={`text-xs text-[hsl(var(--text-dark))] mt-1 block ${
          isBot ? "" : "text-right"
        }`}>
          {message.time}
        </span>
      </div>
      
      {!isBot && (
        <Avatar className="w-8 h-8 bg-[hsl(var(--furia-light))] ml-3 flex-shrink-0">
          <AvatarFallback className="text-xs">
            <FaUser />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
