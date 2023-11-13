import type { NextPage } from "next";
import React, { useState, useEffect } from 'react';
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

const baseURL: string = 'http://localhost:3000/api/livros';

const URL2: string = 'http://localhost:3000/api/Editoras';

type Livro = {
    codigo: number;
    titulo: string;
    resumo: string;
    codEditora: number;
    autores: string[];
}

const incluirLivro = async (livro: Livro) => {
    try {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(livro),
        });

        const result = await response.ok;
        if (result) {
            //inclusão realizada com sucesso
            Router.push('/catalogo')
        } else {
            //tratar a falha na inclusão
            const errorData = await response.json();
            console.error('erro ao incluir livro', errorData);
        }
    } catch (error) {
        console.error('Erro ao incluir o livro: ', error);
    }
};

const LivroDados: NextPage = () => {
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [codEditora, setCodEditora] = useState('');
    const [autores, setAutores] = useState('');

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const livro = {
            codigo: 0,
            titulo,
            resumo,
            codEditora: Number(codEditora),
            autores: autores.split(',').map((autor) => autor.trim()),
        };
        incluirLivro(livro);
    };

    interface Option {
        value: number;
        text: string;
    }

    const [opcoes, setOpcoes] = useState<Option[]>([]);

    useEffect(() => {
        const obterEditoras = async () => {
            try {
                const response = await fetch(URL2);
                const data = await response.json();

                const newOptions = (data as { codEditora: number; nome: string }[]).map((item) => ({
                    value: item.codEditora,
                    text: item.nome,
                }));

                setOpcoes(newOptions);
            } catch (error) {
                console.error('Erro ao obter editoras: ', error);
            }
        };

        obterEditoras();
    }, []);

    return (
        <main>
            <Head>
                <title>Adicionar Livro</title>
            </Head>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Título:</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Resumo:</label>
                    <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Editora:</label>
                    <select value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Autor (separedos por vírgula):</label>
                    <input type="text" value={autores} onChange={(e) => setAutores(e.target.value)} />
                </div>
                <button type="submit">Salvar Dados</button>
            </form>
        </main>
    );
}

export default LivroDados;