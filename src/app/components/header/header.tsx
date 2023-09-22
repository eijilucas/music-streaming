import './header.scss'

export function Header() {
    return (
        <div className="header">
            <header>
                <h1>Tune Wave</h1>
                <nav>
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Explorar</a></li>
                        <li><a href="#">Biblioteca</a></li>
                        <li><a href="#">Playlists</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}