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
        <Avatar className="w-8 h-8 bg-[hsl(var(--furia-light-gray))] mr-3 flex-shrink-0">
          <AvatarFallback className="text-xs">
            <FaRobot />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className="max-w-[80%] sm:max-w-[75%] md:max-w-[70%]">
        <div 
          className={`${
            isBot 
              ? "bg-[hsl(var(--furia-light-gray))] border border-[hsl(var(--furia-blue))] rounded-lg rounded-tl-none chat-bubble-bot" 
              : "bg-[hsl(var(--furia-blue))] rounded-lg rounded-tr-none chat-bubble-user"
          } p-2 sm:p-3`}
        >
          <div className="font-inter whitespace-pre-wrap text-[13px] text-[hsl(var(--text-chat))] sm:text-base">{message.text}</div>
        </div>
        
        <span className={`text-[10px] sm:text-xs text-[hsl(var(--furia-chat))] mt-1 block ${
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