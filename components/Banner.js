import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import Button from "./Button";
import axios from "./../hooks/useAxios";
import requests from "../hooks/useRequests";
import AppContext from "../context/AppContext";
const base_url = "https://image.tmdb.org/t/p/original/";



const Banner = () => {

  const [bannerInfo, setBannerInfo] = useState({})
  const { openModal , setModalData } = useContext(AppContext)


  const handleMoreInfo = (movie)=>{
    setModalData(movie)
    openModal()
  }

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
          <Button 
            classButton={"Btn--Play"} 
            imageSrc={"/images/play-svgrepo-com.svg"} 
            textButton={"Play"}
            movieTitle={getMovieName()} 
          />
          <div onClick={()=>handleMoreInfo(bannerInfo)} className={`Btn Btn--MoreInfo`}>
            <img className="Play__Button" src="/images/more.png" alt="" />
            More Info
          </div>
        </div>
      </div>
      <img className="Banner__Image" src={`${base_url}${bannerInfo.backdrop_path}`} alt="" />
    </div>
   );
}
 
export default Banner;