import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "@/app/classe/controle/ControleEditora";

const controleEditora = new ControleEditora();

export default async function hadler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            const editoras = controleEditora.getEditoras();
            res.status(200).json(editoras);
        } else {
            res.status(405).json({ error: 'Método não permitido' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}