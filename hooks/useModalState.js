import { useState } from "react"

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


  const closeModal = ()=>{
    setModalWrapperAnimation("Modal__Wrapper--Hidden")
    setModalAnimation("Modal--Hidden")
  }

  const openModal = ()=>{
    console.log("Estamos abriendo el modals")
    setModalWrapperAnimation("Modal__Wrapper--Show")
    setModalAnimation("Modal--Show")
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
    setModalData,
    setListSearch,
    listSearch,
    getModalData,
    addFavoriteMovie
  }
}
 
export default useModalState;