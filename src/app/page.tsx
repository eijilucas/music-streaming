
export default function Home() {
  return (
    <main className='container'>
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

      <section className="destaques">
        <h2>Músicas em Destaque</h2>

      </section>

      <section className="explorar">
        <h2>Explorar Músicas</h2>
      </section>

      <footer>
        <p>&copy; 2023 Meu Serviço de Streaming de Músicas</p>
      </footer>
    </main>
  )
}
