import { motion } from "framer-motion"
import ButtonPlay from "./ButtonPlay"
import ButtonAdd from "./ButtonAdd"
import { AiOutlineDown } from "react-icons/ai";
import { FaPlus } from "react-icons/fa"
import AppContext from "../context/Appcontext";
import { useContext } from "react";



const RowItem = ({Topic}) => {
  let action = "GoMovie";

  const { openModal } = useContext(AppContext)

  const handleMovie = ()=>{
    switch(action){
      case "DisplayModal":
        console.log("Desplegando Modal")
        action = "GoMovie"
        openModal()
      break;
      case "AddMovie":
        console.log("Agregando peicula")
        action = "GoMovie"
      break;
      case "PlayTrailer":
        console.log("Yendo a tariler")
        action = "GoMovie"
      break;
      case "GoMovie":
        console.log("Yendo a pelicua")
        action = "GoMovie"
        openModal()

      break;
    }
  }

  return ( 
    <motion.div onClick={()=>handleMovie()} className={`RowItem ${Topic}`}>
      <div className="Item__Filter">
        <div className="Filter__Movie">
          <div className="Filter__Movie__Options">
          <div onClick={()=>action="PlayTrailer"}  className="Filter__Movie__Options__Icons  Filter__Movie__Options__Icons--Play">
            <img src="/images/play-button-arrowhead.png" alt="" />
          </div>
            <div  onClick={()=>action="AddMovie"} className="Filter__Movie__Options__Icons Filter__Movie__Options__Icons--Add">
              <FaPlus />
            </div>
            <div onClick={()=>action="DisplayModal"}  className="Filter__Movie__Options__Icons Filter__Movie__Options__Icons--Modal ">
              <AiOutlineDown />
            </div>
          </div>
          <div className="Filter__Movie__Options__Title">
            <p>This is Title</p>
          </div>
        </div>
      </div>
      <img className="RowItem__Poster" src="/images/avengers_endgame.jpg" alt="" />
    </motion.div>
   );
}
 
export default RowItem;