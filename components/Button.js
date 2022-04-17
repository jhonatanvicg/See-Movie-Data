import Router from "next/router";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const Button = ( {classButton, imageSrc, textButton,movieTitle} ) => {

  const { closeModal } = useContext(AppContext)

  const playMovie = ()=>{
    closeModal()
    Router.push(`/SeeMovie/${movieTitle}`)
  }


  return ( 
    <div onClick={()=>playMovie()} className={`Btn ${classButton}`}>
      <img className="Play__Button" src={imageSrc} alt="" />
      {textButton}
    </div>
   );
}
 
export default Button;