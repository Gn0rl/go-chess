import { Stats, Game } from "../types";

export async function fetchProfileData(
    setStats: (stats: Stats) => void,
    setPastGames: (games: Game[]) => void,
    setIsLoading: (isLoading: boolean) => void
) {
    setIsLoading(true);
    try {
        const stats: Stats = {
            rating: 1450,
            gamesPlayed: 42,
            wins: 25,
            losses: 12,
            draws: 5,
            winRate: 59.5,
            averageGameLength: 32,
        };

        const games: Game[] = [
            {
                id: "1",
                opponent: "ChessMaster99",
                result: "win",
                date: "2023-11-15",
                timeControl: "10+5",
                moves: 34,
            },
            {
                id: "2",
                opponent: "KnightRider",
                result: "loss",
                date: "2023-11-12",
                timeControl: "5+3",
                moves: 28,
            },
            {
                id: "3",
                opponent: "QueenGambit",
                result: "draw",
                date: "2023-11-10",
                timeControl: "15+10",
                moves: 45,
            },
        ];
        setStats(stats);
        setPastGames(games);
        setIsLoading(false);
    } catch (error) {
        console.error("Error fetching profile data:", error);
        setIsLoading(false);
    }
}
