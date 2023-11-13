import Livro from "../modelo/Livro";

const livros: Livro[] = [
  new Livro(1, 1, 'Harry Potter', 'Um garoto, Harry, é encontrado por um bruxo e descobre que pode se tornar um tambem, logo depois, ele parte para Hogwarts, a escola onde aprenderá a ser um grande bruxo.', ['J. K. Rowling', 'Rowling NG J.K.']),
  new Livro(2, 2, 'Diario de um Banana', 'Greg é um garoto comum de 11 anos que vai à escola e enfrenta os desafios da pré-adolescência como milhões de outros. O que o torna tão especial é a vontade de dividir essas experiências com todo mundo, para o caso de tornar-se rico e famoso quando crescer.', ['Jeff Kinney']),
  new Livro(3, 3, 'Deadpool Dog Park', 'Neste romance, o Mercenário Tagarela tem uma missão tragicômica: salvar a humanidade de terríveis filhotinhos de cachorro. Ok, falando assim pode até não parecer tão terrível, mas é preciso mencionar que esses fofinhos têm uma tendência um pouco incômoda de transformar-se em monstros gigantes.', ['Stefan Petrucha']),
];

class ControleLivro {
  getLivros(): Livro[] {
    return livros;
  }

  incluir(titulo: string, resumo: string, codEditora: number,  autores: string[]): void {
    const novoCodigo = livros.length + 1;
    const livro = new Livro(novoCodigo, codEditora, titulo, resumo, autores);
    livros.push(livro);
  }

  excluir(codigoLivro: number): void {
    const index = livros.findIndex((livro) => livro.getCodigo() === codigoLivro);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export { livros, ControleLivro };
