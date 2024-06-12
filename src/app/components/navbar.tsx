import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <div className="flex p-4">
      <div className="text-center bg-blue-400 p-1">My React Blog</div>
      <div className="grow">
        <nav className="text-right bg-blue-600 p-1">
          <Link href="/">BLOG </Link>
          <Link href="/about">ABOUT </Link>
          <Link href="/Project">PROJECT </Link>
          <Link href="/contact">CONTACT </Link>
        </nav>
      </div>
    </div>
  )
}
