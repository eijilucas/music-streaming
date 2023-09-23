import { Header } from "./components/header/header";
import { Playlist } from "./components/playlist/playlist";

import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Playlist/>
    </main>
  )
}
