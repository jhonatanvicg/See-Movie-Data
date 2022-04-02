import { motion } from "framer-motion"


const RowItem = ({Topic}) => {
  return ( 
    <motion.div className={`RowItem ${Topic}`}>
      <div className="Item__Filter"></div>
      <img src="/images/avengers_endgame.jpg" alt="" />
    </motion.div>
   );
}
 
export default RowItem;