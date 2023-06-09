import 'bootstrap/dist/css/bootstrap.min.css';
import '@components/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import  Head  from 'next/head';
import { Container } from 'react-bootstrap';
import styles from "@components/styles/App.module.css";

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title>NextJS Car App</title>
        <meta name="description" content="nextjs car application for trading cars"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
      </Container>
      

    </div>
  
  );
}
