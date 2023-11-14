import Link from "next/link";
import LivroLista from "./catalogo/LivroLista";
import LivroDados from "./novo/LivroDados";

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href='/' legacyBehavior>
                    <a className="nav-link">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href='/catalogo' legacyBehavior>
                    <a className="nav-link">Catálogo</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href='/novo' legacyBehavior>
                    <a href="/novo" className="nav-link">Novo</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};