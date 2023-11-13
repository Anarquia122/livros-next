import Editora from "../modelo/Editora";

class ControleEditora {
    private editoras: Editora[];

    constructor() {
        this.editoras = [
            new Editora(1, 'Rocco'),
            new Editora(2, 'VR Editora'),
            new Editora(3, 'Novo Século'),
        ];
    }

    getNomeEditora(codEditora: number): string | undefined {
        const editora = this.editoras.find((e) => e.getCodEditora() === codEditora);
        return editora ? editora.getNome() : undefined;
    }

    getEditoras(): Editora[] {
        return this.editoras;
    }
}

export default ControleEditora;