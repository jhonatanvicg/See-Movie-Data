import { FaTimes } from "react-icons/fa"
import ButtonAdd from "./ButtonAdd";
import Button from "./Button";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
const base_url = "https://image.tmdb.org/t/p/original/"


const Modal = () => {

  const [modalData, setModalData] = useState({})
  const [arrGenres,setArrGenres] = useState([])
  const {closeModal,modalWrapperAnimation,modalAnimation, getModalData} = useContext(AppContext)
  const genres = [{
                    "id":28,"name":"Action"
                  },{
                    "id":12,"name":"Adventure"
                  },{
                    "id":16,"name":"Animation"
                  },{
                    "id":35,"name":"Comedy"
                  },{
                    "id":80,"name":"Crime"
                  }, {
                    "id":99,"name":"Documentary"
                  },{
                    "id":18,"name":"Drama"
                  },{
                    "id":10751,"name":"Family"
                  }, {
                    "id":14,"name":"Fantasy"
                  }, {
                    "id":36,"name":"History"
                  },{
                    "id":27,"name":"Horror"
                  },  {
                    "id":10402,"name":"Music"
                  },{
                    "id":9648,"name":"Mystery"
                  },{
                    "id":10749,"name":"Romance"
                  },{
                    "id":878,"name":"Science Fiction"
                  },{
                    "id":10770,"name":"TV Movie"
                  },{
                    "id":53,"name":"Thriller"
                  },{
                    "id":10752,"name":"War"
                  },{
                    "id":37,"name":"Western"
                }]

  
  const handleClick = ()=>{
      closeModal()
  }

  const getMovieName = ()=>{
    let name = 'Uknown'
    if(modalData.title != undefined ){
      name = modalData.title
    }else if(modalData.name != undefined){
      name = modalData.name
    }else{
      name = modalData.original_name
    }

    return name;
  }

  const getMovieImage = ()=>{
    let path = ''
    if(modalData.backdrop_path!=undefined){
      path = modalData.backdrop_path;
    }else if(modalData.poster_path!=undefined){
      path= modalData.poster_path
    }

    if(path==''){
      path = "/images/placeholder.png"
    }else{
      path = base_url+path
    }

    return path;
  }
  

  const getMovieMedia = ()=>{
    let mediaType = ''
    if(modalData.media_type == undefined){
      mediaType = 'Uknown'
    }else if( modalData.media_type == 'tv'){
      mediaType = 'TV Serie'
    }else{
      mediaType = modalData.media_type
    }

    return mediaType
  }

  const getGenres = (genresData)=>{
    if(genresData != undefined){
      let genresArr = []
      genresData.forEach((el,index)=>{
        genres.forEach((elementGenre,indexGenre)=>{
          if(elementGenre.id == el){
            genresArr.push(elementGenre.name)
          }
        })
      })
      setArrGenres(genresArr)
    }
  }

  useEffect(()=>{
    setModalData(getModalData())
    getGenres(modalData.genre_ids)
    console.log("Esta es la data del modal: ",modalData)
  },[modalWrapperAnimation])
  
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
              <ButtonAdd movie={modalData} />
            </div>
          </div>
          <img className="Modal__Banner__Image" src={getMovieImage()} alt="" />
        </div>
        <div className="Modal__Main-Info">
          <div className="Modal__Main-Info__Title">
            <p>{getMovieName()}</p>
          </div>
          <div className="Modal__Main-Info__Description">
            {modalData.overview}
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
                <div className="General__Item--Value">{modalData.release_date == undefined ? modalData.first_air_date : modalData.release_date}</div>
              </div>
              <div className="General__Item">
                <p className="General__Item--String">Media Type:</p>
                <div className="General__Item--Value">{getMovieMedia()}</div>
              </div>
              <div className="General__Item General__Item--Genres">
                <p className="General__Item--Genres--String">Genres: </p>
                {

                  arrGenres.map((genre)=>(
                    <p className="Item__Genre">{genre}</p>
                  ))
                }
              </div>
            </div>
          </div>
      </div>
    </div>
   );
}
 
export default Modal;