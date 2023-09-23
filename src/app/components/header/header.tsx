import { HomeIcon } from '../icons/home-icon'
import { LibraryIcon } from '../icons/library-icon'
import { LoupeIcon } from '../icons/loupe-icon'
import { PlaylistIcon } from '../icons/playlist-icon'
import './header.scss'


export function Header() {
    return (
        <div className="header">
            <h1>Tune Wave</h1>

            <div className="header-content">
                <div className="content">
                    <HomeIcon/>
                    <div className="label">
                        <a href="#">Início</a>
                    </div>
                </div>

                <div className="content">
                    <LoupeIcon/>
                    <div className="label">
                        <a href="#">Pesquisar</a>
                    </div>
                </div>

                <div className="content">
                    <LibraryIcon/>
                    <div className="label">
                        <a href="#">Biblioteca</a>
                    </div>
                </div>

                <div className="content">
                    <PlaylistIcon/>
                    <div className="label">
                        <a href="#">Playlists</a>
                    </div>
                </div>
            </div>
        </div>
    )
}