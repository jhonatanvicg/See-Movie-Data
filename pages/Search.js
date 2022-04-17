import { useContext } from "react";
import RowItem from "../components/RowItem";
import AppContext from "../context/AppContext";
import Modal from "../components/Modal";
import Notification from "../components/Notification";
const Search = () => {
  
  const { listSearch } = useContext(AppContext)
  
  return ( 
    <>
      <Notification/>
      <Modal />
      <div className="Search">
        {
          listSearch.length == 0 ?
            <div className="Favorites__Empty">
              <img src="/images/money.png" alt="" />
              <p>Search Not Found</p>
            </div>
          :
            listSearch.map((movie)=>(
              <RowItem movie={movie} key={movie.id} Topic="Favorite--Movie__Item" />
            ))
        }
      </div>
    </>
   );
}
 
export default Search;