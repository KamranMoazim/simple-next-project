import '../styles/globals.css'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </Layout>
  )
}

export default MyApp
