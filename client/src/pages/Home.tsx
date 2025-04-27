import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ChatInput from "@/components/ChatInput";
import ChatMessage from "@/components/ChatMessage";
import TeamInfo from "@/components/TeamInfo";
import SuggestedQuestions from "@/components/SuggestedQuestions";
import Footer from "@/components/Footer";
import { useChat } from "@/hooks/useChat";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  const { messages, isTyping, sendMessage, lastBotMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Handle clicking a suggested question
  const handleSelectQuestion = (question: string) => {
    sendMessage(question);
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="flex-grow overflow-auto">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Character and team info - Second on mobile, first on desktop */}
            <div className="w-full lg:w-2/5 xl:w-1/3 order-2 lg:order-1 h-[500px] sm:h-[550px] lg:h-auto mt-4 lg:mt-0 border-t border-[hsl(var(--furia-light))] lg:border-t-0">
              <div className="lg:hidden bg-[hsl(var(--furia-gray))] p-3 border-b border-[hsl(var(--furia-light))]">
                <h2 className="text-lg font-semibold text-center">
                  Informações sobre o time FURIA CS
                </h2>
              </div>
              <TeamInfo />
            </div>

            {/* Chat interface - First on mobile, second on desktop */}
            <div className="w-full lg:w-3/5 xl:w-2/3 flex flex-col bg-[hsl(var(--furia-dark))] order-1 lg:order-2 border-l lg:border-l border-[hsl(var(--furia-light))] h-[70vh] lg:h-[calc(100vh-120px)]">
              {/* Chat header */}
              <div className="bg-[hsl(var(--furia-gray))] p-3 sm:p-4 border-b border-[hsl(var(--furia-light))]">
                <h2 className="text-xl font-semibold">
                  Converse e tire suas dúvidas sobre o maior time de CS do
                  Brasil!
                </h2>
              </div>

              {/* Chat messages area */}
              <ScrollArea className="flex-grow p-4 scrollbar-hide">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChatMessage message={message} />
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-start mb-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-[hsl(var(--furia-teal))] flex items-center justify-center mr-3 flex-shrink-0">
                        <i className="fas fa-robot text-sm"></i>
                      </div>
                      <div className="max-w-[80%]">
                        <div className="bg-[hsl(var(--furia-teal))] rounded-lg rounded-tl-none p-3 py-4 chat-bubble-bot">
                          <div className="flex space-x-1">
                            <span className="typing-dot text-xl">.</span>
                            <span className="typing-dot text-xl">.</span>
                            <span className="typing-dot text-xl">.</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Suggested questions */}
              <div className="px-4 py-2 border-t border-[hsl(var(--furia-light))]">
                <SuggestedQuestions
                  onSelectQuestion={handleSelectQuestion}
                  lastMessageType={
                    messages.length > 0
                      ? messages[messages.length - 1].sender
                      : "bot"
                  }
                  lastMessageContent={lastBotMessage}
                />
              </div>

              {/* Chat input */}
              <ChatInput onSendMessage={sendMessage} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
