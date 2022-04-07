import { motion } from "framer-motion"
import ButtonPlay from "./ButtonPlay"
import ButtonAdd from "./ButtonAdd"
import { AiOutlineDown } from "react-icons/ai";
import { FaPlus } from "react-icons/fa"
import AppContext from "../context/AppContext";
import { useContext, useRef, useState } from "react";
const base_url = "https://image.tmdb.org/t/p/original/"



const RowItem = ({Topic, movie}) => {
  let action = "GoMovie";
  const { openModal , setModalData } = useContext(AppContext)
  const [itemPosition,setItemPosition] = useState()
  const itemReference = useRef()

  const getMovieName = ()=>{
    let name = 'Uknown'
    if(movie.title != undefined ){
      name = movie.title
    }else if(movie.name != undefined){
      name = movie.name
    }else{
      name = movie.original_name
    }

    return name;
  }

  const handleClickDown = ()=>{
    console.log("Estamos en down")
    setItemPosition(itemReference.current.getBoundingClientRect().x)
  }
  
  const handleClickUp = ()=>{
    console.log("Estamos en up")
    if(itemReference.current.getBoundingClientRect().x == itemPosition){
      handleMovie()
    }
  }

  const handleMovie = ()=>{
    switch(action){
      case "DisplayModal":
        console.log("Desplegando Modal")
        action = "GoMovie"
        setModalData(movie)
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
        setModalData(movie)
        openModal()

      break;
    }
  }


  return ( 
    <motion.div onMouseDown={()=>handleClickDown()} ref={itemReference}  onMouseUp={()=>{handleClickUp()}} className={`RowItem ${Topic}`}>
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
            <p>{getMovieName() }</p>
          </div>
        </div>
      </div>
      <img className="RowItem__Poster" src={`${base_url}${movie.poster_path}`} alt="" />
    </motion.div>
   );
}
 
export default RowItem;