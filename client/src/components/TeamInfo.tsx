import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Target } from "lucide-react";
import { FaChartLine } from "react-icons/fa";
import { teamData, teamStats, players } from "@/data/team";
import homemDeBlusa from "../assets/images/homem-de-blusa.webp";
import homemDeJaqueta from "../assets/images/homem-de-jaqueta.webp";
import mulherDeBlusa from "../assets/images/mulher-de-blusa.webp";
import mulherDeMoletom from "../assets/images/mulher-de-moletom.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


export function MyCarousel() {
  const images = [
    homemDeBlusa,
    homemDeJaqueta,
    mulherDeBlusa,
    mulherDeMoletom,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Troca de slide a cada 3 segundos

    return () => clearInterval(interval); // Limpar intervalo ao desmontar
  }, []);

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="hidden lg:block w-full max-w-[80%]"
    >
      <CarouselContent>
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`, // Mover as imagens para a esquerda
          }}
        >
          {images.filter(Boolean).map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <div className="h-full flex items-center justify-center">
                <img
                  src={image || "/placeholder.jpg"}
                  alt={`Imagem ${index + 1}`}
                  className="h-auto max-h-[400px] md:max-h-[500px] w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </CarouselContent>
    </Carousel>
  );
}

export default function TeamInfo() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="character-container w-full h-full bg-gradient-to-b from-[hsl(var(--furia-gray))] to-[hsl(var(--furia-dark))] relative overflow-hidden flex flex-col"
    >
      {/* CS Character Carousel */}
      <div className="relative ">
        <svg
          width="400"
          height="600"
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto "
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

        {/* Image Carousel */}
        <div
          className="absolute inset-0 flex items-center justify-center z-0"
          style={{ top: "1%", height: "60%" }}
        >
          {MyCarousel()}
        </div>
      </div>
      {/* Team stats overlay */}
      <div className="absolute bottom-0 left-0 w-full p-4 pb-8 z-10 bg-gradient-to-t from-[hsl(var(--furia-dark))] via-[rgba(18,19,24,0.9)] to-transparent">
        <h3 className="text-xl font-bold text-[hsl(var(--furia-blue))] drop-shadow-[0_0_2px_black] mb-2 flex items-center">
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
              <span className="text-sm font-semibold uppercase text-[hsl(var(--text-dark))]">
                Ranking Mundial
              </span>
              <span className="text-lg font-bold">
                #{teamStats.worldRanking}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold uppercase text-[hsl(var(--text-dark))]">
                Vitórias Recentes
              </span>
              <span className="text-lg font-bold">
                {teamStats.recentWins}-{teamStats.recentLosses}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold uppercase text-[hsl(var(--text-dark))]">
                Próximo Jogo
              </span>
              <span className="text-md font-semibold">
                {teamStats.nextMatch}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold uppercase text-[hsl(var(--text-dark))]">
                Próximo Torneio
              </span>
              <span className="text-md font-semibold">
                {teamStats.nextTournament}
              </span>
            </div>
          </motion.div>

          {/* Current lineup */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[hsla(var(--furia-gray),0.8)] backdrop-blur-sm rounded p-3 furia-glow"
          >
            <h4 className="text-sm font-semibold uppercase text-[hsl(var(--text-dark))] mb-2">
              Lineup Atual
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {players.slice(0, 5).map((player, index) => (
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

          {/* Reservas */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[hsla(var(--furia-gray),0.8)] backdrop-blur-sm rounded p-3 furia-glow mt-3"
          >
            <h4 className="text-sm font-semibold uppercase text-[hsl(var(--text-dark))] mb-2">
              Reservas
            </h4>
            <div className="flex justify-center gap-4">
              {players.slice(5).map((player, index) => (
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
