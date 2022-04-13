import { useContext, useEffect, useState } from "react"
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
    console.log("Presionando el boton del navbar")
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
      <div className="Navbar__Min">
        <p>Discover</p>
        <img src="/images/left-arrow-svgrepo-com.svg" alt="" onClick={()=> handleNavbarMin() }/>
      </div>

      <nav className={`Navbar__Wrapper ${showNavbar && "Navbar__Wrapper--Show"}`}>
          <div className="Navbar">
              <Link href="/">
                <div className="Navbar__Logo">
                      <p>Movies Data</p>
                      <img src="/images/popcorn-svgrepo-com.svg" alt="" />
                </div>
              </Link>

            <div className={ NavbarScreen == true && screenSize.width < 1176 ? "Navbar__Options--FullWindow" : "Navbar__Options"  }>
              <Link href="/">
                <p>Home</p>
              </Link>
              <Link href="/Movies">
                <p>Movies</p>
              </Link>
              <Link href="/Series">
                <p>TV Series</p>
              </Link>
              <Link href="/Favorites">
                  <p>My Favorite's List</p>
              </Link>
            </div>



            <div className="Navbar__Search">
              <input onChange={handleSearch} className="Search__input" type="text" placeholder="Search..." />
              <Link href="/Search">
                <img src="/images/search-svgrepo-com.svg" onClick={()=>clickGoToSearch()} alt="" />
              </Link>
            </div>
          </div>

        </nav>
    </>
  )
}

export default Navbar;