import React from 'react';
import ControleEditora from '../classe/controle/ControleEditora';
import Livro from '../classe/modelo/Livro';

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

const controleEditora = new ControleEditora();

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.getCodEditora());

  return (
    <tr>
      <td className="titulo">
        {livro.getTitulo()}
        <button className="excluir" onClick={() => excluir(livro.getCodigo())}>
          Excluir
        </button>
      </td>
      <td className="resumo">{livro.getResumo()}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.getAutores().map((autor: string, index: number) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
    );
};