export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  time: string;
}

export interface Player {
  id: string;
  name: string;
  realName: string;
  role: string;
  image?: any;
}

export interface TeamStats {
  worldRanking: number;
  recentWins: number;
  recentLosses: number;
  nextMatch: string;
  nextTournament: string;
}

export interface TeamData {
  name: string;
  description: string;
  coach: string;
}
