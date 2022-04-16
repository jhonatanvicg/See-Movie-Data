import Router from "next/router";
const Button = ( {classButton, imageSrc, textButton,movieTitle} ) => {

  const playMovie = ()=>{
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