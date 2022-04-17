import Row from "./Row";
import requests from "../hooks/useRequests";

const ContainerMovies = ({ from }) => {



  return ( 
    <div className="ContainerMovies" >
      {
        from=="index" ?
          <>
            <Row rowTitle={"Movies Data Trending"} Topic={"TopMovies"} fetchUrl={requests.fetchTopRated} sectionArrow="Arrow__Top-Movies" />
            <Row rowTitle={"Movie Data Originals"} fetchUrl={requests.fetchNetflixOriginals} sectionArrow="Arrow__Normal" />
            <Row rowTitle={"Trend"} fetchUrl={requests.fetchTrending} sectionArrow="Arrow__Normal" />
            <Row rowTitle={"Romance"} fetchUrl={requests.fetchRomanceMovies} sectionArrow="Arrow__Normal"/>
            <Row rowTitle={"Action"} fetchUrl={requests.fetchActionMovies} sectionArrow="Arrow__Normal" />
            <Row rowTitle={"Comedy"} fetchUrl={requests.fetchComedyMovies} sectionArrow="Arrow__Normal" />
            <Row rowTitle={"Horror"} fetchUrl={requests.fetchHorrorMovies} sectionArrow="Arrow__Normal" />
          </>
        : from=="Movies" ?
          requests.arrGenresMoviesId.map(genreElement =>(
            <Row rowTitle={genreElement.name} fetchUrl={requests.fetchMovieByGenre + genreElement.id} sectionArrow="Arrow__Normal" />
            ))
            :
            requests.arrGenresTVId.map(genreElement =>(
              <Row rowTitle={genreElement.name} fetchUrl={requests.fetchTVByGenre + genreElement.id} sectionArrow="Arrow__Normal" />
            ))
          
          
        

      }
    </div>
   );
}
 
export default ContainerMovies;