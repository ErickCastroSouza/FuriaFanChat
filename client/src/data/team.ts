import { Player, TeamStats, TeamData } from "@/types";

export const players: Player[] = [
  {
    id: "1",
    name: "molodoy",
    realName: "Gabriel Mattioli",
    role: "Rifler",
  },
  {
    id: "2",
    name: "yekindar",
    realName: "Mareks Gaļinskis",
    role: "Entry Fragger",
  },
  {
    id: "3",
    name: "FalleN",
    realName: "Gabriel Toledo",
    role: "AWPer/Capitão",
  },
  {
    id: "4",
    name: "KSCERATO",
    realName: "Kaike Cerato",
    role: "Rifler",
  },
  {
    id: "5",
    name: "yuurih",
    realName: "Yuri Santos",
    role: "Rifler",
  },
  {
    id: "6",
    name: "skullz",
    realName: "Lucas Lopes",
    role: "Rifler/Substituto",
  },
  {
    id: "7",
    name: "chelo",
    realName: "André Nascimento",
    role: "Rifler/Substituto",
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
