import { Player, TeamStats, TeamData } from "@/types";

export const players: Player[] = [
  {
    id: "1",
    name: "FalleN",
    realName: "Gabriel Toledo",
    role: "AWPer/IGL",
  },
  {
    id: "2",
    name: "yuurih",
    realName: "Yuri Santos",
    role: "Rifler",
  },
  {
    id: "3",
    name: "KSCERATO",
    realName: "Kaike Cerato",
    role: "Rifler",
  },
  {
    id: "4",
    name: "molodoy",
    realName: "David Bermudez",
    role: "Rifler",
  },
  {
    id: "5",
    name: "yekindar",
    realName: "Mareks Gaļinskis",
    role: "Rifler",
  },
  {
    id: "6",
    name: "skullz",
    realName: "Felipe Medeiros",
    role: "Reserva",
  },
];

export const teamStats: TeamStats = {
  worldRanking: 8,
  recentWins: 6,
  recentLosses: 4,
  nextMatch: "BLAST Premier Spring Final",
};

export const teamData: TeamData = {
  name: "FURIA Esports",
  description: "FURIA Esports é uma organização brasileira de esports fundada em 2017, conhecida principalmente por sua equipe de Counter-Strike 2 (CS2), que vem conquistando destaque internacional.",
  coach: "Nicholas \"guerri\" Nogueira",
};
