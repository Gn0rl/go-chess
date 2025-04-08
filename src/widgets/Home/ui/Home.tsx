'use client'

import React from "react";
import styles from './Home.module.css';
import Link from "next/link";

export function Home() {
  return (
    <div className={styles.homeContainer}>
    <section className={styles.heroSection}>
        <h1>Welcome to GoChess</h1>
        <p>Play chess online</p>
    </section>

      <section className={styles.quickPlaySection}>
        <h2>Quick Play</h2>
        <div className={styles.timeControls}>
          <Link className={styles.timeControlButton} href={"/play"}>
            <span className={styles.time}>1+0</span>
            <span className={styles.label}>Bullet</span>
          </Link>
          <Link className={styles.timeControlButton} href={"/play"}>
            <span className={styles.time}>5+0</span>
            <span className={styles.label}>Blitz</span>
          </Link>
          <Link className={styles.timeControlButton} href={"/play"}>
            <span className={styles.time}>10+0</span>
            <span className={styles.label}>Rapid</span>
          </Link>
        </div>
      </section>
    </div>
  );
}