import { motion } from "framer-motion"
import ButtonPlay from "./ButtonPlay"
import ButtonAdd from "./ButtonAdd"
import { AiOutlineDown } from "react-icons/ai";
import { FaPlus } from "react-icons/fa"
import AppContext from "../context/AppContext";
import { useContext, useRef, useState } from "react";
import Router from "next/router";
const base_url = "https://image.tmdb.org/t/p/original/"



const RowItem = ({Topic, movie}) => {
  let action = "GoMovie";
  const { openModal , setModalData, addFavoriteMovie } = useContext(AppContext)
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

  const getMovieImage = ()=>{
    let path = ''
    if(movie.backdrop_path!=undefined){
      path = movie.backdrop_path;
    }else if(movie.poster_path!=undefined){
      path= movie.poster_path
    }

    if(path==''){
      path = "/images/placeholder.png"
    }else{
      path = base_url+path
    }

    return path;
  }

  const handleClickDown = ()=>{
    setItemPosition(itemReference.current.getBoundingClientRect().x)
  }
  
  const handleClickUp = ()=>{
    if(itemReference.current.getBoundingClientRect().x == itemPosition){
      setTimeout(()=>{
        handleMovie()
      },
        100       
      )
    }
  }

  const handleMovie = ()=>{
    switch(action){
      case "DisplayModal":
        action = "GoMovie"
        setModalData(movie)
        openModal()
      break;
      case "AddMovie":
        addFavoriteMovie(movie)
        action = "GoMovie"
      break;
      case "PlayTrailer":
        action = "GoMovie"
        Router.push(`/SeeMovie/${getMovieName()}`)
      break;
      case "GoMovie":
        action = "GoMovie"
        setModalData(movie)
        openModal()

      break;
    }
  }

 

  const opts = {
    height: '0',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };



  return ( 
    <div  onMouseDown={()=>handleClickDown()} ref={itemReference}  onMouseUp={()=>{handleClickUp()}} className={`RowItem ${Topic}`}>
      <div className="Item__Filter">
        <div className="Filter__Movie">
          <div className="Filter__Movie__Options">
            <div onClick={()=>action="PlayTrailer"}  className="Filter__Movie__Options__Icons  Filter__Movie__Options__Icons--Play">
              <img src="/images/play-button-arrowhead.png" alt="" />
            </div>
            <div  onClick={()=>{
              action="AddMovie"}} className="Filter__Movie__Options__Icons Filter__Movie__Options__Icons--Add">
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
      <img  className="RowItem__Poster" src={getMovieImage()} alt="" />
    </div>
   );
}
 
export default RowItem;