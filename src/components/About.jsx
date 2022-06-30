const About = () => {
  return (
    <div className="h-[100vh] bg-black">
      <h1 className="font-semibold text-center text-6xl text-white text-shadow-xl pt-5">
        Contato
      </h1>
      <section className="flex flex-col items-center justify-center gap-12 w-[100vw] bg-black text-white p-12 px-8 md:flex-row">
        <section>
          <div className="flex gap-12 justify-between items-center md:w-[700px] p-4">
            <div>
              <h2 className="leading-relaxed text-4xl mb-4 font-bold text-red-300">
                Assista milhares de filmes
              </h2>
              <span className="text-xl">
                Assista de onde estiver e na hora que quiser, a NextLv oferece
                uma experiência multiplataforma de outro nível
              </span>
            </div>
          </div>
          <div className="flex gap-12 justify-between items-center md:w-[700px] p-4">
            <div>
              <h2 className="leading-relaxed text-4xl mb-4 font-bold text-red-300">
                Participe de salas de streaming
              </h2>
              <span className="text-xl">
                Isto mesmo, aqui você pode criar salas e convidar até 2
                visitantes sem plano para maratonar suas séries favoritas juntos
              </span>
            </div>
          </div>
          <div className="flex gap-12 justify-between items-center md:w-[700px] p-4">
            <div>
              <h2 className="leading-relaxed text-4xl mb-4 font-bold text-red-300">
                Fique por dentro das novidades
              </h2>
              <span className="text-xl">
                A NextLv oferece um blog exclusivo sempre atualizado para te informar
                sobre qualquer notícia relacionada as suas séries, filmes ou
                animes favoritos.
              </span>
            </div>
          </div>
        </section>

        <form
          className="flex flex-col text-white"
          action="https://getform.io/f/80055912-1739-4b78-a42a-0bc8046bb6e3"
          method="POST"
        >
          <label for="name">Name and surname</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="text-gray-900"
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="nextlv@email.com"
            className="text-gray-900"
          />
          <label for="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="p-4 resize-none mb-4 rounded-lg h-[200px] w-[85vw] md:w-[500px] text-xl text-gray-900"
          ></textarea>
          <button className="font-semibold">Enviar</button>
        </form>
      </section>
    </div>
  )
}

export default About
