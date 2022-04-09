import { useContext, useEffect } from "react"
import { FaCheckCircle } from "react-icons/fa"
import { FaTimesCircle } from "react-icons/fa"
import AppContext from "../context/AppContext"


const Notification = () => {

  const { showNotification, typeNotification, textNotification, iconNotification } = useContext(AppContext)
  


  return ( 
    <div className={`Notification ${typeNotification} ${showNotification} `}>
      <p>{textNotification}</p>
      {
        iconNotification=="FaCheckCircle" ?
          <FaCheckCircle />
        :
        <FaTimesCircle />
      }
    </div>
   );
}
 
export default Notification;