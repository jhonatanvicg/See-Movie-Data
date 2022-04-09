import Row from "./Row";
import requests from "../hooks/useRequests";

const ContainerMovies = () => {



  return ( 
    <div className="ContainerMovies" >
        <Row rowTitle={"Movies Data Trending"} Topic={"TopMovies"} fetchUrl={requests.fetchTopRated} />
        <Row rowTitle={"Movie Data Originals"} fetchUrl={requests.fetchNetflixOriginals} />
        <Row rowTitle={"Trend"} fetchUrl={requests.fetchTrending} />
        <Row rowTitle={"Romance"} fetchUrl={requests.fetchRomanceMovies}/>
        <Row rowTitle={"Action"} fetchUrl={requests.fetchActionMovies} />
        <Row rowTitle={"Comedy"} fetchUrl={requests.fetchComedyMovies} />
        <Row rowTitle={"Horror"} fetchUrl={requests.fetchHorrorMovies} />
    </div>
   );
}
 
export default ContainerMovies;