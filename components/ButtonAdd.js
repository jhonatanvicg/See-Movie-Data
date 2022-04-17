import { useContext } from "react"
import { FaPlus } from "react-icons/fa"
import AppContext from "../context/AppContext"


const ButtonAdd = ( { movie } ) => {

  const { addFavoriteMovie } = useContext(AppContext)


  const handleAdd = ()=>{
    addFavoriteMovie(movie)
  }

  return ( 
    <div className="Filter__Movie__Options__Icons Filter__Movie__Options__Icons--Add" onClick={()=>handleAdd()}>
      <FaPlus />
    </div>
   );
}
 
export default ButtonAdd;