import Image from 'next/image'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function Home() {
  const name = 'JIHOON'
  const result = 1 + 2
  return (
    <main>
      <div className="font-mono bg-blue-900 text-blue-300">
        <Navbar />
      </div>
      <div className="font-mono bg-blue-900 text-blue-300 text-center mt-1 p-4">
        <h1 className="text-3xl font-bold">Main Page! Wa!!!!</h1>
      </div>
      <div className="font-mono bg-blue-600 text-blue-300 text-center m-4">
        <p>{name}, WELCOME!</p>
        <p>This page is made for node js, next js, tailwind.</p>
      </div>
      <div className="font-mono bg-blue-600 text-blue-300 text-center m-4">
        <p>1 + 2 = {result}</p>
      </div>
      <Footer />
    </main>
  )
}
