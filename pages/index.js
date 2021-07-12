import Head from 'next/head'
import Link from 'next/link'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
// import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      {/* <Navbar /> */}
      <Head>
        <title>
          Kamran Ninjas Title Page
        </title>
        <meta name="description" content="Kamran Ninjas Title Page Kamran Ninjas Title Page Kamran Ninjas Title Page" />
      </Head>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
      </p>
      <p className={styles.text}>
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
      </p>
      {/* <Footer /> */}
      <Link href="/ninjas">
        <a className={styles.btn}>See Kam Ninjas</a>
      </Link>
    </div>
  )
}
