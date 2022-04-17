import RowItem from "../components/RowItem";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import axios from "./../hooks/useAxios"

const Row = ({ sectionRow, rowTitle,Topic, fetchUrl, sectionArrow}) => {

  const itemWidth = 230;
  const rowInnerReference = useRef()
  const rowReference = useRef()
  const [movies,setMovies] = useState([])
  useEffect(()=>{

      async function getData(){
        const request = await axios.get(fetchUrl) 
        setMovies(request.data.results)
        return request
      } 
      getData()
  },[])

  const getVisibleItems = ()=>{
    return Math.floor(rowInnerReference.current.offsetWidth/itemWidth)
  }

  const scrollRow = (direction)=>{
    if(direction=="Right"){
      rowReference.current.scrollLeft += getVisibleItems() * itemWidth
    }else{
      rowReference.current.scrollLeft -= getVisibleItems() * itemWidth
    }
  }

  const handleLeftArrow = ()=>{
    scrollRow("Left")
  }
  
  const handleRightArrow = ()=>{
    scrollRow("Right")
  }

  return ( 
    <div  className={`Row ${sectionRow}`}>
      <p className="Row__Name">{rowTitle}</p>
      <div onClick={()=>{handleLeftArrow()}} className={`Row__Arrow-Left ${sectionArrow}`}>
        <FaArrowLeft fontSize={"20px"} color="white" />
      </div>
      <div ref={rowReference} className="Row__Helper">        
        <div ref={rowInnerReference} className="Row__Inner">
          {
            movies.map(movie=>(
              <RowItem  key={`${Topic}-${movie.id}`} Topic={Topic} movie={movie} />
            ))
          }
        </div>
      </div>
      <div onClick={()=>{handleRightArrow()}} className={`Row__Arrow-Right ${sectionArrow}`}>
        <FaArrowRight fontSize={"20px"} color="white" />
      </div>
      </div>
   );
}
 
export default Row;