import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" passHref>
                <div className={styles.logoContainer}>
                    <Image 
                        src="/logo.webp" 
                        alt="Go Chess Logo" 
                        width={50} 
                        height={50} 
                        className={styles.logo}
                    />
                    <h1>GoChess</h1>
                </div>
            </Link>

            <nav className={styles.nav}>
                <Link href="/profile" className={styles.navLink}>
                    Profile
                </Link>
            </nav>
        </header>
    );
}
