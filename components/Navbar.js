import { useContext, useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import axios from "../hooks/useAxios"
import requests from "../hooks/useRequests";
import AppContext from "../context/AppContext";
import Link from "next/link";

const Navbar = ()=>{


  const [NavbarScreen,setNavbarScreen] = useState(false);
  const[screenSize,setScreenSize] = useState({width:0});
  const[showNavbar,setShowNavbar] = useState(true);
  const [search,setSearch] = useState('')
  const { setListSearch } = useContext(AppContext)
  

  const handleNavbarMin = ()=>{
    setNavbarScreen(!NavbarScreen)
  }

  const getDimensions  = ()=>{
    setScreenSize({width:window.innerWidth})
  }

  const handleShowNavbar = (valueBoolean)=>{
    setShowNavbar(valueBoolean)

  }

  const getSearch = async()=>{
    try{
      let response = await axios.get(requests.fetchSearch+search+"&page=1")
      setListSearch(response.data.results)
    }catch(error){
      console.log(error)
    }

  }


  const clickGoToSearch = ()=>{
    getSearch()
  }

  const handleSearch = (e)=>{
    if(e.target.value!=''){
      setSearch(e.target.value)
    }
  }

  const optionsClicked = ()=>{
    setNavbarScreen(false)
  }

  useEffect(()=>{

    window.addEventListener('scroll',()=>{
      if(window.scrollY > 100){
        handleShowNavbar(true)
      }else{
        handleShowNavbar(false)
      }
    })


    window.addEventListener('resize',getDimensions)

    return(()=>{
      window.removeEventListener("scroll",()=>{})
      window.removeEventListener('resize',getDimensions)
    })

  },[screenSize])




  return(
    <>
 

      <nav className={`Navbar__Wrapper ${showNavbar && "Navbar__Wrapper--Show"}`}>
          <div className="Navbar">
              <Link href="/">
                <div className="Navbar__Logo">
                      <p>Movies Data</p>
                      <img src="/images/popcorn-svgrepo-com.svg" alt="" />
                </div>
              </Link>
            <div className={ NavbarScreen == true && screenSize.width < 1176 ? "Navbar__Options--FullWindow" : "Navbar__Options"  }>
              <Link href="/" >
                <p onClick={()=>{optionsClicked()}}>Home</p>
              </Link>
              <Link href="/Movies">
                <p onClick={()=>{optionsClicked()}}>Movies</p>
              </Link>
              <Link href="/Series">
                <p onClick={()=>{optionsClicked()}}>TV Series</p>
              </Link>
              <Link href="/Favorites">
                  <p onClick={()=>{optionsClicked()}}>My Favorite's List</p>
              </Link>
            </div>



            <div className="Navbar__Search">
              <input onChange={handleSearch} className="Search__input" type="text" placeholder="Search..." />
              <Link href="/Search">
                <img src="/images/search.png" onClick={()=>clickGoToSearch()} alt="" />
              </Link>
            </div>
            <div className="Navbar__Min" onClick={()=>{handleNavbarMin()}}>
                <AiOutlineMenu size="30px" />
              </div>
          </div>

        </nav>
    </>
  )
}

export default Navbar;