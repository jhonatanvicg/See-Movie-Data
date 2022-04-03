import { FaTimes } from "react-icons/fa"
import ButtonAdd from "./ButtonAdd";
import Button from "./Button";

const Modal = () => {
  return ( 
    <div className="Modal">
      <div className="Close__Modal">
        <FaTimes />
      </div>
      <div className="Modal__Banner">
        <div className="Modal__Banner__Filter">
          <div className="Banner__Filter__Container-Button">
            <Button classButton={"Btn--Play"} imageSrc={"/images/play-svgrepo-com.svg"} textButton={"Play"}  />
            <ButtonAdd />
          </div>
        </div>
        <img className="Modal__Banner__Image" src="/images/halo_serie.webp" alt="" />
      </div>
      <div className="Modal__Main-Info">
        <div className="Modal__Main-Info__Title">
          <p>This is the title jijijiji</p>
        </div>
        <div className="Modal__Main-Info__Description">
          Stranded at a rest stop in the mountains during a blizzard, a recovering addict 
          discovers a kidnapped child hidden in a car belonging to one of the people inside 
          the building which sets her on a terrifying struggle to identify who among them is the kidnapper
        </div>
      </div>
      <div className="Modal__Extra-Info">
          <div className="Extra-Info__Title">
            About Movie Title
          </div>
        </div>
    </div>
   );
}
 
export default Modal;