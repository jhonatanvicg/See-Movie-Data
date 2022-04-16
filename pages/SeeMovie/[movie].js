import {useEffect, useState} from 'react';
import movieTrailer from "movie-trailer";
import ReactPlayer from 'react-player';
import {useRouter} from "next/router";


const SeeMovie = () => {

    const[movieTitle,setMovieTitle] = useState('}');
    const router = useRouter();

    const getMovieUrl = (movieTitle)=>{
          movieTrailer(movieTitle).then((res)=>{
              if(res != null){
                  const urlParams = new URLSearchParams(new URL(res).search);
                  setMovieTitle(urlParams.get("v"))
              }else{
                  setMovieTitle('NotFind')
              }
          }).catch(error=>{
            console.log(error)
          })
      }


    useEffect(()=>{
        getMovieUrl(router.query.movie)
    },[router.query.movie])
    

    return ( 
        <div className="SeeMovie">
            {
                movieTitle=="NotFind" ?
                    <div className='SeeMovie--Error'>
                        <img src='/images/error-svgrepo-com.svg' />
                        <p>Sorry Movie Not available :(</p>
                    </div>
                :    
                    <div className="SeeMovie--Trailer">
                        <ReactPlayer 
                            width="100%"
                            height="100%"
                            url={`https://www.youtube.com/watch?v=${movieTitle}`}
                            controls={true}
                        />
                    </div>
        }
            
            
        </div>
     );
}
 
export default SeeMovie;