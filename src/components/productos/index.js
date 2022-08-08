import React from 'react'
import IMG from "../../imagenes/medusa2.jpg";

export const ProductosLista = () => {
  return (
    <>
    <h1 className='title'>Productos</h1>
    <div className='productos'>
    <a href='#'>
    <div className='producto'>
    <img src={IMG} alt="" />
    </div>
    </a>
    <div className='producto__footer'>
      <h1>Title</h1>
      <p>Categoria</p>
      <p className='price'>300$</p>
    </div>
    <div  className='buttom'>
      <button className='btn'>añadir al carrito</button>
      <div>
      <a href='#' className='btn' >Vista</a>
      </div>
    </div>
    </div>
    
    </>
  )
}

