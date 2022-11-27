import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Bienvenida from "./components/Bienvenida";
import './styles/navBar.css'
import './styles/bienvenida.css'
import './styles/header.css'
import './styles/video.css'
import './styles/transcripcion.css'
import './styles/tareas.css'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Bienvenida></Bienvenida>}></Route>
        <Route path="/:id/:idVideo/:tester" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
