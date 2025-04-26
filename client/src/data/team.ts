import { Player, TeamStats, TeamData } from "@/types";

export const players: Player[] = [
  {
    id: "1",
    name: "arT",
    realName: "Andrei Piovezan",
    role: "Capitão/Rifler",
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
    name: "drop",
    realName: "André Abreu",
    role: "Entry Fragger",
  },
  {
    id: "5",
    name: "HEN1",
    realName: "Henrique Teles",
    role: "AWPer",
  },
];

export const teamStats: TeamStats = {
  worldRanking: 5,
  recentWins: 8,
  recentLosses: 2,
  nextMatch: "14/07 vs. NAVI",
};

export const teamData: TeamData = {
  name: "FURIA Esports",
  description: "FURIA Esports é uma organização brasileira de esports fundada em 2017, conhecida principalmente por sua equipe de Counter-Strike 2 (CS2), que vem conquistando destaque internacional.",
  coach: "Nicholas \"guerri\" Nogueira",
};
