"use client"

import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { useRouter } from 'next/navigation';
import { ControleLivro } from '../classe/controle/ControleLivros';
import ControleEditora from '../classe/controle/ControleEditora';
import './novo.css';

const LivroDados: NextPage = () => {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.getCodEditora(),
    text: editora.getNome(),
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value.toString());
  const [autores, setAutores] = useState('');

  const router = useRouter();

  const salvarLivro = async () => {
    if (titulo === '' || resumo === '' || autores === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const codigoEditora = Number(codEditora);

    try {
      controleLivro.incluir(titulo, resumo, codigoEditora, autores.split(',').map((autor) => autor.trim()));
      router.push('/catalogo');
    } catch (error) {
      console.error('Erro ao incluir o livro: ', error);
    }
  };

  return (
    <main>
      <Head>
        <title>Adicionar Livro</title>
      </Head>
      <div className="principal">
        <form>
          <h1>Novo Livro</h1>
          <label>Título:</label>
          <div className="form-group">
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </div>
          <label>Resumo:</label>
          <div className="form-group">
            <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} />
          </div>
          <label>Editora:</label>
          <div className="form-group">
            <select value={codEditora} onChange={(e) => setCodEditora(e.target.value)}>
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <label>Autor (separados por vírgula):</label>
          <div className="form-group">
            <input type="text" value={autores} onChange={(e) => setAutores(e.target.value)} />
          </div>
          <button className="salvar" type="button" onClick={salvarLivro}>
            Salvar Dados
          </button>
        </form>
      </div>
    </main>
  );
};

export default LivroDados;