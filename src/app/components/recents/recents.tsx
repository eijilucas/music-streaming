import './recents.scss'

export function Recents(){
    return(
        <section className="recents">
            <h1>My playlists</h1>

            <div className="recent-playlists">
                <div className="playlists">
                    <figure><img src="" alt="" /></figure>
                    <p>Playlist 1</p>
                </div>

                <div className="playlists">
                    <figure><img src="" alt="" /></figure>
                    <p>Playlist 2</p>
                </div>

                <div className="playlists">
                    <figure><img src="" alt="" /></figure>
                    <p>Playlist 3</p>
                </div>
            </div>
        </section>
    )
}