import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro } from "@/app/classe/controle/ControleLivros";

const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'DELETE') {
            const { codigo } = req.query;

            controleLivro.excluir(Number(codigo));

            res.status(200).json({mensagem: 'Livro excluido com sucesso.'});
        } else {
            res.status(405).end();
        }
    } catch (error) {
        console.error('Erro ao processar requisição: ', error);
        res.status(500).end();
    }
};