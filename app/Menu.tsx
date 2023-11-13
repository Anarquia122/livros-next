import Link from "next/link";

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/home" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/livroLista" className="nav-link">Catálogo</a>
                </li>
                <li className="nav-item">
                    <a href="/livroDados" className="nav-link">Novo</a>
                </li>
            </ul>
        </nav>
    );
};