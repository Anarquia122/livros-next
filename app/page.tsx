import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import { Menu } from './Menu';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
};
