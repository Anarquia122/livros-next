import type { NextPage } from "next";
import React from 'react';
import styles from '../page.module.css';
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Menu } from "./Menu";
import { LinhaLivro } from "./componentes/LinhaLivro";

const baseURL: string = "http://localhost:3000/pages/api/livros"

const LivroLista: NextPage = () => {
    type Livro = {
        codigo: number;
        titulo: string;
        resumo: string;
        codEditora: number;
        autores: string[];
    }

    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregado, setCarregado] = useState(false);

    const obter = async () => {
        try {
            const response = await fetch(baseURL);
            const data = await response.json();
            setLivros(data);
            setCarregado(true);
        } catch (error) {
            console.error('erro ao obter livros', error);
        }
    };

    const excluirLivro = async (codigo: number) => {
        try {
            const response = await fetch(`${baseURL}/${codigo}`, {
                method: 'DELETE',
            });
            const result = await response.ok;
            if (result) {
                setCarregado(false);
            } else {
                console.error('erro ao excluir o livro: ', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao excluir o livro: ', error);
        }
    };

    useEffect(() => {
        obter();
    }, [carregado]);

    const excluir = (codigo: number) => {
        excluirLivro(codigo);
    };

    console.log(livros)

    return (
        <div className={styles.container}>
            <Head>
                <title>Livros</title>
            </Head>
            <Menu />
            <main>
                <h1>Livros Disponiveis</h1>
                <table>
                    <thead>
                        <tr>
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