
import { FirstLogo } from '../logos/first-logo'
import { SecondLogo } from '../logos/second-logo'
import { ThirdLogo } from '../logos/third-logo'
import './playlist.scss'

export function Playlist(){
    return(
        <section className="playlist-container">
            <h1>My playlists</h1>

            <div className="recent-playlist">
                <div className="playlist">
                    <FirstLogo/>
                    <div className="description">
                        <span>Joji</span>
                        <div className="detail">
                            <span>Playlist • Lucas</span>
                        </div>
                    </div>
                </div>

                <div className="playlist">
                    <SecondLogo/>
                    <div className="description">
                        <span>Frank Ocean</span>
                        <div className="detail">
                            <span>Playlist • Lucas</span>
                        </div>
                    </div>
                </div>

                <div className="playlist">
                    <ThirdLogo/>
                    <div className="description">
                        <span>Daniels Caesar</span>
                        <div className="detail">
                            <span>Playlist • Lucas</span>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    )
}