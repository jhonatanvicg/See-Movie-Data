import Row from "./Row";
import requests from "../hooks/useRequests";

const ContainerMovies = ({ from }) => {



  return ( 
    <div className="ContainerMovies" >
      {
        from=="index" ?
          <>
            <Row rowTitle={"Movies Data Trending"} Topic={"TopMovies"} fetchUrl={requests.fetchTopRated} />
            <Row rowTitle={"Movie Data Originals"} fetchUrl={requests.fetchNetflixOriginals} />
            <Row rowTitle={"Trend"} fetchUrl={requests.fetchTrending} />
            <Row rowTitle={"Romance"} fetchUrl={requests.fetchRomanceMovies}/>
            <Row rowTitle={"Action"} fetchUrl={requests.fetchActionMovies} />
            <Row rowTitle={"Comedy"} fetchUrl={requests.fetchComedyMovies} />
            <Row rowTitle={"Horror"} fetchUrl={requests.fetchHorrorMovies} />
          </>
        : from=="Movies" ?
          requests.arrGenresMoviesId.map(genreElement =>(
            <Row rowTitle={genreElement.name} fetchUrl={requests.fetchMovieByGenre + genreElement.id} />
            ))
            :
            requests.arrGenresTVId.map(genreElement =>(
              <Row rowTitle={genreElement.name} fetchUrl={requests.fetchTVByGenre + genreElement.id} />
            ))
          
          
        

      }
    </div>
   );
}
 
export default ContainerMovies;