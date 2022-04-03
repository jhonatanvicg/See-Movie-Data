import { AiOutlineDown } from "react-icons/ai"


const ButtonModal = () => {

  const handleModal = ()=>{
    console.log("Modal")
  }


  return ( 
    <div  className="Filter__Movie__Options__Icons Filter__Movie__Options__Icons--Modal ">
      <AiOutlineDown />
    </div>
   );
}
 
export default ButtonModal;