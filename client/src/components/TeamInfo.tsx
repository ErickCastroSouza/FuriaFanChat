import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Target } from "lucide-react";
import { FaChartLine } from "react-icons/fa";
import { teamData, teamStats, players } from "@/data/team";

export default function TeamInfo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="character-container w-full md:w-2/5 lg:w-1/3 bg-gradient-to-b from-[hsl(var(--furia-gray))] to-[hsl(var(--furia-dark))] relative hidden md:block overflow-hidden"
    >
      {/* CS Character */}
      <div className="absolute left-0 bottom-0 h-[90%] z-0">
        <svg 
          width="400" 
          height="600" 
          viewBox="0 0 400 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-full w-auto"
        >
          <path 
            d="M200 580C310.457 580 400 490.457 400 380C400 269.543 310.457 180 200 180C89.5431 180 0 269.543 0 380C0 490.457 89.5431 580 200 580Z" 
            fill="url(#paint0_radial)" 
          />
          <defs>
            <radialGradient 
              id="paint0_radial" 
              cx="0" 
              cy="0" 
              r="1" 
              gradientUnits="userSpaceOnUse" 
              gradientTransform="translate(200 380) rotate(90) scale(200)"
            >
              <stop stopColor="#121318" stopOpacity="0" />
              <stop offset="1" stopColor="#121318" />
            </radialGradient>
          </defs>
        </svg>
        
        {/* Silhouette of CS character */}
        <Target className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[hsl(var(--furia-silver))] opacity-10 text-[300px]" />
      </div>
      
      {/* Team stats overlay */}
      <div className="absolute bottom-0 left-0 w-full p-4 pb-8 z-10 bg-gradient-to-t from-[hsl(var(--furia-dark))] via-[rgba(18,19,24,0.9)] to-transparent">
        <h3 className="text-xl font-bold text-[hsl(var(--furia-blue))] mb-2 flex items-center">
          <FaChartLine className="mr-2" /> NOSSO TIME
        </h3>
        
        <div className="space-y-3">
          {/* Stats card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-[hsla(var(--furia-gray),0.8)] backdrop-blur-sm rounded p-3 furia-glow"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold uppercase text-[hsl(var(--text-dark))]">Ranking Mundial</span>
              <span className="text-lg font-bold">#{teamStats.worldRanking}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold uppercase text-[hsl(var(--text-dark))]">Vitórias Recentes</span>
              <span className="text-lg font-bold">{teamStats.recentWins}-{teamStats.recentLosses}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold uppercase text-[hsl(var(--text-dark))]">Próximo Jogo</span>
              <span className="text-md font-semibold">{teamStats.nextMatch}</span>
            </div>
          </motion.div>
          
          {/* Current lineup */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[hsla(var(--furia-gray),0.8)] backdrop-blur-sm rounded p-3 furia-glow"
          >
            <h4 className="text-sm font-semibold uppercase text-[hsl(var(--text-dark))] mb-2">Lineup Atual</h4>
            <div className="grid grid-cols-3 gap-2">
              {players.map((player, index) => (
                <div key={player.id} className="flex flex-col items-center">
                  <Avatar className="w-10 h-10 mb-1 bg-[hsl(var(--furia-light))]">
                    {player.image ? (
                      <AvatarImage src={player.image} alt={player.name} />
                    ) : (
                      <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  <span className="text-xs font-medium">{player.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
