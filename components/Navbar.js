import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" height={77} width={128} />
                {/* <h1>Ninja List</h1> */}
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninjas List</a></Link>
        </nav>
    )
}

export default Navbar
