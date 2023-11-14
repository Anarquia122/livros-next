"use client"

import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ControleLivro } from '../classe/controle/ControleLivros';
import styles from '../page.module.css';
import { LinhaLivro } from './LinhaLivro';
import Livro from '../classe/modelo/Livro';
import './catalogo.css'

const baseURL: string = '/livros';
const controleLivro = new ControleLivro();

const LivroLista: NextPage = () => {
  const pegarLivro = controleLivro.getLivros();

  const [livros, setLivros] = useState<Livro[]>(pegarLivro);
  const [carregado, setCarregado] = useState(false);

  const obter = async () => {
    setLivros(pegarLivro);
  };

  const excluirLivro = async (codigo: number) => {
    controleLivro.excluir(codigo);
    setCarregado(!carregado);
  };

  useEffect(() => {
    obter();
  }, [carregado]);

  const excluir = (codigo: number) => {
    controleLivro.excluir(codigo);
    setCarregado(!carregado);
  };

  console.log(livros);

  return (
    <div className={styles.container}>
      <Head>
        <title>Livros</title>
      </Head>
      <main>
        <h1>Livros Disponíveis</h1>
        <table>
          <thead>
            <tr className="cabeca">
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.getCodigo()} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;