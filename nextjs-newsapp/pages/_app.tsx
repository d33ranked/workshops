import 'bootstrap/dist/css/bootstrap.min.css';
import '@components/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import styles from "../styles/App.module.css";

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title> Breaking News - nextjs NewsApp</title>
        <meta name ="description" content="generated by nextjs"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
      </Container>
      
    </div>
  );
}