import db from "../utilities/db.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navBar">
      <div className="navBarContainer">
        <Link className="logoLink" to="/">
          <h1 className="tituloLogo">
            Grey<span className="tituloSpan">dive Tester</span>
          </h1>
        </Link>
        <div className="buttons">
          {db.map((item, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  navigate(
                    `/${item.cliente}/${item.idVideo}/tester${index + 1}`
                  )
                }
              >
                Test {index + 1}: {item.cliente}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
