import { useState } from "react"

const useModalState = () => {
  
  const[modalWrapperAnimation, setModalWrapperAnimation] = useState('Speed--Hidden')
  const[modalAnimation, setModalAnimation] = useState('')
  const[modalInfo, setModalInfo] = useState({})

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
  
  return {
    closeModal,
    openModal,
    modalWrapperAnimation,
    modalAnimation,
    setModalData,
    getModalData
  }
}
 
export default useModalState;