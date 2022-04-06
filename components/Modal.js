import { FaTimes } from "react-icons/fa"
import ButtonAdd from "./ButtonAdd";
import Button from "./Button";
import { useContext, useState } from "react";
import AppContext from "../context/Appcontext";

const Modal = () => {

  const {closeModal,modalWrapperAnimation,modalAnimation} = useContext(AppContext)
  const handleClick = ()=>{
      closeModal()
  }
  
  return ( 
    <div className={`Modal__Wrapper ${modalWrapperAnimation}`}>
      <div className={`Modal ${modalAnimation}`}>
        <div className="Close__Modal" onClick={()=>{handleClick()}}>
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
              <img src="/images/popcorn-svgrepo-com.svg" alt="" />
            </div>
            <div className="Extra-Info__General">
              <div className="General__Item">
                <p className="General__Item--String">Release Date:</p>
                <div className="General__Item--Value">1999-10-15</div>
              </div>
              <div className="General__Item">
                <p className="General__Item--String">Duration:</p>
                <div className="General__Item--Value">139 Minutes</div>
              </div>
              <div className="General__Item General__Item--Genres">
                <p className="General__Item--Genres--String">Genres: </p>
                <p className="Item__Genre">Drama</p>
                <p className="Item__Genre">Action</p>
                <p className="Item__Genre">Comedy</p>
              </div>
            </div>
          </div>
      </div>
    </div>
   );
}
 
export default Modal;