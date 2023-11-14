import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import { Menu } from './Menu';
import 'bootstrap/dist/css/bootstrap.css';
import LivroLista from './catalogo/LivroLista';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
};
