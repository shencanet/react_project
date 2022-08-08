import React from 'react'
import { Link } from "react-router-dom";
import Amanda3 from "../imagenes/amanda.png";
import Emma3 from "../imagenes/emma.png";
import Shawn3 from "../imagenes/shawn.png";



const Navegacion = () => {
  return (
    <div>
    <Link to="/Emma">
        <figure>
            <img src={Emma3}/>
            <figcaption>Emma</figcaption>
        </figure>
    </Link>

    <Link to="/Amanda">
        <figure>
            <img src={Amanda3}/>
            <figcaption>Shawn</figcaption>
        </figure>
    </Link>
    <Link to="/Shawn">
    
        <figure>
            <img src={Shawn3}/>
            <figcaption>Amanda</figcaption>
        </figure>
    </Link>
    </div>
  )
}

export default Navegacion