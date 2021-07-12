import React from 'react'

export const getStaticPaths = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const finalData = await data.json();
    const paths = finalData.map((ninja)=>{
        return {
            params: {
                id: ninja.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    // const data = await fetch("https://jsonplaceholder.typicode.com/users/"+id)
    const finalData = await data.json();
    return {
        props : {
            ninja: finalData
        }
    }
}

function Id({ninja}) {
    return (
        <div>
            <h1>{ninja.name}</h1>
            <h3>Email : {ninja.email}</h3>
            <h3>Website : {ninja.website}</h3>
            <h3>City : {ninja.address.city}</h3>
        </div>
    )
}

export default Id
