import { BoxIconElement } from 'boxicons';
import React from 'react';
import 'boxicons';
import Medusa1 from "../../imagenes/medusa1.jpg";//logo tienda 

 export const Header = () => {
  return (
    <header>
  
    <a href='#'>
    <div className='logo'>
      <img src={Medusa1} alt="medusa1"  width='150'/>
    </div>
    </a>
    <ul>
    <li>
      <a href='#'>Inicio</a>
    </li>
    <li>
      <a href='#'>Producto</a>
    </li>


    </ul>
    <div className='cart'>
    <box-icon name="cart" size='lg' animation="burst-hover"></box-icon>
   
    <span className='item__total'>2</span>
    </div>
    

    </header>
  )
}

