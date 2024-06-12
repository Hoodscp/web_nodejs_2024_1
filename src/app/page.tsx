import Image from 'next/image'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function Home() {
  const name = 'JIHOON'
  return (
    <main>
      <div className="font-mono bg-blue-900 text-blue-300">
        <Navbar />
        <h1 className="text-3xl font-bold text-blue-300 text-center">
          Main Page! Wa!!!!
        </h1>
        <p>{name}, WELCOME!</p>
      </div>
      <Footer />
    </main>
  )
}
