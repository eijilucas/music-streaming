import { Header } from "./components/header/header";
import { Playlist } from "./components/recent/playlist";

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Playlist/>
    </main>
  )
}
