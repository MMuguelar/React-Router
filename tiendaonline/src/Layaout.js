import "./App.css";

import { Link, Outlet } from "react-router-dom";
function Layaout() {
  return (
    <>
      <>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/detalle">Productos</Link>
          <Link to="/contacto">Contacto</Link>


        </nav>
        <Outlet />
      </>
    </>
  );
}

export default Layaout;
