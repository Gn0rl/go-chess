"use client";

import { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import { Stats, Game } from "../types";
import { fetchProfileData } from "../api/fetchProfileData";

export function Profile() {
    const [stats, setStats] = useState<Stats>({
        rating: 0,
        gamesPlayed: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        winRate: 0,
        averageGameLength: 0,
    });

    const [pastGames, setPastGames] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProfileData(setStats, setPastGames, setIsLoading);
    }, []);

    const getResultClass = (result: string) => {
        switch (result) {
            case "win":
                return styles.win;
            case "loss":
                return styles.loss;
            case "draw":
                return styles.draw;
            default:
                return "";
        }
    };

    if (isLoading) {
        return <div className={styles.loading}>Loading profile data...</div>;
    }

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileHeader}>
                <h1>Chess Profile</h1>
                <div className={styles.rating}>
                    <span className={styles.ratingLabel}>Rating:</span>
                    <span className={styles.ratingValue}>{stats.rating}</span>
                </div>
            </div>

            <div className={styles.statsSection}>
                <h2>Statistics</h2>
                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Games Played</span>
                        <span className={styles.statValue}>
                            {stats.gamesPlayed}
                        </span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Wins</span>
                        <span className={styles.statValue}>{stats.wins}</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Losses</span>
                        <span className={styles.statValue}>{stats.losses}</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Draws</span>
                        <span className={styles.statValue}>{stats.draws}</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Win Rate</span>
                        <span className={styles.statValue}>
                            {stats.winRate}%
                        </span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>
                            Avg. Game Length
                        </span>
                        <span className={styles.statValue}>
                            {stats.averageGameLength} moves
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.gamesSection}>
                <h2>Recent Games</h2>
                {pastGames.length === 0 ? (
                    <p className={styles.noGames}>No games played yet.</p>
                ) : (
                    <div className={styles.gamesList}>
                        <div className={styles.gamesHeader}>
                            <span>Opponent</span>
                            <span>Result</span>
                            <span>Date</span>
                            <span>Time Control</span>
                            <span>Moves</span>
                        </div>
                        {pastGames.map((game) => (
                            <div key={game.id} className={styles.gameItem}>
                                <span className={styles.opponent}>
                                    {game.opponent}
                                </span>
                                <span
                                    className={`${
                                        styles.result
                                    } ${getResultClass(game.result)}`}
                                >
                                    {game.result.charAt(0).toUpperCase() +
                                        game.result.slice(1)}
                                </span>
                                <span className={styles.date}>{game.date}</span>
                                <span className={styles.timeControl}>
                                    {game.timeControl}
                                </span>
                                <span className={styles.moves}>
                                    {game.moves}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
