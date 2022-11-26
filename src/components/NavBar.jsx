import db from "../utilities/db.json";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      {db.map((item, index) => (
        <div key={index}>
          <button onClick={() => navigate(`/${item.cliente}/${item.idVideo}/tester${index+1}`)}>
            Boton + {item.cliente}
          </button>
        </div>
      ))}
    </>
  );
};

export default NavBar;
