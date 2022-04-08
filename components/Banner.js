import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "./../hooks/useAxios";
import requests from "../hooks/useRequests";
const base_url = "https://image.tmdb.org/t/p/original/";



const Banner = () => {

  const [bannerInfo, setBannerInfo] = useState({})

  useEffect(()=>{
    async function getDataBanner(){
      const request = await axios.get(requests.fetchTrending)
      let randomPick = Math.floor( Math.random() * (request.data.results.length - 0) + 0)
      setBannerInfo(request.data.results[randomPick])
    }

    getDataBanner()
  },[])

  const getMovieName = ()=>{
    let name = 'Uknown'
    if(bannerInfo.title != undefined ){
      name = bannerInfo.title
    }else if(bannerInfo.name != undefined){
      name = bannerInfo.name
    }else{
      name = bannerInfo.original_name
    }

    return name;
  }

  return ( 
    <div className="Banner">
      <div className="Banner__Filter"></div>
      <div className="Banner__Info">
        <h1>{getMovieName()}</h1>
        <p>
          {bannerInfo.overview}
        </p>
        <div className="Banner__Buttons">
          <Button classButton={"Btn--Play"} imageSrc={"/images/play-svgrepo-com.svg"} textButton={"Play"} />
          <Button classButton={"Btn--MoreInfo"} imageSrc={"/images/more.png"} textButton={"More Info"} />
        </div>
      </div>
      <img className="Banner__Image" src={`${base_url}${bannerInfo.backdrop_path}`} alt="" />
    </div>
   );
}
 
export default Banner;