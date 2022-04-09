import { useContext } from "react"
import Notification from "../components/Notification"

import Banner from '../components/Banner'
import ContainerMovies from '../container/ContainerMovies'
import Modal from '../components/Modal'
const HomePage = ()=>{


  return(
    <>
        <Notification   />
        <Modal />
        <Banner/>
        <ContainerMovies />
    </>
    )
}

export default HomePage