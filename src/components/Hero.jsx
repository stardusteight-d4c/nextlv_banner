import ReactTyped from 'react-typed'
import logo from '../assets/logo.png'
import banner from '../assets/banner.jpeg'

const Hero = () => {
  return (
    <header className="w-full h-[100vh] top-0 border-b-2 border-red-300">
      <img src={logo} className='absolute top-5 left-5 md:left-10 w-[200px]' />
      <img
        className="object-cover h-full w-full absolute -z-10"
        src={banner}
      />
      <div className="w-full text-white h-[90%] flex flex-col justify-center items-center px-4 text-center">
        <h1 className="m-2 font-bold text-5xl flex flex-col  md:text-6xl md:block">
          Explore
          <ReactTyped
            className="ml-1 text-red-300 md:text-6xl font-bold md:pl-4 sm:text-4xl"
            strings={['Filmes', 'Séries', 'Animes']}
            typeSpeed={120}
            backSpeed={80}
            loop
          />
        </h1>
        <p className='text-3xl pb-4 md:text-4xl'>Na <strong className='text-red-300'>NextLv</strong></p>
        <div>
          <button className="m-2 font-semibold"><a href="https://nextlv-flix.vercel.app/">Comece agora</a></button>
        </div>
      </div>
    </header>
  )
}

export default Hero
