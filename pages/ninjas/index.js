import React from 'react'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const finalData = await data.json();
    return {
        props : {
            ninjas: finalData
        }
    }
}

function index({ninjas}) {

    // console.log(ninjas)

    return (
        <div>
            <h1>All Kam Ninjas</h1>
            {ninjas.map(ninja=>{
                return <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>
                            {ninja.name}
                        </h3>
                    </a>
                </Link>
            })}
        </div>
    )
}

export default index
