import { NextApiRequest, NextApiResponse } from "next";

import { ControleLivro } from "@/app/classe/controle/ControleLivros";

const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const livros = controleLivro.getLivros();
    
            res.status(200).json(livros);
        } else if (req.method === 'POST') {
            const {titulo, resumo, codEditora, autores} = req.body;
    
            controleLivro.incluir(titulo, resumo, codEditora, autores);
    
            res.status(200).json({mensagem: 'Livro incluido com sucesso.'});
        } else {
            res.status(405).end();
        }
    } catch (error) {
        console.error('Erro na requisição: ', error);
        res.status(500).end();
    }
};