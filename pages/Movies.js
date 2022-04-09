import Modal from "../components/Modal";
import Banner from "../components/Banner";
import Notification from "../components/Notification";
import ContainerMovies from "../container/ContainerMovies";
const Movies = () => {
  return ( 
    <>
      <Notification/>
      <Modal />
      <Banner />
      <ContainerMovies from="Movies" />
    </>
   );
}
 
export default Movies;