import Image from "next/image";
import Button from "./Button";

const Banner = () => {
  return ( 
    <div className="Banner">
      <div className="Banner__Filter"></div>
      <div className="Banner__Info">
        <h1>A very Long Long Long Long Movie Title</h1>
        <p>
          A tragically separated couple must find each other in another life 
          to break a spell on their town, but the arrival of two tourists threaten their
        </p>
        <div className="Banner__Buttons">
          <Button classButton={"Btn--Play"} imageSrc={"/images/play-svgrepo-com.svg"} textButton={"Play"} />
          <Button classButton={"Btn--MoreInfo"} imageSrc={"/images/more.png"} textButton={"More Info"} />
        </div>
      </div>
      <img className="Banner__Image" src="/images/red.jpg" alt="" />
    </div>
   );
}
 
export default Banner;