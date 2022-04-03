import { FaPlus } from "react-icons/fa"


const ButtonAdd = () => {

  const handleAdd = ()=>{
    console.log("Add")
  }

  return ( 
    <div className="Filter__Movie__Options__Icons Filter__Movie__Options__Icons--Add">
      <FaPlus />
    </div>
   );
}
 
export default ButtonAdd;