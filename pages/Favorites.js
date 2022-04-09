import { useContext, useState } from "react";
import RowItem from "../components/RowItem";
import AppContext from "../context/AppContext";


const Favorites = () => {

  const [localMovies,setLocalMovies] = useState()
  const { favoriteMovies } = useContext(AppContext);


  return ( 
    <div className="Favorites">
      {
        favoriteMovies.movieList.length == 0 ?

        <div className="Favorites__Empty">
          <img src="/images/money.png" alt="" />
          <p>Your List is Empty</p>
        </div>

        :

        favoriteMovies.movieList.map((movie)=>(
          <RowItem movie={movie} Topic="Favorite--Movie__Item" />
        ))
      }
    </div>
   );
}
 
export default Favorites;