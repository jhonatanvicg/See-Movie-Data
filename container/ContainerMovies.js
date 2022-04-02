import Row from "./Row";

const ContainerMovies = () => {
  return ( 
    <div className="ContainerMovies" on>
        <Row rowTitle={"Top Popular"} Topic={"TopMovies"} />
        <Row rowTitle={"Action"} />
        <Row rowTitle={"Love"} />
        <Row rowTitle={"Comedy"} />
        <Row rowTitle={"Sci-fi"} />
    </div>
   );
}
 
export default ContainerMovies;