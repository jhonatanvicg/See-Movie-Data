import RowItem from "../components/RowItem";
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import axios from "./../hooks/useAxios"

const Row = ({sectionRow, rowTitle,Topic, fetchUrl}) => {

  const [width,setWidth] = useState(0);
  const rowReference = useRef()
  const [movies,setMovies] = useState([])

  useEffect(()=>{
    
    async function getData(){
      const request = await axios.get(fetchUrl) 
      setMovies(request.data.results)
      let moviesLength = request.data.results.length * 230;
      setWidth(moviesLength)
      return request
    } 
    getData()
  },[])

  return ( 
    <motion.div  className={`Row ${sectionRow}`}>
      <p className="Row__Name">{rowTitle}</p>
      <motion.div ref={rowReference} className="Row__Inner" dragConstraints={{right:0,left:- width}} drag="x">
        {
          movies.map(movie=>(
            <RowItem key={`${Topic}-${movie.id}`} Topic={Topic} movie={movie} />
          ))
        }
      </motion.div>
    </motion.div>
   );
}
 
export default Row;