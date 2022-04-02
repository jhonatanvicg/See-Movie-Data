const Button = ( {classButton, imageSrc, textButton} ) => {
  console.log("Este es el prop: ",classButton)
  return ( 
    <div className={`Btn ${classButton}`}>
      <img className="Play__Button" src={imageSrc} alt="" />
      {textButton}
    </div>
   );
}
 
export default Button;