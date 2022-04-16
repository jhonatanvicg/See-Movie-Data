import Link from "next/link";

const ButtonPlay = () => {


  const handlePlay = ()=>{
    console.log("Dandole Play")
  }

  return ( 
    <Link href="/SeeMovie">
      <div  className="Filter__Movie__Options__Icons  Filter__Movie__Options__Icons--Play">
        <img src="/images/play-button-arrowhead.png" alt="" />
      </div>
    </Link>
   );
}
 
export default ButtonPlay;