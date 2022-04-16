import { useState } from "react"
import movieTrailer from "movie-trailer"

const initialFavoriteMoviesState = {
  movieList: []
}

const useModalState = () => {

  const[modalWrapperAnimation, setModalWrapperAnimation] = useState('Speed--Hidden')
  const[modalAnimation, setModalAnimation] = useState('')
  const[modalInfo, setModalInfo] = useState({})
  const[ favoriteMovies , setFavoriteMovies ]= useState(initialFavoriteMoviesState)
  const[listSearch , setListSearch] = useState('')
  const [showNotification,setShowNotification] = useState("Notification--Hidden")
  const [typeNotification,setTypeNotification] = useState()
  const [textNotification,setTextNotification] = useState()
  const [iconNotification,setIconNotification] = useState()
  const [globalID,setGlobalID] = useState('');

  const getMovieUrl = (movieTitle)=>{
    console.log("Recibiendo el titulo de la pelicula: ",movieTitle)
      movieTrailer(movieTitle).then((res)=>{
        const urlParams = new URLSearchParams(new URL(res).search);
        console.log("Parametro desde hook:",urlParams.get("v"))
        setGlobalID(urlParams.get("v"))
      }).catch(error=>{
        console.log(error)
      })
  }

  const closeModal = ()=>{
    setModalWrapperAnimation("Modal__Wrapper--Hidden")
    setModalAnimation("Modal--Hidden")
  }

  const openModal = ()=>{
    setModalWrapperAnimation("Modal__Wrapper--Show")
    setModalAnimation("Modal--Show")
    console.log("Abriendo el modal")
  }

  const setModalData = (movie)=>{
    setModalInfo(movie)
  }

  const getModalData = ()=>{
    return modalInfo
  }

  const ifExist = (id)=>{
    let movieDuplicated = false;

    favoriteMovies.movieList.forEach(movie=>{
      if(movie.id == id){
        movieDuplicated = true;
      }
    })

    return movieDuplicated;
  }

  const addFavoriteMovie = (movie)=>{
    const wouldAddMovie = ifExist(movie.id)

    if(!wouldAddMovie){

      setFavoriteMovies({
        ...favoriteMovies,
        movieList:[...favoriteMovies.movieList,movie]
      })
      setTypeNotification("Notification--Info")
      setTextNotification("Movie Added")
      setIconNotification("FaCheckCircle")
    }else{
      setTypeNotification("Notification--Danger")
      setTextNotification("Movie Alredy Added")
      setIconNotification("FaTimesCircle")

    }

    setShowNotification("Notification--Show")
    setTimeout(()=>{
      setShowNotification("Notification--Hidde")
    },1000)

  }
  
  return {
    closeModal,
    openModal,
    modalWrapperAnimation,
    modalAnimation,
    showNotification,
    typeNotification,
    textNotification,
    iconNotification,
    favoriteMovies,
    globalID,
    setGlobalID,
    setModalData,
    setListSearch,
    listSearch,
    getModalData,
    getMovieUrl,
    addFavoriteMovie
  }
}
 
export default useModalState;