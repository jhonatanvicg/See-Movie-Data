import RowItem from "../components/RowItem";
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";

const Row = ({sectionRow, rowTitle,Topic}) => {

  const [width,setWidth] = useState(0);
  const rowReference = useRef()

  useEffect(()=>{
    setWidth(rowReference.current.scrollWidth - rowReference.current.offsetWidth)
  },[])

  return ( 
    <motion.div  className={`Row ${sectionRow}`}>
      <p className="Row__Name">{rowTitle}</p>
      <motion.div ref={rowReference} className="Row__Inner" dragConstraints={{right:0,left:-width}} drag="x">
        <RowItem Topic={Topic}/>
        <RowItem Topic={Topic}/>
        <RowItem Topic={Topic}/>
        <RowItem Topic={Topic}/>
        <RowItem Topic={Topic}/>
        <RowItem Topic={Topic}/>
        <RowItem Topic={Topic}/>
        <RowItem Topic={Topic}/>
        <RowItem Topic={Topic}/>
      </motion.div>
    </motion.div>
   );
}
 
export default Row;