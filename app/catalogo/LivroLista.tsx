"use client"

import type { NextPage } from "next";
import React from 'react';
import styles from '../page.module.css';
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Menu } from "../Menu";
import { LinhaLivro } from "./LinhaLivro";
import { ControleLivro } from "../classe/controle/ControleLivros";
import './catalogo.css'

const baseURL: string = "/livros"
const controleLivro = new ControleLivro();

const LivroLista: NextPage = () => {
    type Livro = {
        codigo: number;
        titulo: string;
        resumo: string;
        codEditora: number;
        autores: string[];
    }

    const [livros, setLivros] = useState<Livro[]>(controleLivro.getLivros());
    const [carregado, setCarregado] = useState(false);

    const obter = async () => {
        setLivros(() => controleLivro.getLivros());
    };

    const excluirLivro = async (codigo: number) => {
        controleLivro.excluir(codigo);
        setCarregado(!carregado)
    };

    useEffect(() => {
        obter();
    }, [carregado]);

    const excluir = (codigo: number) => {
        controleLivro.excluir(codigo);
        setLivros(controleLivro.getLivros)
    };

    console.log(livros)

    return (
        <div className={styles.container}>
            <Head>
                <title>Livros</title>
            </Head>
            <main>
                <h1>Livros Disponiveis</h1>
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
                            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir}/>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default LivroLista;