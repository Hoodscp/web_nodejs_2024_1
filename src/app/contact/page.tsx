import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function ContactPage() {
  const name = 'Jihoon'
  const result = 1 + 2
  return (
    <main>
      <div className="bg-blue-900 text-blue-300 font-mono">
        <Navbar />
        <h1 className="text-3xl font-bold text-blue-300 text-center">
          Contact Page! Wa!!!!
        </h1>
        <p>{name}, WELCOME!</p>
      </div>
      <Footer />
    </main>
  )
}
