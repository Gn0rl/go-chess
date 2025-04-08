interface Game {
    id: string;
    opponent: string;
    result: "win" | "loss" | "draw";
    date: string;
    timeControl: string;
    moves: number;
}

interface Stats {
    rating: number;
    gamesPlayed: number;
    wins: number;
    losses: number;
    draws: number;
    winRate: number;
    averageGameLength: number;
}

export type { Game, Stats };
