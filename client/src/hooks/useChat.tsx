import { useState, useCallback, useEffect } from "react";
import { Message } from "@/types";
import { initialMessages, getBotResponse, getCurrentTime } from "@/lib/chatbot";
import { v4 as uuidv4 } from "uuid";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [lastBotMessage, setLastBotMessage] = useState<string>(initialMessages[0].text);

  // Send a message and get a response
  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    // Add user message to chat
    const userMessage: Message = {
      id: uuidv4(),
      text,
      sender: "user",
      time: getCurrentTime(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      
      const botMessage: Message = {
        id: uuidv4(),
        text: botResponse,
        sender: "bot",
        time: getCurrentTime(),
      };
      
      setIsTyping(false);
      setLastBotMessage(botResponse);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1500);
  }, []);

  return {
    messages,
    isTyping,
    sendMessage,
    lastBotMessage
  };
}
