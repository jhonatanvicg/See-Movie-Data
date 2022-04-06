import App from 'next/app'
import AppContext from '../context/AppContext'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import WrapperHeader from '../container/WrapperHeader'
import ContainerMovies from '../container/ContainerMovies'
import Modal from '../components/Modal'
import useModalState from '../hooks/useModalState'
import '../styles.css'


function MyApp({ Component, pageProps }) {

  const initialModalState = useModalState()

  return(
    <AppContext.Provider value={initialModalState}>
        <Modal />
        <Navbar />
        <Banner/>
        <ContainerMovies />
      <Component {...pageProps} />
    </AppContext.Provider>
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