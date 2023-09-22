import { Header } from "./components/header/header";
import { Recents } from "./components/recents/recents";

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Recents/>
    </main>
  )
}
