import { useParams } from "react-router-dom";
import db from "../utilities/db.json";
import Header from "./Header";
import Tareas from "./Tareas";
import Transcripcion from "./Transcripcion";
import Video from "./Video";

const Home = (props) => {
  const id = useParams();

  const filter = id && db.find((item) => item.cliente === id.id);
  console.log(filter);
  console.log(id.tester);
  console.log(filter.transcripcion.replace(/<br\s*[/]?>/gi, "\n"));

  return (
    <>
      <Header cliente={filter.cliente} tester={id.tester}></Header>
      <Video video={filter.linkVideo} idVideo={filter.idVideo}></Video>
      <Transcripcion transcripcion={filter.transcripcion}></Transcripcion>
      <Tareas tareas={filter.preguntas} escenario={filter.escenario}></Tareas>
    </>
  );
};

export default Home;
