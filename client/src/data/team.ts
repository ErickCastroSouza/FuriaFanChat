import { Player, TeamStats, TeamData } from "@/types";
import FalleN from "../assets/players/FalleN.webp";
import KSCERATO from "../assets/players/KSCERATO.webp";
import molodoy from "../assets/players/molodoy.webp";
import skullz from "../assets/players/skullz.webp";
import YEKINDAR from "../assets/players/YEKINDAR.webp";
import yuriih from "../assets/players/yuurih.webp";
import chelo from "../assets/players/chelo.webp";
import { Skeleton } from "@/components/ui/skeleton";

export const players: Player[] = [
  {
    id: "1",
    name: "FalleN",
    realName: "Gabriel Toledo",
    role: "IGL",
    image: FalleN,
  },
  {
    id: "2",
    name: "Yuurih",
    realName: "Yuri Santos",
    role: "Rifler",
    image: yuriih,
  },
  {
    id: "3",
    name: "KSCERATO",
    realName: "Kaike Cerato",
    role: "Rifler",
    image: KSCERATO,
  },
  {
    id: "4",
    name: "Molodoy",
    realName: "David Bermudez",
    role: "Rifler",
    image: molodoy,
  },
  {
    id: "5",
    name: "Yekindar",
    realName: "Mareks Gaļinskis",
    role: "Rifler",
    image: YEKINDAR,
  },
  {
    id: "6",
    name: "Skullz",
    realName: "Felipe Medeiros",
    role: "Reserva",
    image: skullz,
  },
  {
    id: "7",
    name: "Chelo",
    realName: "Marcelo Cespedes",
    role: "Reserva",
    image: chelo,
  },
  
];

export const teamStats: TeamStats = {
  worldRanking: 16,
  recentWins: 3,
  recentLosses: 6,
  nextMatch: "Não há partidas agendadas",
  nextTournament: "PGL Astana 2025"
};

export const teamData: TeamData = {
  name: "FURIA Esports",
  description: "FURIA Esports é uma organização brasileira de esports fundada em 2017, conhecida principalmente por sua equipe de Counter-Strike 2 (CS2), que vem conquistando destaque internacional.",
  coach: "Sidnei sidde Macedo",
};
