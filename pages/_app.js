import App from 'next/app'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import WrapperHeader from '../container/WrapperHeader'
import ContainerMovies from '../container/ContainerMovies'
import Modal from '../components/Modal'
import '../styles.css'


function MyApp({ Component, pageProps }) {

  

  return(
    <>
        <Modal />
        <Navbar />
        <Banner/>
    <ContainerMovies />
      <Component {...pageProps} />
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp