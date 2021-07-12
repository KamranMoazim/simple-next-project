import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function NotFound() {

    const router = useRouter()

    useEffect(() => {
        // console.log("object")
        setTimeout(()=>{
            // router.go(-1)
            router.push("/")
        },3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Oooops....</h1>
            <h2>That Page connot be found!</h2>
            <p>Go back to the <Link href="/"><a >Home Page</a></Link></p>
        </div>
    )
}

export default NotFound
