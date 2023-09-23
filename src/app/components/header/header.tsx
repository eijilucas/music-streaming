import { HomeIcon } from '../icons/home-icon'
import { LibraryIcon } from '../icons/library-icon'
import { LoupeIcon } from '../icons/loupe-icon'
import './header.scss'

export function Header() {
    return (
        <div className="header">
            <h1>Tune Wave</h1>

            <div className="header-content">
                <div className="content">
                    <HomeIcon/>
                    <div className="label">
                        <span><a href="">Início</a></span>
                    </div>
                </div>

                <div className="content">
                    <LoupeIcon/>
                    <div className="label">
                        <span><a href="">Pesquisar</a></span>
                    </div>
                </div>

                <div className="content">
                    <LibraryIcon/>
                    <div className="label">
                        <span><a href="">Biblioteca</a></span>
                    </div>
                </div>

                <div className="content">
                    <HomeIcon/>
                    <div className="label">
                        <span><a href="">Playlists</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}