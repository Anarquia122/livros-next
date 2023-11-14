import ControleEditora from "../classe/controle/ControleEditora";

interface LinhaLivroProps {
    livro: {
        codigo: number;
        titulo: string;
        resumo: string;
        codEditora: number;
        autores: string[];
    };
    excluir: (codigo: number) => void;
}

const controleEditora = new ControleEditora();

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

    return (
        <tr>
            <td className="titulo">
                {props.livro.titulo}
                <button className="excluir" onClick={() => props.excluir(props.livro.codigo)}>Excluir</button>
            </td>
            <td className="resumo">{props.livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {props.livro.autores.map((autor: string, index: number) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};