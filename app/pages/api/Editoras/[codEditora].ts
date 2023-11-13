import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "@/app/classe/controle/ControleEditora";

const controleEditora = new ControleEditora();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const codEditora = Number(req.query.codEditora);

        if (req.method === 'GET') {
            const nomeEditora = controleEditora.getNomeEditora(codEditora);
            res.status(200).json({ nome: nomeEditora });
        } else {
            res.status(405).json({ error: 'Método não permitido' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}