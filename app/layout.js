import Link from 'next/link';
import { Open_Sans } from 'next/font/google';
import styles from './globals.css';

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ['400'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
            <div><Link className={styles.homeLink} href="/conference">conference</Link></div>
            <div><Link className={styles.homeLink} href="/conference/speakers">speakers</Link></div>
            <div><Link className={styles.homeLink} href="/conference/sessions">sessions</Link></div>
            <div><Link className={styles.homeLink} href="/blog">blog</Link></div>
            <div><Link className={styles.homeLink} href="/home">home</Link></div>{children}</body>
    </html>
  );
}
