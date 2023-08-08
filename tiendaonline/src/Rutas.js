import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Productos from "./components/productos";
import Detalle from "./components/detalle";
import Contacto from "./components/contacto";
function Rutas() {
  return (
   <>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Layout />}>
                                    <Route index element={<Home />}></Route>
                                    <Route path="/Home" element={<Home />}></Route>
                                    <Route path="/productos" element={<Productos />}></Route>
                                    <Route path="/contacto" element={<Contacto />}></Route>
                                    <Route path="/detalle" element={<Detalle />}></Route>
                                    <Route path="*" element={<h1>404</h1>}></Route>
                                </Route>
                            </Routes>
                        </BrowserRouter>
    </>                 

  );
}

export default Rutas;
