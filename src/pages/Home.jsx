import Main from '../components/Main'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="bg-red-300 text-2xl bg-opacity-50 rounded text-center text-blue-700 font-bold m-5 hover:bg-green-400 hover:text-red-700 font-montserrat"><span className='bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent'>Halo! Ini adalah halaman Home!</span></h1>
      <Main />
    </>
  )
}
