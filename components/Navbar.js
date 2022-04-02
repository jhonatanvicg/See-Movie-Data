import { useEffect, useState } from "react"

const Navbar = ()=>{


  const [NavbarScreen,setNavbarScreen] = useState(false);
  const[screenSize,setScreenSize] = useState({width:0});
  const[showNavbar,setShowNavbar] = useState(true);
  

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
            <div className="Navbar__Logo">
              <p>Movies Data</p>
              <img src="/images/popcorn-svgrepo-com.svg" alt="" />
            </div>

            <div className={ NavbarScreen == true && screenSize.width < 1176 ? "Navbar__Options--FullWindow" : "Navbar__Options"  }>
              <p>Home</p>
              <p>Movies</p>
              <p>TV Series</p>
              <p>My Favorite's List</p>
            </div>



            <div className="Navbar__Search">
              <input className="Search__input" type="text" placeholder="Search..." />
              <img src="/images/search-svgrepo-com.svg" alt="" />
            </div>
          </div>

        </nav>
    </>
  )
}

export default Navbar;